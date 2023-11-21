import { useLocation, useNavigate } from "react-router-dom";
import { musicQuestions, moviesQuestions, mathsQuestions, geographyQuestions, historyQuestions } from "../questions";
import "../css/QuizPage.css";
import { useState } from "react";

function QuizPage() {
    const navigate = useNavigate();
    const locaton = useLocation();

    let currentQuestions, score;
    
    if (locaton.state === "music") currentQuestions = musicQuestions;
    else if (locaton.state === "movies") currentQuestions = moviesQuestions;
    else if (locaton.state === "maths") currentQuestions = mathsQuestions;
    else if (locaton.state === "geography") currentQuestions = geographyQuestions;
    else if (locaton.state === "history") currentQuestions = historyQuestions;
    else console.log("error");

    const navigateToResult = (currentQuestionsLength) => {
        navigate('/result', { state: { score, currentQuestionsLength } });
    };

    let [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div>
            <h1>{currentQuestions[currentIndex].question}</h1>
            <div id="quizPageButtons">
                <button onClick={() => {
                    if (currentIndex < currentQuestions.length - 1) setCurrentIndex(currentIndex + 1);
                    else navigateToResult(currentQuestions.length);
                }}>{currentQuestions[currentIndex].variant1}</button>

                <button onClick={() => {
                    if (currentIndex < currentQuestions.length - 1) setCurrentIndex(currentIndex + 1);
                    else navigateToResult(currentQuestions.length);
                }}>{currentQuestions[currentIndex].variant2}</button>

                <button onClick={() => {
                    if (currentIndex < currentQuestions.length - 1) setCurrentIndex(currentIndex + 1);
                    else navigateToResult(currentQuestions.length);
                }}>{currentQuestions[currentIndex].variant3}</button>

                <button onClick={() => {
                    if (currentIndex < currentQuestions.length - 1) setCurrentIndex(currentIndex + 1);
                    else navigateToResult(currentQuestions.length);
                }}>{currentQuestions[currentIndex].variant4}</button>
            </div>
        </div>
    );
}

export default QuizPage;
