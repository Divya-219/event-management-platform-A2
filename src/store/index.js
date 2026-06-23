import { configureStore }from "@reduxjs/toolkit";
import eventReducer from "./eventSlice";

import { eventApi }from "./eventApi";

export const redux =
configureStore({

  reducer: {

    event: eventReducer,

    [eventApi.reducerPath]:
      eventApi.reducer

  },

  middleware:
    (getDefaultMiddleware)=>

      getDefaultMiddleware()
      .concat(
        eventApi.middleware
      )

});