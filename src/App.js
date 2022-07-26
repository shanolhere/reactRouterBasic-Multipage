import {BrowserRouter,Route,Link,Switch,NavLink,Redirect,} from "react-router-dom";
import "./App.css";
//page components
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Article from "./pages/Article.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/articles/:idhere">
            <Article/>
          </Route>
          <Route path="*">
            <Redirect to="/"></Redirect>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
