
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


// firebaseConfig 정보로 firebase시작
const firebaseConfig = {
  apiKey: "AIzaSyBn8KDPqqGlNB6kIOKMOvwByQjVnnrJVXs",
  authDomain: "react-clone-e9594.firebaseapp.com",
  projectId: "react-clone-e9594",
  storageBucket: "react-clone-e9594.appspot.com",
  messagingSenderId: "837440038827",
  appId: "1:837440038827:web:67872a046d863d30c054ee",
  measurementId: "G-18JNWT63YL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// initializeApp(firebaseConfig); //변수없이왜? 파이어베이스 호출시 쓸 수 있도록 초기화 설정할거라


export const auth= getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;

