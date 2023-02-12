import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.actions';
import { initialState } from './counter.state';

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counterInState: state.counterInState + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counterInState: state.counterInState - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counterInState: 0,
    };
  })
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
