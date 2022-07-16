import { DECREMENT, INCREMENT, RESET } from "../constant/constant";

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
    return {
      type: DECREMENT,
    };
  };

  export const reset = () => {
    return {
      type: RESET,
    };
  };