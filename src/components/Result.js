import { useLocation, useNavigate } from "react-router-dom";
import "../css/Result.css";

function Result({ score }) {
    const navigate = useNavigate();
    const locaton = useLocation();

    const navigateToHome = () => {
        navigate('/');
    };
    return (
        <div>
            <h1>And Bob's Your Uncle!</h1>
            <h3>The quiz is completed.</h3>
            <p>Your score is {locaton.state.score} out of {locaton.state.currentQuestionsLength}.</p>
            <button onClick={navigateToHome}>Go Home</button>
        </div>
    );
}

export default Result;
