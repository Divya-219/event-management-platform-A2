import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { redux } from "./store/index";

import ThemeProvider from "./context/ThemeContext";
import AuthProvider from "./context/AuthContext";

import { QueryClient, QueryClientProvider,} from "@tanstack/react-query";

import { RouterProvider } from "react-router-dom";

import { router } from "./routes/router";

import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <Provider store={redux}>

    <QueryClientProvider client={queryClient}>

      <ThemeProvider>
          <AuthProvider>

        <RouterProvider router={router} />
        </AuthProvider>

      </ThemeProvider>

    </QueryClientProvider>

  </Provider>

);