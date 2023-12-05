import { questions } from "../questions/questions";

export default function Result({ correct, again, setCorrect }) {
    
const againGame = () => {
    again(0)
    setCorrect(0)
}

    return (
      <div className="result">
        <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
            <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
        <button onClick={againGame}>Попробовать снова</button>
      </div>
    );
  }