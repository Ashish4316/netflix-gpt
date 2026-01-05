import React, { useEffect } from 'react'
import Body from "./components/Body.jsx";
import { Provider, useDispatch } from 'react-redux';
import appStore from './utils/appStore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/firebase';
import { addUser, removeUser } from './utils/userSlice';

function AuthListener() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName || '',
            photoURL: user.photoURL || null,
          })
        );
      } else {
        dispatch(removeUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return null;
}

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Provider store={appStore}>
        <AuthListener />
        <Body/>
      </Provider>
    </div>
  )
}
export default App
