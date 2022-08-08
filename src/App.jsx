import React from "react";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
import BrowserRouter from "react-router-dom/BrowserRouter";
import NewNav from "./components/nav/NewNav";
import { Redirect, Route, Switch } from "react-router-dom";
import Education from "./components/education/Education";
import Projects from "./components/projects/Projects";
const store = ConfigureStore();

const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <NewNav></NewNav>
            <Switch>
              <Route
                path="/about"
                render={() => (
                  <React.Fragment>
                    <Header />
                    <About />
                  </React.Fragment>
                )}
              ></Route>
              <Route path="/education" component={Education}></Route>
              <Route path="/projects" component={Projects}></Route>
              <Route path="/contact" component={Contact}></Route>
              <Redirect to="/about"></Redirect>
            </Switch>
            {/*<Header></Header>
            <About></About>
            <Experience></Experience>
            <Services></Services>
            <Portfolio></Portfolio>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>*/}
          </div>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
