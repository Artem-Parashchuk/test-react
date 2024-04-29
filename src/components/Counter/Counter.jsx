import { useState } from "react";
import s from "./Counter.module.css";

export const Counter = () => {
  const [count, setCount] = useState(1);
  const [step, setStep] = useState(1);

  const incrementCount = () => {
    setCount((prev) => prev + step);
  };

  const decrementCount = () => {
    setCount((prev) => prev - step);
  };

  const resetCount = () => {
    setCount(0);
    setStep(1);
  };
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <h1 className={s.count}>{count}</h1>

        <input
          type="number"
          className={s.input}
          onChange={(e) => setStep(+e.target.value)}
          value={step}
        />

        <div className={s.btn_block}>
          <button
            className={s.btn}
            onClick={decrementCount}
          >
            Minus
          </button>
          <button
            className={s.btn}
            onClick={resetCount}
          >
            Reset
          </button>
          <button
            className={s.btn}
            onClick={incrementCount}
          >
            Plus
          </button>
        </div>
      </div>
    </div>
  );
};
