import { GlobalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import Image from 'next/image';

import BagLogo from "@/assets/Logo.svg"
import { Container, Header,  } from '@/styles/pages/app';
GlobalStyles();
export default function App({ Component, pageProps }: AppProps) {

  return (
    <Container>
        <Header>
          <Image  src={BagLogo} height={50}   alt='bag-image'/>
        </Header>

        <Component {...pageProps} />
    </Container>
  )
}
