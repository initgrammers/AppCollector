const initialState = {
  price: 0,
  normalPassenger: 0,
  specialPassenger: 0,
  normalRate: 0.25,
  specialRate: 0.12,
};

const handleAdd = (number) => {
  return number + 1;
};

const handleRemove = (number) => {
  return number > 0 ? number - 1 : 0;
};

const calPrice = (
  normalPassenger,
  specialPassenger,
  normalRate,
  specialRate
) => {
  return (
    normalPassenger * normalRate +
    specialPassenger * specialRate
  ).toFixed(2);
};

const rate = (state = initialState, action) => {
  let value = 0;
  switch (action.type) {
    case "ADD_NORMAL_PASSENGER":
      value = handleAdd(state.normalPassenger);
      return {
        ...state,
        normalPassenger: value,
        price: calPrice(
          value,
          state.specialPassenger,
          state.normalRate,
          state.specialRate
        ),
      };
    case "REMOVE_NORMAL_PASSENGER":
      value = handleRemove(state.normalPassenger);
      return {
        ...state,
        normalPassenger: value,
        price: calPrice(
          value,
          state.specialPassenger,
          state.normalRate,
          state.specialRate
        ),
      };
    case "ADD_SPECIAL_PASSENGER":
      value = handleAdd(state.specialPassenger);
      return {
        ...state,
        specialPassenger: value,
        price: calPrice(
          state.normalPassenger,
          value,
          state.normalRate,
          state.specialRate
        ),
      };
    case "REMOVE_SPECIAL_PASSENGER":
      value = handleRemove(state.specialPassenger);
      return {
        ...state,
        specialPassenger: value,
        price: calPrice(
          state.normalPassenger,
          value,
          state.normalRate,
          state.specialRate
        ),
      };
    case "RESET":
      return {
        ...state,
        specialPassenger: 0,
        normalPassenger: 0,
        price: 0,
      };
    default:
      return state;
  }
};

export default rate;
