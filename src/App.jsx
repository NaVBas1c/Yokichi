import { ThemeProvider } from "./contexts/ThemeContext";
import { BrowserRouter } from "react-router-dom";
import Router from "./route/Router";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
