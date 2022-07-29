import {useState} from 'react';
import TranslationPage from './translations'

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>

      <TranslationPage />
    </div>
  )
}
