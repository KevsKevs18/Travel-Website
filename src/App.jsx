import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppRoute from "./Routes/AppRoute";
import RedirectOnRefresh from "./Components/RedirectOnRefresh";

function App() {
  return (
    <Router>
      <RedirectOnRefresh/>
      <main className="w-full min-h-screen flex flex-col md:min-h-[300px]">
        <AppRoute/>
      </main>
    </Router>
  );
}

export default App;
