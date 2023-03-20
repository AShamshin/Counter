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
  let [disabled, setDisabled] = useState(true);

  let set = props.value;

  const setHandler = () => {
    setMaxValueCounter(maxValue);
    setStartValue(startValue);
    props.setValue(startValue);
    setDisabled(true);
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
    setMaxValue(maxValue);
    maxValue > startValue && startValue >= 0
      ? setDisabled(false)
      : setDisabled(true);
  };

  const startChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    startValue = +e.currentTarget.value;
    setStartValue(startValue);

    maxValue > startValue && startValue >= 0
      ? setDisabled(false)
      : setDisabled(true);
  };

  // if (!disabled) {
  //   return props.value;
  // }

  return (
    <div className={s.counter}>
      <div className={s.counterLeft}>
        <div className={s.counterTopLeft}>
          <div className={s.maxValue}>
            <span> max value:</span>
            <input
              className={startValue >= maxValue ? s.inputError : ''}
              type='number'
              onChange={maxChangeHandler}
              value={maxValue}
            />
          </div>
          <div className={s.startValue}>
            <span>start value:</span>
            <input
              className={startValue < 0 ? s.inputError : ''}
              type='number'
              onChange={startChangeHandler}
              value={startValue}
            />
          </div>
        </div>
        <div className={s.counterBottom}>
          <span className={disabled ? s.disabled : s.aaa}>
            <Button name={'set'} callback={setHandler} disabled={disabled} />
          </span>
        </div>
      </div>
      <div className={s.counterRight}>
        {/* {disabled ? (
          <div
            className={
              set < maxValueCounter ? s.counterTopRight1 : s.counterTopError
            }
          >
            {props.value}
          </div>
        ) : (
          <div className={s.counterTopRight2}>enter values and press 'set'</div>
        )} */}

        {startValue < 0 || maxValue <= startValue ? (
          <div className={s.counterTopRight3}>incorrect value</div>
        ) : disabled ? (
          <div
            className={
              set < maxValueCounter ? s.counterTopRight1 : s.counterTopError
            }
          >
            {props.value}
          </div>
        ) : (
          <div className={s.counterTopRight2}>enter values and press 'set'</div>
        )}

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
