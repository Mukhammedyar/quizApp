import { useState } from "react";
import Game from "./Components/Game/game";
import { questions } from "./Components/questions/questions";
import Result from "./Components/result/result";
import "./index.scss";

function App() {
  const [step, setStep] = useState(0);
  const question = questions[step];
  const [correct, setCorrect] = useState(0);
  const persent = Math.round((step / questions.length) * 100);

  const nextStep = (index) => {
    setStep(step + 1);
    if (question.correct === index) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game question={question} onClick={nextStep} persent={persent} />
      ) : (
        <Result correct={correct} again={setStep} setCorrect={setCorrect} />
      )}
    </div>
  );
}

export default App;
