import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

// Global styles
import "./styles/globals.css";
import "./styles/invitation.css";
import "./styles/quran.css";
import "./styles/countdown.css";
import "./styles/venue.css";
import "./styles/rsvp.css";
import "./styles/wedding-door.css";
import "./styles/footer.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
