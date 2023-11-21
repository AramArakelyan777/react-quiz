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
            <h1>The Quiz Is Completed</h1>
            <p>Your score is {locaton.state.score} out of {locaton.state.currentQuestionsLength}.</p>
            <button onClick={navigateToHome}>Go Home</button>
        </div>
    );
}

export default Result;
