import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppRoute from "./Routes/AppRoute";

function App() {
  return (
    <Router>
      <main className="w-full min-h-screen flex flex-col md:min-h-[300px]">
        <AppRoute/>
      </main>
    </Router>
  );
}

export default App;
