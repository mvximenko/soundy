import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBoPApM4uaLUnRH7LKWOukP4xkroudHcbU',
  authDomain: 'soundy-4abe5.firebaseapp.com',
  projectId: 'soundy-4abe5',
  storageBucket: 'soundy-4abe5.appspot.com',
  appId: '1:222202259623:web:dd36cea18dfbafbbaa5382',
};

initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
