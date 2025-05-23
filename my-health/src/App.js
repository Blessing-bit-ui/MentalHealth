import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import Dashboard from './Dashboard'

const code=new URLSearchParams(window.location.search).get('code')

function App() {
  return  code? <Dashboard code={code} />:(<Login />)
}
export default App;
