import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar.tsx";
import { Home } from "./components/Home.tsx";
import { ThemeProvider } from "./components/ThemeContext.tsx";
import { CardComponent } from "./components/CardComponent.tsx";

export function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Home />
        <CardComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
