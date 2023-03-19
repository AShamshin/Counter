import React, { ChangeEvent, useState } from 'react';
import { Button } from './Buttons';
import s from './Counter.module.css';

type CounterPropsType = {
  value: number;
  setValue: any;
};

export const Counter = (props: CounterPropsType) => {
  let [maxValue, setMaxValue] = useState(5);
  let [startValue, setStartValue] = useState(0);
  let [maxValueCounter, setMaxValueCounter] = useState(maxValue);
  let a = true;

  let set = props.value;

  const setHandler = () => {
    setMaxValueCounter(maxValue);
    setStartValue(startValue);
    props.setValue(startValue);
  };

  const incHandler = () => {
    if (set < maxValueCounter) {
      props.setValue(set + 1);
    }
  };
  const resetHandler = () => {
    props.setValue(+startValue);
  };

  const maxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    maxValue = +e.currentTarget.value;
    a = false;
    setMaxValue(maxValue);
  };

  const startChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    startValue = +e.currentTarget.value;

    setStartValue(startValue);
    a = false;
  };
  console.log(a);
  return (
    <div className={s.counter}>
      <div className={s.counterLeft}>
        <div className={s.counterTopLeft}>
          <div className={s.maxValue}>
            <span> max value:</span>
            <input type='number' onChange={maxChangeHandler} value={maxValue} />
          </div>
          <div className={s.startValue}>
            <span>start value:</span>
            <input
              type='number'
              onChange={startChangeHandler}
              value={startValue}
            />
          </div>
        </div>
        <div className={s.counterBottom}>
          <span>
            <Button name={'set'} callback={setHandler} disabled={a} />
          </span>
        </div>
      </div>
      <div className={s.counterRight}>
        <div
          className={
            set < maxValueCounter ? s.counterTopRight : s.counterTopError
          }
        >
          {props.value}
        </div>
        <div className={s.counterBottom}>
          <span className={set < maxValueCounter ? s.aaa : s.disabled}>
            <Button
              name={'inc'}
              callback={incHandler}
              disabled={set >= maxValueCounter}
            />
          </span>
          <span className={s.aaa}>
            <Button name={'reset'} callback={resetHandler} />
          </span>
        </div>
      </div>
    </div>
  );
};
