import { Route } from 'react-router-dom';
import './App.scss';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Links from './components/Links/Links';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <div className="main">
      <Header />
      <Links />
      <Route path="/home" render={() => <Profile />} />
      <Route path="/dialogs" render={() => <Dialogs />} />
    </div>
  )
}

export default App;





