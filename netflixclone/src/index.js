/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { render } from 'react-dom';
import App from './app';
import 'normalize.css';
import {GlobalStyles} from './global-styles';
import { firebase } from './lib/firebase.prod'
import { FirebaseContext } from './context/firebase';

render(
    <>
        <FirebaseContext.Provider value={{ firebase }}>
            <GlobalStyles/>
            <App />
        </FirebaseContext.Provider>
    </>, 
    document.getElementById('root'));
