
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login';
import AuthProvider from './AuthProvider/AuthProvider';
import Appoinment from './Pages/Appoinment/Appoinment';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Teams from './Pages/Teams/Teams';
import Contact from './Pages/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute path='/team'>
              <Teams></Teams>
            </PrivateRoute>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <PrivateRoute path='/appoinment/:id'>
              <Appoinment></Appoinment>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
