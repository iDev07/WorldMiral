const SET_Contabyuter = "SET_Contabyuter";
const InitialState = {
  contabyuter: [],
};
const SETContabyuter = (state = InitialState, action) => {
  switch (action.type) {
    case SET_Contabyuter:
      return {
        ...state,
        contabyuter: [...state.contabyuter, ...action.contabyuter],
      };

    default:
      return state;
  }
};
export const ContrabyuterAC = (contabyuter) => ({
  type: SET_Contabyuter,
  contabyuter,
});
export default SETContabyuter;
