import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button } from './Buttons';
import s from './Counter.module.css';

export const Counter = () => {
  const [value, setValue] = useState(0);
  let [maxValue, setMaxValue] = useState(5);
  let [startValue, setStartValue] = useState(0);
  let [maxValueCounter, setMaxValueCounter] = useState(maxValue);
  let [disabled, setDisabled] = useState(true);

  // let set = value;

  // useEffect(() => {
  //   let startV = localStorage.getItem('startV');
  //   let maxV = localStorage.getItem('maxV');

  //   if (startV && maxV) {
  //     let newStartV = JSON.parse(startV);
  //     let newMaxV = JSON.parse(maxV);
  //     setMaxValue(newMaxV);
  //     setStartValue(newStartV);
  //     props.setValue(newStartV);
  //     setMaxValueCounter(newMaxV);
  //   }
  // }, []);

  const setHandler = () => {
    setMaxValueCounter(maxValue);
    setStartValue(startValue);
    setValue(startValue);
    setDisabled(true);
    // localStorage.setItem('maxV', JSON.stringify(maxValue));
    // localStorage.setItem('startV', JSON.stringify(startValue));
  };

  const incHandler = () => {
    if (value < maxValueCounter) {
      setValue(value + 1);
    }
  };

  const resetHandler = () => {
    setValue(+startValue);
  };

  const maxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    maxValue = +e.currentTarget.value;
    setMaxValue(maxValue);

    setDisabled(false);
  };

  const startChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    startValue = +e.currentTarget.value;
    setStartValue(startValue);

    setDisabled(false);
  };

  return (
    <div className={s.counter}>
      <div className={s.counterLeft}>
        <div className={s.counterTopLeft}>
          <div className={s.maxValue}>
            <span> max value:</span>
            <input
              className={
                startValue >= maxValue || maxValue < 0 ? s.inputError : ''
              }
              type='number'
              onChange={maxChangeHandler}
              value={maxValue}
            />
          </div>
          <div className={s.startValue}>
            <span>start value:</span>
            <input
              className={
                startValue < 0 || startValue >= maxValue ? s.inputError : ''
              }
              type='number'
              onChange={startChangeHandler}
              value={startValue}
            />
          </div>
        </div>
        <div className={s.counterBottom}>
          <span className={s.aaa}>
            <Button
              name={'set'}
              callback={setHandler}
              disabled={disabled || startValue < 0 || maxValue <= startValue}
            />
          </span>
        </div>
      </div>
      <div className={s.counterRight}>
        {startValue < 0 || maxValue <= startValue ? (
          <div className={s.counterTopRight3}>incorrect value</div>
        ) : maxValue >= startValue ? (
          <div
            className={
              value < maxValueCounter ? s.counterTopRight1 : s.counterTopError
            }
          >
            {value}
          </div>
        ) : (
          <div className={s.counterTopRight2}>enter values and press 'set'</div>
        )}

        <div className={s.counterBottom}>
          <span className={s.aaa}>
            <Button
              name={'inc'}
              callback={incHandler}
              disabled={value >= maxValueCounter || !disabled}
            />
          </span>
          <span className={s.aaa}>
            <Button
              name={'reset'}
              callback={resetHandler}
              disabled={!disabled}
            />
          </span>
        </div>
      </div>
    </div>
  );
};
