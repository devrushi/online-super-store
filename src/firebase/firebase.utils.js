import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const config = 
    {
        apiKey: "AIzaSyAuGBzyAVwqU_ek8ywPS0JSsfTZ_AaBRPE",
        authDomain: "ark-farms.firebaseapp.com",
        projectId: "ark-farms",
        storageBucket: "ark-farms.appspot.com",
        messagingSenderId: "437287538947",
        appId: "1:437287538947:web:338d1606bef7400782d936"
      };

export const createUserDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }
        catch(err){
            console.log('error creating the user', err.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () =>auth.signInWithPopup(provider);

export default firebase;