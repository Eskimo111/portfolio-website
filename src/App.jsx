import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
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
const store = ConfigureStore();

const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header></Header>
            <Nav></Nav>
            <About></About>
            <Experience></Experience>
            <Services></Services>
            <Portfolio></Portfolio>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
          </div>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
