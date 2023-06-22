import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import LoginPage from './pages/loginpage';
import MemberHome from "./pages/memberHome";
import Signup from "./pages/signup";

function App() {
  return (
    <Router>
     
      <Routes>
      <Route path="/memberHome" element={<MemberHome/>}/>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/signup" element={<Signup/>}/>   
        
      </Routes>
     
    </Router>
  );
}

export default App;
