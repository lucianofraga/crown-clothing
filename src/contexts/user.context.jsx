import { createContext, useState, useEffect } from 'react';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../utils/firebase.utils';

// Shape of the context object
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
}); 

// The Wrapping component that provides the state to its children
export const UserProvider = ({ children}) => {
    
    // hook 
    const [currentUser, setCurrentUser] = useState(null);
    // exporting the hook as value
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            setCurrentUser(user);
            createUserDocumentFromAuth(user);
        });

        return unsubscribe;
    }, [])
    

    // Providing access to the state (context) to all children components
    return <UserContext.Provider value={value}>{ children }</UserContext.Provider>
}
