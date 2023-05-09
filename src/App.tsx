import { Provider } from 'react-redux';
import './App.css';
import { Counter } from './Counter';
import { CounterRedux } from './CounterRedux';

import { store } from './store';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <CounterRedux />
        {/* <Counter /> */}
      </Provider>
    </div>
  );
}

export default App;
