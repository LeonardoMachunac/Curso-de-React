import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAfKiV0I6xuzuR05NPxBNq69CwNaKfqH_o",
        authDomain: "fir-login-ebe7c.firebaseapp.com",
    projectId: "fir-login-ebe7c",
        storageBucket: "fir-login-ebe7c.appspot.com",
    messagingSenderId: "346977211299",
        appId: "1:346977211299:web:28d74b9e13e7fa9144c016"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app,auth};