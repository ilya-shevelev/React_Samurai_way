import React, { Suspense } from 'react';
import './App.css';
import NavbarContainer from './components/Navbar/NavbarContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Routes, Route, Navigate } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import HeaderComponent from './components/Header/HeaderContainer';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import withRouter from './components/common/withRouter/withRouter';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));

class App extends React.Component {
  catchAllUnhandledErrors = (reason, promise) => {
    alert('some error occured'); // обработка глобальных ошибок
  }

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className='app-wrapper'>
        <HeaderComponent />
        <NavbarContainer />
        <div className='app-wrapper-content'>
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path="/" element={<Navigate to={'/profile'} />} />
              <Route path="/profile" element={<ProfileContainer />} />
              <Route path="/profile/:userId" element={<ProfileContainer />} />
              <Route path="/dialogs" element={<DialogsContainer />} />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
              <Route path='/users' element={<UsersContainer />} />
              <Route path='/login' element={<Login />} />
              <Route path='*' element={<div>404 NOT FOUND</div>} />
            </Routes>
          </Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);

const SamuraiJSApp = (props) => {
  return <BrowserRouter>
        <Provider store={store}> {/* в глобальный контекст можно передавать тему (светлую/темную), язык и т.п. */}
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;
