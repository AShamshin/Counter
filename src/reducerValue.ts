const initialState = { value: 0, startValue: 0, maxValue: 5, disabled: true };

export const valueReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case 'INC': {
      return { ...state, value: state.value + 1 };
    }
    case 'RESET': {
      return { ...state, value: (state.value = state.startValue) };
    }

    case 'SET': {
      return {
        ...state,
        value: (state.value = state.startValue),
        disabled: (state.disabled = true),
      };
    }

    case 'START': {
      return {
        ...state,
        startValue: (state.startValue = action.startValue),
        disabled: (state.disabled = false),
      };
    }
    case 'MAX': {
      return {
        ...state,
        maxValue: (state.maxValue = action.maxValue),
        disabled: (state.disabled = false),
      };
    }
    default:
      return state;
  }
};

export const incAC = () => {
  return { type: 'INC' };
};
export const resetAC = () => {
  return { type: 'RESET' };
};
export const setAC = () => {
  return { type: 'SET' };
};

export const startChangeAC = (startValue: any) => {
  return { type: 'START', startValue };
};

export const maxChangeAC = (maxValue: any) => {
  return { type: 'MAX', maxValue };
};
