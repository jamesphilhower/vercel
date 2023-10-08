import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import React, {useEffect} from 'react';


const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;