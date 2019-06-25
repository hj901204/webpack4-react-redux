import React from 'react'
import ReactDOM from 'react-dom'
import style from './main.css'
import { hot } from 'react-hot-loader';
import { render } from 'react-dom';
import ListComponent from './component/listComponent.jsx'
import Header from './common/header.jsx';
import Footer from './common/footer.jsx';
const Page = () =>{
    return (
        <div>
            <Header />
            <p>React here!!!</p>
            <ListComponent />
            <Footer />
        </div>
    )
}

export default hot(module)(Page)

