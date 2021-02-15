import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config={
    apiKey: "AIzaSyBuXl4X-vaJu_5rcIOTUO5MDv_mBtdmUnc",
    authDomain: "crown-db-e2c88.firebaseapp.com",
    projectId: "crown-db-e2c88",
    storageBucket: "crown-db-e2c88.appspot.com",
    messagingSenderId: "560515143582",
    appId: "1:560515143582:web:cc26d73043880b09d6a88f",
    measurementId: "G-H07JTTVXHG"
};

firebase.initializeApp(config)
export const auth=firebase.auth();
export const firestore=firebase.firestore()
/* createUserProfile is user data keeping in firebase user collection  */
const provider=new firebase.auth.GoogleAuthProvider();
export const signwithgoogle=()=>auth.signInWithPopup(provider);

export const createUserProfile=async(userAuth,additionalData)=>{
    if (!userAuth) return
    const userRef=firestore.doc(`users/${userAuth.uid}`)
    const snapShot=await userRef.get()
    if(!snapShot.exists){
        const {displayName,email}=userAuth
        const createdAt=new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log(error)
        }
    }
    return userRef

}



export default firebase;