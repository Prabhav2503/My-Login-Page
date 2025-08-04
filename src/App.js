import LoginPage from "./pages/loginpage.js"
import  Footer  from "./pages/footer.js";
import Header   from "./pages/header.js";
import MainContent   from "./pages/main.js";
import "./App.css";
import "./styles/loginpage.css"
import Sidebar from "./pages/sidebar.js";

function App() {
  return (
    <LoginPage heading = "Welcome Back!" title = "Login in to your account"/>
  );
}

export default App;
