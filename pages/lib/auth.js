import React, {useState, useEffect, useContext, createContext} from 'react';

if (!firebase.apps.length) {
    firebase.initializeApp(prod);
}