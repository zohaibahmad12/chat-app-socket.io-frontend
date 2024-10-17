import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProtectedRoute from "./components/global/ProtectedRoute";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ProtectedRoute element={Chat} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
