import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase.utils';


const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = createUserDocumentFromAuth(user)

        console.log('[signInWithGooglePopup.user]', user);
}


    return (
        <div>
            <h2>Sign-In Page</h2>
            <button onClick={ logGoogleUser}>Sign in with Google Popup</button>
        </div>
    )
}

export default SignIn;