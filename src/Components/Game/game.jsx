
export default function Game({ question, onClick,persent }) {
    return (
      <>
        <div className="progress">
          <div style={{ width: `${persent}%` }} className="progress__inner"></div>
        </div>
        <h1>{question.title}</h1>
        <ul>
            {question.variants.map((variant, index) =>
                <li key={variant} onClick={()=> onClick(index)}>{variant}</li>
            )}
          
        </ul>
      </>
    );
  }