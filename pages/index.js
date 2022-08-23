import {useState} from 'react';
import TranslationPage from './translations'
import Leading from './leading/leading';

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <div>
      {loggedIn ? <Leading /> : <TranslationPage /> }
    </div>
  )
}
