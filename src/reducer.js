export const reducer = (state = 5, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    case "CLR":
      return (state = 0);
    default:
      return state;
  }
};
