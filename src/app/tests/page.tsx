'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import Head from 'next/head'
import { tests } from '../data/tests'
import { motion, AnimatePresence } from 'framer-motion'
import {
  AlertCircle,
  Clock,
  Award,
  BarChart,
  ChevronLeft,
  ChevronRight,
  Eye,
  RotateCcw,
  Home,
  ArrowRight,
  Timer,
  Settings,
  CheckCircle,
  XCircle,
  SkipForward,
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'

type TimerType = 'stopwatch' | 'countdown'
type QuestionState = 'correct' | 'incorrect' | 'unanswered' | 'skipped'
type QuizMode = 'practice' | 'exam'

interface Question {
  question: string
  options: string[]
  correctAnswer: string
  explanation?: string
}

interface QuizState {
  answer: string | null
  state: QuestionState
  timeSpent?: number
}

interface QuizConfig {
  testType: string
  questionCount: number
  timerType: TimerType
  countdownTime: number
  quizMode: QuizMode
  showExplanations: boolean
  allowSkip: boolean
  shuffleQuestions: boolean
  showTimer: boolean
}

const DEFAULT_COUNTDOWN = 300
const DEFAULT_CONFIG: QuizConfig = {
  testType: 'seguridad',
  questionCount: 10,
  timerType: 'stopwatch',
  countdownTime: DEFAULT_COUNTDOWN,
  quizMode: 'practice',
  shuffleQuestions: true,
  showExplanations: false,
  allowSkip: true,
  showTimer: true,
}

type Stage = 'config' | 'quiz' | 'review' | 'result'

const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

const QuizApp = () => {
  const [stage, setStage] = useState<Stage>('config')
  const [config, setConfig] = useState<QuizConfig>(DEFAULT_CONFIG)
  const [questions, setQuestions] = useState<Question[]>([])
  const [quizStates, setQuizStates] = useState<QuizState[]>([])
  const [currentQuestion, setCurrentQuestion] = useState<number>(0)
  const [startTime, setStartTime] = useState<number>(0)
  const [endTime, setEndTime] = useState<number>(0)
  const [timerDisplay, setTimerDisplay] = useState<string>('00:00')
  const [shuffledOptions, setShuffledOptions] = useState<string[][]>([])
  const timerRef = useRef<number | null>(null)

  const initializeQuiz = useCallback(() => {
    const testQuestions = tests[config.testType] || []
    const selectedQuestions = config.shuffleQuestions
      ? shuffleArray(testQuestions)
      : testQuestions

    const finalQuestions = selectedQuestions.slice(
      0,
      Math.min(config.questionCount, selectedQuestions.length),
    )

    const shuffledOpts = finalQuestions.map((question) =>
      shuffleArray(question.options),
    )
    setShuffledOptions(shuffledOpts)

    setQuestions(finalQuestions)
    setQuizStates(
      finalQuestions.map(() => ({
        answer: null,
        state: 'unanswered' as QuestionState,
        timeSpent: 0,
      })),
    )
    setCurrentQuestion(0)
    setStartTime(Date.now())

    if (config.timerType === 'countdown') {
      setEndTime(Date.now() + config.countdownTime * 1000)
    }
  }, [config])

  const calculateTime = useCallback(() => {
    if (config.timerType === 'stopwatch') {
      const seconds = Math.floor((Date.now() - startTime) / 1000)
      return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(
        2,
        '0',
      )}`
    }

    if (config.timerType === 'countdown') {
      const remaining = Math.max(0, Math.floor((endTime - Date.now()) / 1000))
      if (remaining <= 0 && stage === 'quiz') {
        finishTest()
        return '0:00'
      }
      return `${Math.floor(remaining / 60)}:${String(remaining % 60).padStart(
        2,
        '0',
      )}`
    }

    return '00:00'
  }, [startTime, endTime, config.timerType, stage])

  useEffect(() => {
    if (stage !== 'quiz') return

    const interval = window.setInterval(() => {
      setTimerDisplay(calculateTime())
    }, 1000)
    timerRef.current = interval

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [stage, calculateTime, config.timerType])

  const startTest = () => {
    initializeQuiz()
    setStage('quiz')
  }

  const finishTest = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
    setStage('result')
  }

  const handleAnswerSelection = (answer: string) => {
    if (stage !== 'quiz') return

    const newStates = [...quizStates]
    const currentQ = questions[currentQuestion]
    const isCorrect = answer === currentQ.correctAnswer

    newStates[currentQuestion] = {
      answer,
      state: isCorrect ? 'correct' : 'incorrect',
      timeSpent: Math.floor((Date.now() - startTime) / 1000),
    }
    setQuizStates(newStates)

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion((prev) => prev + 1)
      }, 3000)
    }
  }

  const handleSkipQuestion = () => {
    if (stage !== 'quiz' || !config.allowSkip) return

    const newStates = [...quizStates]
    newStates[currentQuestion] = {
      ...newStates[currentQuestion],
      state: 'skipped',
    }
    setQuizStates(newStates)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    }
  }

  const stats = {
    correct: quizStates.filter((s) => s.state === 'correct').length,
    incorrect: quizStates.filter((s) => s.state === 'incorrect').length,
    skipped: quizStates.filter((s) => s.state === 'skipped').length,
    unanswered: quizStates.filter((s) => s.state === 'unanswered').length,
    progress:
      (quizStates.filter((s) => s.state !== 'unanswered').length /
        (questions.length || 1)) *
        100 || 0,
  }

  const reviewTest = () => {
    setStage('review')
  }

  const repeatTest = () => {
    initializeQuiz()
    setStage('quiz')
  }

  const newTest = () => {
    setConfig(DEFAULT_CONFIG)
    setQuestions([])
    setQuizStates([])
    setCurrentQuestion(0)
    setStartTime(0)
    setEndTime(0)
    setTimerDisplay('00:00')
    setStage('config')
  }

  if (stage === 'config') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-20 md:mt-16 p-4 md:p-8"
      >
        <Card className="h-full flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-2xl md:text-3xl font-bold flex items-center justify-center gap-2">
              <Settings className="w-6 h-6" />
              Configuración
            </CardTitle>
            <CardDescription className="text-center">
              Personaliza las opciones antes de comenzar el test
            </CardDescription>
          </CardHeader>
          <CardContent>
            <motion.div
              className="space-y-2"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <Label htmlFor="testType">Tema del test:</Label>
                <Select
                  value={config.testType}
                  onValueChange={(value) =>
                    setConfig((prev) => ({ ...prev, testType: value }))
                  }
                >
                  <SelectTrigger id="testType" className="w-full">
                    <SelectValue placeholder="Selecciona un tema" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="seguridad">Seguridad</SelectItem>
                    <SelectItem value="redes">Redes</SelectItem>
                    <SelectItem value="servicios">Servicios</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <Label htmlFor="quizMode">Modo:</Label>
                <Select
                  value={config.quizMode}
                  onValueChange={(value) =>
                    setConfig((prev) => ({
                      ...prev,
                      quizMode: value as QuizMode,
                    }))
                  }
                >
                  <SelectTrigger id="quizMode" className="w-full">
                    <SelectValue placeholder="Selecciona un modo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="practice">Práctica</SelectItem>
                    <SelectItem value="exam">Examen</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <Label htmlFor="questionCount">Número de preguntas:</Label>
                <Select
                  value={String(config.questionCount)}
                  onValueChange={(value) =>
                    setConfig((prev) => ({
                      ...prev,
                      questionCount: Number(value),
                    }))
                  }
                >
                  <SelectTrigger id="questionCount" className="w-full">
                    <SelectValue placeholder="Selecciona un número" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="25">25</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                    <SelectItem value="100">100</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <Label htmlFor="timerType">Tipo de temporizador:</Label>
                <Select
                  value={config.timerType}
                  onValueChange={(value) =>
                    setConfig((prev) => ({
                      ...prev,
                      timerType: value as TimerType,
                    }))
                  }
                >
                  <SelectTrigger id="timerType" className="w-full">
                    <SelectValue placeholder="Selecciona un tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="stopwatch">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Cronómetro
                      </div>
                    </SelectItem>
                    <SelectItem value="countdown">
                      <div className="flex items-center gap-2">
                        <Timer className="w-4 h-4" />
                        Cuenta atrás
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>

              {config.timerType === 'countdown' && (
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  animate="visible"
                >
                  <Label htmlFor="countdownTime">Tiempo Límite:</Label>
                  <Select
                    value={String(config.countdownTime)}
                    onValueChange={(value) =>
                      setConfig((prev) => ({
                        ...prev,
                        countdownTime: Number(value),
                      }))
                    }
                  >
                    <SelectTrigger id="countdownTime" className="w-full">
                      <SelectValue placeholder="Selecciona un tiempo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="300">5 minutos</SelectItem>
                      <SelectItem value="600">10 minutos</SelectItem>
                      <SelectItem value="900">15 minutos</SelectItem>
                      <SelectItem value="1800">30 minutos</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>
              )}

              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <h3 className="text-sm font-medium">Opciones adicionales:</h3>
                <motion.div
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Checkbox
                    id="shuffleQuestions"
                    checked={config.shuffleQuestions}
                    onCheckedChange={(checked) =>
                      setConfig((prev) => ({
                        ...prev,
                        shuffleQuestions: !!checked,
                      }))
                    }
                  />
                  <Label
                    htmlFor="shuffleQuestions"
                    className="flex-1 cursor-pointer"
                  >
                    Mezclar preguntas (recomendado)
                  </Label>
                </motion.div>

                <motion.div
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Checkbox
                    id="allowSkip"
                    checked={config.allowSkip}
                    onCheckedChange={(checked) =>
                      setConfig((prev) => ({
                        ...prev,
                        allowSkip: !!checked,
                      }))
                    }
                  />
                  <Label htmlFor="allowSkip" className="flex-1 cursor-pointer">
                    Permitir saltar preguntas
                  </Label>
                </motion.div>

                <motion.div
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Checkbox
                    id="showExplanations"
                    checked={config.showExplanations}
                    onCheckedChange={(checked) =>
                      setConfig((prev) => ({
                        ...prev,
                        showExplanations: !!checked,
                      }))
                    }
                  />
                  <Label
                    htmlFor="showExplanations"
                    className="flex-1 cursor-pointer"
                  >
                    Mostrar solución al fallar
                  </Label>
                </motion.div>

                <motion.div
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Checkbox
                    id="showTimer"
                    checked={config.showTimer}
                    onCheckedChange={(checked) =>
                      setConfig((prev) => ({
                        ...prev,
                        showTimer: !!checked,
                      }))
                    }
                  />
                  <Label htmlFor="showTimer" className="flex-1 cursor-pointer">
                    Mostrar temporizador
                  </Label>
                </motion.div>
              </motion.div>

              <motion.button
                className="inline-flex items-center justify-center p-3 w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={startTest}
              >
                Comenzar test
                <ArrowRight className="ml-4 h-4 w-4" aria-hidden="true" />
              </motion.button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  if (stage === 'quiz' || stage === 'review') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-20 md:mt-16 p-4 md:p-8"
      >
        <Card className="h-full flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-7xl mx-auto">
          <CardContent className="p-6 space-y-6">
            {stage === 'quiz' && config.showTimer && (
              <motion.div
                className="flex justify-between items-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center gap-2">
                  <Timer className="w-5 h-5" />
                  <span className="text-xl font-semibold">{timerDisplay}</span>
                </div>
              </motion.div>
            )}

            <motion.div
              className="w-full bg-gray-200 rounded-full h-2"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${stats.progress}%` }}
              />
            </motion.div>

            <div className="flex flex-wrap gap-2">
              {questions.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentQuestion(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    'w-10 h-10 rounded-md flex items-center justify-center text-sm font-medium transition-colors',
                    currentQuestion === index
                      ? 'bg-blue-600 text-white'
                      : quizStates[index].state === 'correct'
                      ? 'bg-green-500 text-white'
                      : quizStates[index].state === 'incorrect'
                      ? 'bg-red-500 text-white'
                      : quizStates[index].state === 'skipped'
                      ? 'bg-yellow-500 text-white'
                      : 'bg-gray-200 dark:bg-gray-700',
                  )}
                >
                  {index + 1}
                </motion.button>
              ))}
            </div>

            <div className="space-y-4">
              <motion.h2
                className="text-xl font-bold"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                Pregunta {currentQuestion + 1} de {questions.length}
              </motion.h2>

              <motion.p
                className="text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {questions[currentQuestion]?.question}
              </motion.p>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestion}
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {shuffledOptions[currentQuestion]?.map((option: string) => (
                    <motion.button
                      key={option}
                      onClick={() => handleAnswerSelection(option)}
                      disabled={stage === 'review'}
                      className={cn(
                        'w-full text-left p-4 rounded-md transition-all duration-200',
                        stage === 'review'
                          ? option === questions[currentQuestion].correctAnswer
                            ? 'bg-green-100 dark:bg-green-900 border-2 border-green-500'
                            : quizStates[currentQuestion].answer === option
                            ? 'bg-red-100 dark:bg-red-900 border-2 border-red-500'
                            : 'bg-gray-100 dark:bg-gray-700'
                          : quizStates[currentQuestion].answer === option
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600',
                      )}
                      whileHover={{
                        scale: stage !== 'review' ? 1.01 : 1,
                      }}
                      whileTap={{ scale: stage !== 'review' ? 0.99 : 1 }}
                    >
                      <div className="flex items-center gap-2">
                        {stage === 'review' &&
                          (option ===
                          questions[currentQuestion].correctAnswer ? (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          ) : quizStates[currentQuestion].answer === option ? (
                            <XCircle className="w-5 h-5 text-red-500" />
                          ) : null)}
                        <span>{option}</span>
                      </div>
                    </motion.button>
                  ))}
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-between pt-4">
                <div className="flex gap-2">
                  <motion.button
                    onClick={() =>
                      setCurrentQuestion((prev) => Math.max(prev - 1, 0))
                    }
                    disabled={currentQuestion === 0}
                    className="flex items-center gap-2 py-2 px-4 bg-gray-600 text-white rounded-md hover:bg-gray-700 disabled:opacity-50 transition-colors"
                    whileHover={{ scale: currentQuestion !== 0 ? 1.05 : 1 }}
                    whileTap={{ scale: currentQuestion !== 0 ? 0.95 : 1 }}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Anterior
                  </motion.button>

                  {stage === 'quiz' && config.allowSkip && (
                    <motion.button
                      onClick={handleSkipQuestion}
                      className="flex items-center gap-2 py-2 px-4 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <SkipForward className="w-4 h-4" />
                      Saltar
                    </motion.button>
                  )}
                </div>

                <motion.button
                  onClick={() =>
                    setCurrentQuestion((prev) =>
                      Math.min(prev + 1, questions.length - 1),
                    )
                  }
                  disabled={currentQuestion === questions.length - 1}
                  className="flex items-center gap-2 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 transition-colors"
                  whileHover={{
                    scale: currentQuestion !== questions.length - 1 ? 1.05 : 1,
                  }}
                  whileTap={{
                    scale: currentQuestion !== questions.length - 1 ? 0.95 : 1,
                  }}
                >
                  Siguiente
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </div>

              {config.showExplanations &&
                quizStates[currentQuestion].state === 'incorrect' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Alert className="mt-4">
                      <AlertCircle className="h-5 w-5" />
                      <AlertDescription>
                        {questions[currentQuestion].explanation ||
                          'La respuesta correcta es: ' +
                            questions[currentQuestion].correctAnswer}
                      </AlertDescription>
                    </Alert>
                  </motion.div>
                )}
            </div>

            <motion.div
              className="mt-8 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.button
                onClick={finishTest}
                className="py-2 px-6 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Finalizar test
              </motion.button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  if (stage === 'result') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-20 md:mt-16 p-4 md:p-8"
      >
        <Card className="h-full flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-2xl md:text-3xl">
              Resultados del test
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <motion.div
                  className="p-4 bg-green-100 dark:bg-green-900 rounded-lg text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <Award className="w-6 h-6 mx-auto mb-2" />
                  <h3 className="font-semibold">Correctas</h3>
                  <p className="text-2xl font-bold">{stats.correct}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {questions.length
                      ? ((stats.correct / questions.length) * 100).toFixed(1)
                      : 0}
                    %
                  </p>
                </motion.div>

                <motion.div
                  className="p-4 bg-red-100 dark:bg-red-900 rounded-lg text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <AlertCircle className="w-6 h-6 mx-auto mb-2" />
                  <h3 className="font-semibold">Incorrectas</h3>
                  <p className="text-2xl font-bold">{stats.incorrect}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {questions.length
                      ? ((stats.incorrect / questions.length) * 100).toFixed(1)
                      : 0}
                    %
                  </p>
                </motion.div>

                <motion.div
                  className="p-4 bg-blue-100 dark:bg-blue-900 rounded-lg text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Clock className="w-6 h-6 mx-auto mb-2" />
                  <h3 className="font-semibold">Tiempo total</h3>
                  <p className="text-2xl font-bold">{timerDisplay}</p>
                </motion.div>

                <motion.div
                  className="p-4 bg-yellow-100 dark:bg-yellow-900 rounded-lg text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <BarChart className="w-6 h-6 mx-auto mb-2" />
                  <h3 className="font-semibold">Saltadas</h3>
                  <p className="text-2xl font-bold">{stats.skipped}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {stats.unanswered} sin responder
                  </p>
                </motion.div>
              </div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.button
                  onClick={reviewTest}
                  className="flex items-center justify-center gap-2 py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Eye className="w-5 h-5" />
                  Revisar respuestas
                </motion.button>

                <motion.button
                  onClick={repeatTest}
                  className="flex items-center justify-center gap-2 py-3 px-6 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <RotateCcw className="w-5 h-5" />
                  Repetir test
                </motion.button>

                <motion.button
                  onClick={newTest}
                  className="flex items-center justify-center gap-2 py-3 px-6 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Home className="w-5 h-5" />
                  Nuevo test
                </motion.button>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return null
}

export default function TestPage() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Tests interactivos de Computación en la Nube con modos práctica y examen"
        />
      </Head>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { type: 'spring', stiffness: 100 },
          },
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <QuizApp />
      </motion.div>
    </>
  )
}
