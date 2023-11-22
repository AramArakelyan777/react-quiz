import { useLocation, useNavigate } from "react-router-dom";
import "../css/Result.css";

function Result() {
    const navigate = useNavigate();
    const location = useLocation();

    const navigateToHome = () => {
        navigate('/');
    };
    return (
        <div>
            <h1>And Bob's Your Uncle!</h1>
            <h3>The quiz is completed.</h3>
            <p>Your score is {location.state.score} out of {location.state.currentQuestionsLength}.</p>
            <button onClick={navigateToHome}>Go Home</button>
        </div>
    );
}

export default Result;
