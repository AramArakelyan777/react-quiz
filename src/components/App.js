import "../css/App.css";
import { Routes, Route, useNavigate } from 'react-router-dom';
import QuizPage from "./QuizPage";
import Result from "./Result";

function Home({ navigateToQuizPage }) {
  return (
    <div>
      <h1>Welcome To TriviaNestHub!</h1>
      <p>Please choose a category.</p>
      <div id="categoriesButtons">
        <button onClick={() => {
          navigateToQuizPage("music")
        }}>MUSIC</button>

        <button onClick={() => {
          navigateToQuizPage("movies")
        }}>MOVIES</button>

        <button onClick={() => {
          navigateToQuizPage("maths")
        }}>MATHS</button>

        <button onClick={() => {
          navigateToQuizPage("geography")
        }}>GEOGRAPHY</button>

        <button onClick={() => {
          navigateToQuizPage("history")
        }}>HISTORY</button>
      </div>
    </div>
  );
}

function App() {
  const navigate = useNavigate();

  const navigateToQuizPage = (category) => {
    navigate('/quizpage', { state: category });
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home navigateToQuizPage={navigateToQuizPage} />} />
        <Route path="/quizpage" element={<QuizPage />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
