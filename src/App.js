import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <Wrappers />;
    </div>
  );
}

const Wrappers = () => {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const date = new Date("july 13 2024");
  date.setDate(date.getDate() + count);
  console.log(date);


  const handleReset = () => {
    setStep(0)
    setCount(0)
  }

  return (
    <>
      <div className="container">
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        />
        <p>Step: {step}</p>
      </div>

      <div className="container">
        <button onClick={() => setCount(count - step)}>-</button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(+e.target.value)}
        />
        <button onClick={() => setCount(count + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was`}
        </span>
        <span> {date.toDateString()}</span>
      </p>

      <button onClick={handleReset} className={step ===0 && count ===0 && "disactive"}>Reset</button>

      {/* <div className="container">
        <button onClick={() => setStep(step - 1)}>-</button>
        <p>Step: {step}</p>
        <button onClick={() => setStep(step + 1)}>+</button>
      </div>

      <div className="container">
        <button onClick={() => setCount(count - step)}>-</button>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + step)}>+</button>
      </div>

      <p>
        <span>{ count === 0 ? "Today is" : count>0?`${count} days from today is `:`${Math.abs(count)} days ago was` }</span>
        <span> {date.toDateString()}</span>
      </p> */}
    </>
  );
};

export default App;
