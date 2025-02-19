'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import Head from 'next/head'
import { tests } from '../data/tests'
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
import { Button } from '@/components/ui/button'

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

const QuizApp = () => {
  const [stage, setStage] = useState<Stage>('config')
  const [config, setConfig] = useState<QuizConfig>(DEFAULT_CONFIG)
  const [questions, setQuestions] = useState<Question[]>([])
  const [quizStates, setQuizStates] = useState<QuizState[]>([])
  const [currentQuestion, setCurrentQuestion] = useState<number>(0)
  const [startTime, setStartTime] = useState<number>(0)
  const [endTime, setEndTime] = useState<number>(0)
  const [timerDisplay, setTimerDisplay] = useState<string>('00:00')
  const timerRef = useRef<number | null>(null)

  const initializeQuiz = useCallback(() => {
    const testQuestions = tests[config.testType] || []
    const selectedQuestions = config.shuffleQuestions
      ? [...testQuestions].sort(() => Math.random() - 0.5)
      : testQuestions

    const finalQuestions = selectedQuestions.slice(
      0,
      Math.min(config.questionCount, selectedQuestions.length),
    )

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
      <div className="mt-16 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <Card className="h-full flex flex-col bg-white dark:bg-gray-800 rounded-lg px-4 sm:px-6 py-6 sm:py-8 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-2xl font-bold">
                Configuración
              </CardTitle>
              <CardDescription className="text-center text-sm text-muted-foreground">
                Personaliza las opciones antes de comenzar el test
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
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
              </div>

              <div>
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
              </div>

              <div>
                <Label htmlFor="questionCount">Número de preguntas:</Label>
                <Select
                  value={String(config.questionCount)}
                  onValueChange={(value: string) =>
                    setConfig((prev: QuizConfig) => ({
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
              </div>

              <div>
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
                    <SelectItem value="stopwatch">Cronómetro</SelectItem>
                    <SelectItem value="countdown">Cuenta atrás</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {config.timerType === 'countdown' && (
                <div>
                  <Label htmlFor="countdownTime">Tiempo Límite:</Label>
                  <Select
                    value={config.countdownTime}
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
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Opciones adicionales:</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
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
                    <Label htmlFor="shuffleQuestions">
                      Mezclar preguntas (recomendado)
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="allowSkip"
                      checked={config.allowSkip}
                      onCheckedChange={(checked: boolean | 'indeterminate') =>
                        setConfig((prev: QuizConfig) => ({
                          ...prev,
                          allowSkip: !!checked,
                        }))
                      }
                    />
                    <Label htmlFor="allowSkip">Permitir saltar preguntas</Label>
                  </div>
                  <div className="flex items-center gap-2">
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
                    <Label htmlFor="showExplanations">
                      Mostrar respuestas al fallar
                    </Label>
                  </div>
                </div>
              </div>

              <Button onClick={startTest} className="w-full">
                Comenzar test
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (stage === 'quiz' || stage === 'review') {
    return (
      <div className="mt-16 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <Card className="h-full flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6 space-y-6">
              {stage === 'quiz' && config.showTimer && (
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span className="text-xl font-semibold">
                      {timerDisplay}
                    </span>
                  </div>
                </div>
              )}

              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${stats.progress}%` }}
                />
              </div>

              <div className="flex gap-2 flex-wrap">
                {questions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentQuestion(index)}
                    className={`w-10 h-10 rounded-md flex items-center justify-center ${
                      currentQuestion === index
                        ? 'bg-blue-600 text-white'
                        : quizStates[index].state === 'correct'
                        ? 'bg-green-500 text-white'
                        : quizStates[index].state === 'incorrect'
                        ? 'bg-red-500 text-white'
                        : quizStates[index].state === 'skipped'
                        ? 'bg-yellow-500 text-white'
                        : 'bg-gray-200 dark:bg-gray-700'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold">
                  Pregunta {currentQuestion + 1} de {questions.length}
                </h2>

                <p className="text-lg">
                  {questions[currentQuestion]?.question}
                </p>

                <div className="space-y-3">
                  {questions[currentQuestion]?.options.map((option: string) => (
                    <button
                      key={option}
                      onClick={() => handleAnswerSelection(option)}
                      disabled={stage === 'review'}
                      className={`w-full text-left p-4 rounded-md transition-colors ${
                        quizStates[currentQuestion].answer === option
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                <div className="flex justify-between pt-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        setCurrentQuestion((prev) => Math.max(prev - 1, 0))
                      }
                      disabled={currentQuestion === 0}
                      className="flex items-center gap-2 py-2 px-4 bg-gray-600 text-white rounded-md hover:bg-gray-700 disabled:opacity-50"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Anterior
                    </button>

                    {stage === 'quiz' && config.allowSkip && (
                      <button
                        onClick={handleSkipQuestion}
                        className="flex items-center gap-2 py-2 px-4 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
                      >
                        Saltar
                      </button>
                    )}
                  </div>

                  <button
                    onClick={() =>
                      setCurrentQuestion((prev) =>
                        Math.min(prev + 1, questions.length - 1),
                      )
                    }
                    disabled={currentQuestion === questions.length - 1}
                    className="flex items-center gap-2 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                  >
                    Siguiente
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {config.showExplanations &&
                  quizStates[currentQuestion].state === 'incorrect' && (
                    <Alert className="mt-4">
                      <AlertCircle className="h-5 w-5" />
                      <AlertDescription>
                        {questions[currentQuestion].explanation ||
                          'La respuesta correcta es: ' +
                            questions[currentQuestion].correctAnswer}
                      </AlertDescription>
                    </Alert>
                  )}
              </div>

              <div className="mt-8 flex justify-center">
                <button
                  onClick={finishTest}
                  className="py-2 px-6 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Finalizar Test
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (stage === 'result') {
    return (
      <div className="mt-16 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <Card className="h-full flex flex-col bg-white dark:bg-gray-800 rounded-lg px-4 sm:px-6 py-6 sm:py-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-center">Resultados del test</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 bg-green-100 dark:bg-green-900 rounded-lg text-center">
                    <Award className="w-6 h-6 mx-auto mb-2" />
                    <h3 className="font-semibold">Correctas</h3>
                    <p className="text-2xl font-bold">{stats.correct}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {questions.length
                        ? ((stats.correct / questions.length) * 100).toFixed(1)
                        : 0}
                      %
                    </p>
                  </div>

                  <div className="p-4 bg-red-100 dark:bg-red-900 rounded-lg text-center">
                    <AlertCircle className="w-6 h-6 mx-auto mb-2" />
                    <h3 className="font-semibold">Incorrectas</h3>
                    <p className="text-2xl font-bold">{stats.incorrect}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {questions.length
                        ? ((stats.incorrect / questions.length) * 100).toFixed(
                            1,
                          )
                        : 0}
                      %
                    </p>
                  </div>

                  <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-lg text-center">
                    <Clock className="w-6 h-6 mx-auto mb-2" />
                    <h3 className="font-semibold">Tiempo total</h3>
                    <p className="text-2xl font-bold">{timerDisplay}</p>
                  </div>

                  <div className="p-4 bg-yellow-100 dark:bg-yellow-900 rounded-lg text-center">
                    <BarChart className="w-6 h-6 mx-auto mb-2" />
                    <h3 className="font-semibold">Saltadas</h3>
                    <p className="text-2xl font-bold">{stats.skipped}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {stats.unanswered} sin responder
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={reviewTest}
                    className="flex items-center justify-center gap-2 py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <Eye className="w-5 h-5" />
                    Revisar respuestas
                  </button>

                  <button
                    onClick={repeatTest}
                    className="flex items-center justify-center gap-2 py-3 px-6 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <RotateCcw className="w-5 h-5" />
                    Repetir test
                  </button>

                  <button
                    onClick={newTest}
                    className="flex items-center justify-center gap-2 py-3 px-6 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <Home className="w-5 h-5" />
                    Nuevo test
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
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
      <QuizApp />
    </>
  )
}
