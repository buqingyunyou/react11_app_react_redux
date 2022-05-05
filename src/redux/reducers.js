export default function count(preState = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      console.log(preState, "preState");
      return preState + +action.data;
    case "DECREMENT":
      return preState - +action.data;
    default:
      return preState;
  }
}
