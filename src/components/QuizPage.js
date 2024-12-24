import { useLocation, useNavigate } from "react-router-dom"
import {
    musicQuestions,
    moviesQuestions,
    mathsQuestions,
    geographyQuestions,
    historyQuestions,
} from "../questions"
import "../css/QuizPage.css"
import { useState } from "react"

function QuizPage() {
    const navigate = useNavigate()
    const location = useLocation()

    let currentQuestions

    if (location.state === "music") currentQuestions = musicQuestions
    else if (location.state === "movies") currentQuestions = moviesQuestions
    else if (location.state === "maths") currentQuestions = mathsQuestions
    else if (location.state === "geography")
        currentQuestions = geographyQuestions
    else if (location.state === "history") currentQuestions = historyQuestions
    else console.log("error")

    const navigateToResult = (score, currentQuestionsLength) => {
        navigate("/result", { state: { score, currentQuestionsLength } })
    }

    const [currentIndex, setCurrentIndex] = useState(0)
    const [score, setScore] = useState(0)

    const handleAnswerClick = (selectedVariant) => {
        if (selectedVariant === currentQuestions[currentIndex].trueVariant)
            setScore((prevScore) => prevScore + 1)

        if (currentIndex < currentQuestions.length - 1)
            setCurrentIndex((prevIndex) => prevIndex + 1)
        else {
            const updatedScore =
                selectedVariant === currentQuestions[currentIndex].trueVariant
                    ? score + 1
                    : score
            navigateToResult(updatedScore, currentQuestions.length)
        }
    }

    return (
        <div>
            <h1 id="question">{currentQuestions[currentIndex].question}</h1>
            <div id="quizPageButtons">
                <button onClick={() => handleAnswerClick(1)}>
                    {currentQuestions[currentIndex].variant1}
                </button>
                <button onClick={() => handleAnswerClick(2)}>
                    {currentQuestions[currentIndex].variant2}
                </button>
                <button onClick={() => handleAnswerClick(3)}>
                    {currentQuestions[currentIndex].variant3}
                </button>
                <button onClick={() => handleAnswerClick(4)}>
                    {currentQuestions[currentIndex].variant4}
                </button>
            </div>
        </div>
    )
}

export default QuizPage
