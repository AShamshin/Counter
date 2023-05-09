import React, { ChangeEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from './Buttons';
import s from './Counter.module.css';

import {
  incAC,
  maxChangeAC,
  resetAC,
  setAC,
  startChangeAC,
} from './reducerValue';
import { AppRootState } from './store';

export const CounterRedux = () => {
  const dispatch = useDispatch();
  const { value, maxValue, startValue, disabled } = useSelector<
    AppRootState,
    any
  >((state) => state.value);

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
    dispatch(setAC());

    // setDisabled(true);
    // localStorage.setItem('maxV', JSON.stringify(maxValue));
    // localStorage.setItem('startV', JSON.stringify(startValue));
  };

  const incHandler = () => {
    if (value < maxValue) {
      dispatch(incAC());
    }
  };

  const resetHandler = () => {
    dispatch(resetAC());
  };

  const maxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let maxValue = +e.currentTarget.value;
    dispatch(maxChangeAC(maxValue));
  };

  const startChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let startValue = +e.currentTarget.value;
    dispatch(startChangeAC(startValue));
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
        ) : disabled ? (
          <div
            className={
              value < maxValue ? s.counterTopRight1 : s.counterTopError
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
              disabled={value >= maxValue || !disabled}
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
