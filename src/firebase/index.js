// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC3mpAzJDK3V3rpRWpGi1affTEEZYMFJ0k',
  authDomain: 'joplinultimatefrisbee.firebaseapp.com',
  projectId: 'joplinultimatefrisbee',
  storageBucket: 'joplinultimatefrisbee.appspot.com',
  messagingSenderId: '519167400712',
  appId: '1:519167400712:web:c095d2191a861b512faabd',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// export const createUser = (user) => {
//   return usersCollection.add(user);
// };

// export const getUser = async (id) => {
//   const user = await usersCollection.doc(id).get();
//   return user.exists ? user.data() : null;
// };

// export const updateUser = (id, user) => {
//   return usersCollection.doc(id).update(user);
// };

// export const deleteUser = (id) => {
//   return usersCollection.doc(id).delete();
// };

// export const useLoadUsers = () => {
//   const users = ref([]);
//   const close = usersCollection.onSnapshot((snapshot) => {
//     users.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//   });
//   onUnmounted(close);
//   return users;
// };

export { db };
