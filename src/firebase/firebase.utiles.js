import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBvrIabxeY4qGpH0riZZVj9M4vjscHfro0",
    authDomain: "blez-clothing.firebaseapp.com",
    projectId: "blez-clothing",
    storageBucket: "blez-clothing.appspot.com",
    messagingSenderId: "506505010226",
    appId: "1:506505010226:web:bd8cc0e2cfe9c01361f02b",
    measurementId: "G-LT7MDEDHK6"
  };


export const createuserprofiledocument = async (userAuth,additionalData)=>{
if(!userAuth) return;
const userRef = firestore.doc(`user/${userAuth.uid}`)
const snapshot = await userRef.get();

if(!snapshot.exists){
  const {displayName,email}=userAuth;
  const createdat = new Date();
  try{
    await userRef.set({
      displayName,
      email,
      createdat,
      ...additionalData
    })
  }catch(error){
  
  }
}
return userRef;
};

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({})

export const signInWithGoogle = ()=>auth.signInWithPopup(provider);

export default firebase;