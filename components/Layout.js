import React from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import Header from './Header';
import ParticleSettings from './particlesetting';
import Iframe from 'react-iframe'

export default props => {
  const backgroundH="https://cdn.substack.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fafccb011-397a-478c-bfe2-edb1f75ae55d_500x281.gif";
  return (<div
    class="bk_Img"
    style={{
      backgroundImage: "url(" + backgroundH + ")",
      backgroundSize: "cover",
      height: "100vh",
    }}
  >
    
             
    <Container>
      <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        />
              

      </Head>
      <Header />
      {props.children}
    </Container>
    </div>
  );
};
