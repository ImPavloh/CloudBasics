'use client'

import { useEffect, useState } from 'react'
import Head from 'next/head'
import { tests, Question } from '../data/tests'

const QuizApp = () => {
  const [selectedTest, setSelectedTest] = useState<string>('seguridad')
  const [questionCount, setQuestionCount] = useState<number>(10)
  const [timerType, setTimerType] = useState<'stopwatch' | 'countdown'>(
    'stopwatch',
  )
  const [countdownTime, setCountdownTime] = useState<number>(300)

  const [quizStarted, setQuizStarted] = useState<boolean>(false)
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestion, setCurrentQuestion] = useState<number>(0)
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>([])
  const [questionStates, setQuestionStates] = useState<
    ('correct' | 'incorrect' | 'unanswered')[]
  >([])
  const [startTime, setStartTime] = useState<number>(0)
  const [timerDisplay, setTimerDisplay] = useState<string>('Tiempo: 0:00')
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(
    null,
  )
  const [isReviewMode, setIsReviewMode] = useState<boolean>(false)

  const loadQuestions = (test: string) => {
    const testQuestions = tests[test] || []
    const shuffled = testQuestions
      .sort(() => Math.random() - 0.5)
      .slice(0, questionCount)
    setQuestions(shuffled)
    setUserAnswers(Array(shuffled.length).fill(null))
    setQuestionStates(Array(shuffled.length).fill('unanswered'))
    setCurrentQuestion(0)
    setStartTime(Date.now())
    if (timerInterval) clearInterval(timerInterval)
  }

  useEffect(() => {
    loadQuestions(selectedTest)
  }, [selectedTest, questionCount, timerType])

  useEffect(() => {
    if (quizStarted) {
      if (timerInterval) clearInterval(timerInterval)
      if (timerType === 'countdown') {
        let timeLeft = countdownTime
        const interval = setInterval(() => {
          timeLeft -= 1
          if (timeLeft < 0) {
            clearInterval(interval)
            showSummary()
          } else {
            setTimerDisplay(
              `Tiempo: ${Math.floor(timeLeft / 60)}:${String(
                timeLeft % 60,
              ).padStart(2, '0')}`,
            )
          }
        }, 1000)
        setTimerInterval(interval)
      } else {
        const interval = setInterval(() => {
          const seconds = Math.floor((Date.now() - startTime) / 1000)
          setTimerDisplay(
            `Tiempo: ${Math.floor(seconds / 60)}:${String(
              seconds % 60,
            ).padStart(2, '0')}`,
          )
        }, 1000)
        setTimerInterval(interval)
      }
    }
    return () => {
      if (timerInterval) clearInterval(timerInterval)
    }
  }, [quizStarted, timerType, countdownTime, startTime])

  const startTest = () => {
    setQuizStarted(true)
    setIsReviewMode(false)
    setStartTime(Date.now())
    loadQuestions(selectedTest)
  }

  const selectAnswer = (answer: string) => {
    if (isReviewMode) return
    const newUserAnswers = [...userAnswers]
    newUserAnswers[currentQuestion] = answer
    setUserAnswers(newUserAnswers)
    const currentQ = questions[currentQuestion]
    const newStates = [...questionStates]
    newStates[currentQuestion] =
      answer === currentQ.correctAnswer ? 'correct' : 'incorrect'
    setQuestionStates(newStates)
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
      }
    }, 500)
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else if (!isReviewMode) {
      showSummary()
    }
  }

  const previousQuestion = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1)
  }

  const skipQuestion = () => {
    const newStates = [...questionStates]
    newStates[currentQuestion] = 'unanswered'
    setQuestionStates(newStates)
    const newUserAnswers = [...userAnswers]
    newUserAnswers[currentQuestion] = null
    setUserAnswers(newUserAnswers)
    nextQuestion()
  }

  const showSummary = () => {
    if (timerInterval) clearInterval(timerInterval)
    setQuizStarted(false)
  }

  const reviewAnswers = () => {
    setIsReviewMode(true)
    setCurrentQuestion(0)
  }

  const restartTest = () => {
    setQuizStarted(false)
    loadQuestions(selectedTest)
    startTest()
  }

  const newTest = () => {
    setQuizStarted(false)
  }

  return (
    <div className="mt-24 flex flex-col lg:flex-row p-8 gap-8">
      <aside className="w-full max-w-sm bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label
            htmlFor="test-select"
            className="font-semibold text-gray-700 dark:text-gray-200"
          >
            Seleccionar RA:
          </label>
          <select
            id="test-select"
            value={selectedTest}
            onChange={(e) => setSelectedTest(e.target.value)}
            className="mt-2 w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
          >
            <option value="seguridad">Seguridad</option>
            <option value="redes">Redes</option>
            <option value="servicios">Servicios</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="questions-count"
            className="font-semibold text-gray-700 dark:text-gray-200"
          >
            Número de preguntas:
          </label>
          <select
            id="questions-count"
            value={questionCount}
            onChange={(e) => setQuestionCount(parseInt(e.target.value, 10))}
            className="mt-2 w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
          >
            <option value={10}>10 preguntas</option>
            <option value={25}>25 preguntas</option>
            <option value={50}>50 preguntas</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="timer-type"
            className="font-semibold text-gray-700 dark:text-gray-200"
          >
            Tipo de temporizador:
          </label>
          <select
            id="timer-type"
            value={timerType}
            onChange={(e) =>
              setTimerType(e.target.value as 'stopwatch' | 'countdown')
            }
            className="mt-2 w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
          >
            <option value="stopwatch">Cronómetro</option>
            <option value="countdown">Cuenta atrás</option>
          </select>
        </div>
        {timerType === 'countdown' && (
          <div className="mb-4">
            <label
              htmlFor="countdown-time"
              className="font-semibold text-gray-700 dark:text-gray-200"
            >
              Tiempo de cuenta atrás:
            </label>
            <select
              id="countdown-time"
              value={countdownTime}
              onChange={(e) => setCountdownTime(parseInt(e.target.value, 10))}
              className="mt-2 w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
            >
              <option value={300}>5 minutos</option>
              <option value={600}>10 minutos</option>
              <option value={900}>15 minutos</option>
              <option value={1800}>30 minutos</option>
              <option value={3600}>1 hora</option>
            </select>
          </div>
        )}
        {!quizStarted && (
          <button
            onClick={startTest}
            className="w-full py-2 bg-blue-600 text-white rounded-md mt-4 hover:bg-blue-700"
          >
            Comenzar test
          </button>
        )}
        {quizStarted && (
          <>
            <div className="mt-6 grid grid-cols-5 gap-2">
              {questions.map((_, idx) => (
                <button
                  key={idx}
                  className={`py-1 rounded-md text-sm ${
                    idx === currentQuestion
                      ? 'bg-blue-600 text-white'
                      : questionStates[idx] === 'correct'
                      ? 'bg-green-500 text-white'
                      : questionStates[idx] === 'incorrect'
                      ? 'bg-red-500 text-white'
                      : 'bg-yellow-500 text-white'
                  }`}
                  onClick={() => setCurrentQuestion(idx)}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
            <div className="mt-4 flex justify-between">
              <button
                onClick={showSummary}
                className="py-2 px-4 bg-gray-600 text-white rounded-md hover:bg-gray-700"
              >
                Finalizar
              </button>
              <button
                onClick={restartTest}
                className="py-2 px-4 bg-gray-600 text-white rounded-md hover:bg-gray-700"
              >
                Reiniciar
              </button>
            </div>
          </>
        )}
      </aside>

      <section className="flex-1 bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        {quizStarted ? (
          <div>
            <div className="mb-4 text-center text-xl font-semibold" id="timer">
              {timerDisplay}
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-6">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{
                  width:
                    questions.length > 0
                      ? `${((currentQuestion + 1) / questions.length) * 100}%`
                      : '0%',
                }}
              ></div>
            </div>
            <div id="question-container">
              <div className="mb-4">
                <h2 className="text-2xl font-bold" id="question-number">
                  Pregunta {currentQuestion + 1} de {questions.length}
                </h2>
                <p className="mt-2 text-lg" id="question-text">
                  {questions[currentQuestion]?.question}
                </p>
              </div>
              <div className="space-y-4">
                {questions[currentQuestion]?.options.map((option) => (
                  <label
                    key={option}
                    className={`block p-4 border-2 rounded-md cursor-pointer ${
                      userAnswers[currentQuestion] === option
                        ? 'bg-blue-600 text-white border-blue-600'
                        : questionStates[currentQuestion] === 'correct' &&
                          option === questions[currentQuestion]?.correctAnswer
                        ? 'bg-green-500 text-white border-green-500'
                        : questionStates[currentQuestion] === 'incorrect' &&
                          userAnswers[currentQuestion] === option
                        ? 'bg-red-500 text-white border-red-500'
                        : 'bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-700'
                    }`}
                  >
                    <input
                      type="radio"
                      name="option"
                      value={option}
                      checked={userAnswers[currentQuestion] === option}
                      onChange={() => selectAnswer(option)}
                      disabled={!!userAnswers[currentQuestion]}
                      className="mr-2"
                    />
                    {option}
                  </label>
                ))}
              </div>
              <div className="mt-6 flex justify-between">
                <button
                  onClick={previousQuestion}
                  disabled={currentQuestion === 0}
                  className="py-2 px-4 bg-gray-600 text-white rounded-md hover:bg-gray-700 disabled:opacity-50"
                >
                  Anterior
                </button>
                <button
                  onClick={skipQuestion}
                  className="py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Saltar
                </button>
                <button
                  onClick={nextQuestion}
                  disabled={
                    currentQuestion === questions.length - 1 && !isReviewMode
                  }
                  className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                >
                  {isReviewMode && currentQuestion === questions.length - 1
                    ? 'Finalizar revisión'
                    : 'Siguiente'}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Resultados del test</h2>
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-6">
              <div className="p-4 bg-green-100 dark:bg-green-900 rounded-md">
                <h3 className="font-semibold text-green-700 dark:text-green-300">
                  Correctas
                </h3>
                <p className="text-2xl font-bold">
                  {questionStates.filter((s) => s === 'correct').length}
                </p>
              </div>
              <div className="p-4 bg-red-100 dark:bg-red-900 rounded-md">
                <h3 className="font-semibold text-red-700 dark:text-red-300">
                  Incorrectas
                </h3>
                <p className="text-2xl font-bold">
                  {questionStates.filter((s) => s === 'incorrect').length}
                </p>
              </div>
              <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-md">
                <h3 className="font-semibold text-blue-700 dark:text-blue-300">
                  Tiempo
                </h3>
                <p className="text-2xl font-bold">{timerDisplay}</p>
              </div>
              <div className="p-4 bg-yellow-100 dark:bg-yellow-900 rounded-md">
                <h3 className="font-semibold text-yellow-700 dark:text-yellow-300">
                  Saltadas
                </h3>
                <p className="text-2xl font-bold">
                  {questionStates.filter((s) => s === 'unanswered').length}
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <button
                onClick={reviewAnswers}
                className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Revisar respuestas
              </button>
              <button
                onClick={restartTest}
                className="py-2 px-4 bg-gray-600 text-white rounded-md hover:bg-gray-700"
              >
                Reiniciar test
              </button>
              <button
                onClick={newTest}
                className="py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Hacer otro
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}

export default function TestPage() {
  return (
    <>
      <Head>
        <title>Tests de Computación en la Nube</title>
        <meta name="description" content="Tests Computación en la Nube" />
      </Head>
      <main className="min-h-screen container mx-auto">
        <QuizApp />
      </main>
    </>
  )
}
