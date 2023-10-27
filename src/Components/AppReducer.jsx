export default (state, action) => {
  switch (action.type) {
    case "Delete_Transaction":
      return {
        ...state,
        transaction: state.transaction.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
      case "Add_Transaction":
        return {
          ...state,
          transaction: [action.payload, ...state.transaction]
        };
    default:
      return state;
  }
};


