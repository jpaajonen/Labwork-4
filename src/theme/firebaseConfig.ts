import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const config = {
    apiKey: "AIzaSyBzA7UHdi3cisS2Sj0GXmHlawwaKniK5TM",
    authDomain: "testiprojekti-52826.firebaseapp.com",
    projectId: "testiprojekti-52826",
    storageBucket: "testiprojekti-52826.appspot.com",
    messagingSenderId: "720701756143",
    appId: "1:720701756143:web:d5d4924a5f44644487411a"
}

const firebaseapp = firebase.initializeApp(config);

const db = firebaseapp.firestore();
const auth = firebase.auth();

export {auth, db };

export async function loginUser(username: string, password: string) {


    const email = `${username}@codedamn.com`
    try {
        const res = await firebase.auth().signInWithEmailAndPassword(email, password)
        console.log(res)
        return true

    } catch(error) {
        alert(error.message)
        return false
    }
    
}

export async function registerUser(username: string, password: string) {
    const email = `${username}@codedamn.com`
    try {
        const res = await firebase.auth().createUserWithEmailAndPassword(email, password);
        console.log(res);
        return true;
    } catch(error) {
        alert(error.message);
        return false;
    } 
}