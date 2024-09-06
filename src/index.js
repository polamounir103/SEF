import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store.jsx";
import { AuthProvider } from "./providers/AuthContext.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
    <React.StrictMode>
      <AuthProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </AuthProvider>
  </React.StrictMode>
);


  /* reportWebVitals(); */

