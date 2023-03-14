import {useState} from 'react';
import TranslationPage from './translations'
import Leading from './leading/leading';
import DataProvider from '../components/layout';

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <DataProvider>
        <div>
          {loggedIn ? <Leading /> : <TranslationPage /> }
        </div>
    </DataProvider>
  )
}
