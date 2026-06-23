import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const eventApi = createApi({

  reducerPath: "eventApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/"
  }),

  tagTypes: ["Events"],

  endpoints: (builder) => ({

    getEvents: builder.query({

      query: () => "events",

      providesTags: ["Events"]

    }),

    addEvent: builder.mutation({

      query: (newEvent) => ({

        url: "events",

        method: "POST",

        body: newEvent

      }),

      invalidatesTags: ["Events"]

    })

  })

});

export const {

  useGetEventsQuery,

  useAddEventMutation

} = eventApi;