const firebaseConfig = {
  apiKey: 'AIzaSyD4PJLpFaFVmqGP8hj3eQsLA5JdehgWzgI',
  authDomain: 'list-eabfd.firebaseapp.com',
  projectId: 'list-eabfd',
  storageBucket: 'list-eabfd.appspot.com',
  messagingSenderId: '52683968498',
  appId: '1:52683968498:web:aab744f38400f02528656b',
};
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
