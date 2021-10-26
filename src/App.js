import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About/About";
import Appointment from "./components/Appointment/Appointment";
import Banner from "./components/Banner/Banner";
import ClinicalFacts from "./components/ClinicalFacts/ClinicalFacts";
import Contact from "./components/Contact/Contact";
import AuthProvider from "./components/Context/AuthContext";
import Feature from "./components/Feature/Feature";
import Footer from "./components/Footer/Footer";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Menu from "./components/Menu/Menu";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivetRoute/PrivetRoute";
import QualityService from "./components/QualityService/QualityService";
import Register from "./components/Register/Register";
import Services from "./components/Services/Services";
import ServicesDetails from "./components/Services/ServicesDetails";

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Header />
          <Menu />
          <Switch>
            <Route exact path="/">
              <Banner />
              <Feature />
              <QualityService />
              <Services home />
              <ClinicalFacts />
            </Route>
            <PrivateRoute path="/service/:serviceId">
              <ServicesDetails />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/forget-password">
              <ForgetPassword />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <PrivateRoute path="/appointment">
              <Appointment />
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
