import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar.tsx";
import { Home } from "./components/Home.tsx";

export function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
