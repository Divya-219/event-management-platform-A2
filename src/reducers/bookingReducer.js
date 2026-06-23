export const initialState = {
  step: 1,

  ticketType: "General",
  quantity: 1,

  attendee: {
    name: "",
    email: "",
    phone: "",
  },
};

export function bookingReducer(state, action) {
  switch (action.type) {
    case "NEXT_STEP":
      return {
        ...state,
        step: state.step + 1,
      };

    case "PREV_STEP":
      return {
        ...state,
        step: state.step - 1,
      };

    case "SET_TICKET":
      return {
        ...state,
        ticketType: action.payload,
      };

    case "SET_QUANTITY":
      return {
        ...state,
        quantity: action.payload,
      };

    case "SET_ATTENDEE":
      return {
        ...state,
        attendee: {
          ...state.attendee,
          ...action.payload,
        },
      };

    default:
      return state;
  }
}