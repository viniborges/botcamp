import React, {Component} from 'react';

import LogoBotcamp from './components/LogoBotcamp';
import BtnBotcamp from "./components/BtnBotcamp";
import LoginWrapper from './components/LoginWrapper';

import "./styles/reset.css";

class App extends Component {
    render(){
        return (
            <LoginWrapper>
                <LogoBotcamp />
                <BtnBotcamp />
            </LoginWrapper >
        );
    }
}

export default App;