import React from 'react'
import ReactDOM from 'react-dom'
import style from './main.css'
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux'
import ListCont from './containers/ListCont.jsx'
import Header from './common/header.jsx';
import Footer from './common/footer.jsx';
import rootReducer from './reducers'
import {applyMiddleware,createStore} from 'redux';
import thunk from 'redux-thunk';

let store = createStore(rootReducer,applyMiddleware(thunk));
const App = () =>{
    return (
        <Provider store={store}>
            <Header />
            <p>React here!</p>
            <ListCont />
            <Footer />
        </Provider>
    )
}

export default hot(module)(App)
