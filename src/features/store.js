import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  rightCount: 0,
  falseCount: 0,
};

const RIGHT_COUNT = "right/count";
const FALSE_COUNT = "false/count";

function reducer(state = initialState, action) {
  switch (action.type) {
    case RIGHT_COUNT:
      return { ...state, rightCount: state.rightCount + action.payload };
    case FALSE_COUNT:
      return { ...state, falseCount: state.falseCount + action.payload };
    default: {
      return state;
    }
  }
}

export const store = configureStore({reducer});

export function addRightCount(count) {
   return {type: RIGHT_COUNT,payload: count}
}

export function addFalseCount(count) {
   return {type: FALSE_COUNT,payload: count}
}
