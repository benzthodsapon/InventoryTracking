import "./App.css";
import PageHome from "./Page/PageHome";
import { BrowserRouter, Route, Link, Router, Redirect } from "react-router-dom";
import LoginPage from "./Page/LoginPage";

function App() {
 
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={LoginPage} />
        <Route path="/PageHome" component={PageHome} />
      </BrowserRouter>
    </div>
  );
}

export default App;
