import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB7Z_FEJxPp-REJSMnf-Uugfwg3cQGe_JA",
  authDomain: "aviportfolio-9bb21.firebaseapp.com",
  projectId: "aviportfolio-9bb21",
  storageBucket: "aviportfolio-9bb21.appspot.com",
  messagingSenderId: "360728000980",
  appId: "1:360728000980:web:473416ba49d7096e097e41",
  measurementId: "G-HPNGV3ZMMF"
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
