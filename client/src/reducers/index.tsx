/**
 * top-kek-rpg-client/src/reducers/index.tsx
 * This file contains the root reducer
 */

import { TestAction } from '../actions';
import { StoreState } from '../types/index';
import { TEST_ACTION } from '../actions/constants';

export function testReducer(state: StoreState, action: TestAction): StoreState {
  switch (action.type) {
    case TEST_ACTION:
      return { ...state, testState: action.data };
    
    default: 
      return state;
  }
}