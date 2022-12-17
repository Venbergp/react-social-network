import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Seminars from './components/Seminars/Seminars';
import { Route, Routes } from 'react-router';

function App(props) {

  return (
    <div className="app-wraper">
      <Header />
      <NavBar />
      <div className="app-wraper-content"> 
        <Routes>
          <Route path="/dialogs/*" element={ <Dialogs {...props.messagesPage} dispatch = { props.dispatch } /> } />
          <Route path="/profile/*" element={ <Profile {...props.profilePage}  dispatch = { props.dispatch } /> } />
          <Route path="/seminars/*" element={ <Seminars {...props.seminarsPage}  dispatch = { props.dispatch } /> } />
        </Routes>
      </div>
    </div>
  );
} 



export default App;
