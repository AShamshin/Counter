import React from 'react';
import s from './Counter.module.css';

export const Counter = () => {
  return (
    <div className={s.counter}>
      <div className={s.counterLeft}>
        <div className={s.counterTop}>
          <div className={s.maxValue}>
            max value: <input type='number' />
          </div>
          <div className={s.minValue}>
            max value: <input type='number' />
          </div>
        </div>
        <div className={s.counterBottom}>
          <button>set</button>
        </div>
      </div>
      <div className={s.counterRight}>
        <div className={s.counterTop}>0</div>
        <div className={s.counterBottom}>
          <button>inc</button>
          <button>reset</button>
        </div>
      </div>
    </div>
  );
};
