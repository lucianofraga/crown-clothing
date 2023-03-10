import {
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
  auth,
} from '../../utils/firebase.utils';
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import './authentication.styles.scss';

const Authentication = () => {
  
  useEffect(() => {
    async function fn() {
      const res = await getRedirectResult(auth);
      console.log('[res]', res);

      if (res) {
        await createUserDocumentFromAuth(res.user);
      }
    }

    fn();
  }, []);

  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
