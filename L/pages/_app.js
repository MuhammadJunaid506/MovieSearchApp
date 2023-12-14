import '../styles/globals.css'
import 'antd/dist/antd.css';
import 'animate.css';
import Script from 'next/script'
import UserContainer from "../config/context/user/UserContainer"
import "../styles/slick.min.css"

function MyApp({ Component, pageProps }) {
  return (
    <UserContainer>
      {/* <Script
        id="tawk.to"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          var Tawk_API=Tawk_API||{ }, Tawk_LoadStart=new Date();
          (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/6058aaacf7ce18270932ab87/1f1d5lcql';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
          })();
          `,
        }}
      /> */}
      <Component {...pageProps} />
    </UserContainer>
  )
}

export default MyApp
