import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import "./App.css";
import DetailedPage from "./pages/DetailedPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/details/:id" element={<DetailedPage />} />
        <Route path="" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
