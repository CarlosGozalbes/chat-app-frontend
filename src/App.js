import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/register" element={<Register />} exact></Route>
        <Route path="/login" element={<Login />}></Route>
      </Router>
    </div>
  );
}

export default App;
