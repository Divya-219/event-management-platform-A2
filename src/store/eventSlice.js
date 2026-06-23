import { createSlice } from "@reduxjs/toolkit";

const savedDraft =JSON.parse(
    localStorage.getItem(
      "eventDraft"
    )
  );

const initialState =  savedDraft ||  {
  title: "",
  description: "",
  category: "",
  image: "",

  date: "",
  time: "",
  location: "",

  ticketTypes: [],
   likes: 0,
    liked: false

};

const eventSlice = createSlice({
  name: "event",

  initialState,

  reducers: {

    updateField: (state, action) => {
      state[action.payload.name] =
        action.payload.value;
    },

    addTicket: (state) => {
      state.ticketTypes.push({
        name: "",
        price: "",
        available: "",
      });
    },

    removeTicket: (state, action) => {
      state.ticketTypes.splice(
        action.payload,
        1
      );
    },

    updateTicket: (state, action) => {

      const {
        index,
        field,
        value
      } = action.payload;

      state.ticketTypes[index][field] =
        value;
    },

  },
});

export const {
  updateField,
  addTicket,
  removeTicket,
  updateTicket
} = eventSlice.actions;

export default eventSlice.reducer;