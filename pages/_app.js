//Styles
import '@/public/css/bootstrap.min.css';

import '@/public/css/fontawesome.min.css';
import '@/public/css/callout.scss'; //bubble callout

import '@/public/css/animate.min.css';
import '@/public/css/react-medium-image-zoom.css';

//Added to styles.css directly
//import 'react-modal-video/scss/modal-video.scss';


/* 
https://react-accessible-accordion.springload.co.nz
import 'react-accessible-accordion/dist/fancy-example.css';

https://frontend-collective.github.io/react-image-lightbox/
import 'react-image-lightbox/style.css';

https://reactcommunity.org/react-tabs/
import 'react-tabs/style/react-tabs.css';


/*
https://fashion-slider.uiinitiative.com
import 'swiper/swiper.min.css';
import 'swiper/components/effect-cube/effect-cube.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
*/

import baseApiUrl from '@/utils/baseApiUrl';

//Must be here so thses styles override styles above
import '@/public/css/styles.css'

// For RTL (right to left for langage) version comment out the below rtl.css
 //import '@/public/css/rtl.css'

//Removed once meta tags where introduced
//import Layout from '@/components/_App/Layout';
import {useEffect} from "react"
import { createContext } from "react";
import Head from "next/head";

const injectGA = () => {
    if (typeof window == 'undefined') {
      return;
    }
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-1FGNMPH769'); 
    gtag('config', 'GTM-PMXLK3X');
};  

const injectScreeb = () => {
  if (typeof window == 'undefined' || typeof document == 'undefined') {
      return;
  }

  (function (s,c,r,ee,b) {
    s['ScreebObject']=r;s[r]=s[r]||function(){(s[r].q=s[r].q||[]).push(arguments)};
    b=c.createElement('script');b.type='text/javascript';
    b.id=r;b.src=ee;b.async=1;c.getElementsByTagName("head")[0].appendChild(b);
  }(window,document,'$screeb','https://t.screeb.app/tag.js'));

  $screeb('init', '6e488605-b63b-4de5-ab8d-43258b16d1a0');
}

const injectDrip = () => {
  var _dcq = _dcq || [];
  var _dcs = _dcs || {};
  _dcs.account = '5476781';

  (function() {
    if (typeof document == 'undefined') {
        return;
      }

    var dc = document.createElement('script');
    dc.type = 'text/javascript'; dc.async = true;
    dc.src = 'https://tag.getdrip.com/5476781.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(dc, s);
  })();
  
}

/*
const injectHotJar = () => {
        if (typeof window == 'undefined' || typeof document == 'undefined') {
            return;
         }

      (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:2684640,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
}
*/

export const GlobalContext = createContext({});
import {CloudinaryProvider} from '@/utils/CloudinaryContext';
import Script from 'next/script';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag'
import {  pageview } from '../lib/gtm'

const MyApp = ({ Component, pageProps }) => {
    const router = useRouter()
    useEffect(() => {
      const handleRouteChange = (url) => {
        gtag.pageview(url)
      }
      
      router.events.on('routeChangeComplete', handleRouteChange)
      router.events.on('hashChangeComplete', handleRouteChange)
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
        router.events.off('hashChangeComplete', handleRouteChange)
      }
    }, [router.events])
    useEffect(() => {
      router.events.on('routeChangeComplete', pageview)
      return () => {
        router.events.off('routeChangeComplete', pageview)
      }
    }, [router.events])
    return (  
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{global.siteName}</title>
                
                {/* Global site tag (gtag.js) - Google Analytics 
                NOW SETUP IN TAG MANAGER
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-1FGNMPH769" />
                */}
                {/* <script async src="https://www.googletagmanager.com/gtag/js?id=GTM-PMXLK3X" />
                <script async >{injectGA()}</script> */}

                {/* Remix icons  styles
                <link 
                    href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" 
                    rel="stylesheet"
                /> */}

                
                {/* Slick carousel styles */}
                {/* <link
                    rel="stylesheet"
                    type="text/css"
                    charSet="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                /> */}
                {/* <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                /> */}

                <link rel="apple-touch-icon" sizes="180x180" href={global.appleTouchIcon.url} />
                <link rel="icon" type="image/png" sizes="32x32" href={global.favicon32x32.url} />
                <link rel="icon" type="image/png" sizes="16x16" href={global.favicon16x16.url} />
                
                {/*                 <link rel="manifest" href="/site.webmanifest?v=2" />
                */}

                
                <link rel="mask-icon" href={global.maskIcon.url} color="#3a9be2" />
                <link rel="shortcut icon" href={global.shortCutIcon.url} />
                <meta name="msapplication-TileColor" content="#3a9be2" />
                <meta name="theme-color" content="#ffffff" />

                {/* GA Tag manager on top */}
                <script async type="text/javascript" charSet="UTF-8" src="https://cdn.cookie-script.com/s/d738b8e4a2d4ba05b4044ad18358621e.js"></script>
                <script async>{injectDrip()}</script>  
                
                {/*  https://web.dev/uses-rel-preconnect/?utm_source=lighthouse&utm_medium=devtools
                 */}
                <link rel="preconnect" href='/public/css/styles.css'></link>   
                <link rel="preconnect" href='/public/css/remixicon.css'></link>   

                <link rel="preconnect" href="https://d14jnfavjicsbe.cloudfront.net"></link>               
                <link rel="preconnect" href={baseApiUrl} crossOrigin="anonymous"></link>   
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"></link>  
    
                {/*
                <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous"></link>  
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"></link>   
                <link rel="preconnect" href="https://tag.getdrip.com"></link> 
                <script>{injectHotJar()}</script>
                <script>{injectScreeb()}</script>
                */}

{/* Meta Pixel Code 
                
                <script>
  !function(f,b,e,v,n,t,s){
    if(f.fbq)return; n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '792911371832127');
  fbq('track', 'PageView');
</script>
{/* End Meta Pixel Code */}
                
            </Head>
            <GlobalContext.Provider value={global}>
                <CloudinaryProvider>
                <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-1FGNMPH769`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1FGNMPH769', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
       <Script
        id="gtag-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PMXLK3X');`,
        }}
      />
                    <Component {...pageProps} />
                </CloudinaryProvider>
            </GlobalContext.Provider> 
        </>
    );
}

/*
export async function getServerSideProps(context) {
    const res = await fetchAPI("/global");
    //const global = await res.json();
    return {  pageProps: { global } };
}*/

/*
More info https://nextjs.org/docs/advanced-features/custom-app
// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
MyApp.getInitialProps = async (ctx) => {
    // Calls page's `getInitialProps` and fills `appProps.pageProps`
    //const appProps = await App.getInitialProps(ctx);
    
    // Fetch global site settings from Strapi
    const global = await fetch(`${baseApiUrl}/global`);
    //const global = await axios.get(`${baseApiUrl}/global`);
    // Pass the data to our page via props
    return { ...appProps, pageProps: { global } };
  };
 // 

 export async function getStaticProps() {
    console.info("getStaticProps");
    // Calls page's `getInitialProps` and fills `appProps.pageProps`
    //const appProps = await App.getInitialProps(ctx);
    
    // Fetch global site settings from Strapi
    const stuff = await fetch(`https://smartguess-web-backend.herokuapp.com/global`);
    const global = await stuff.json();
    //const global = await axios.get(`${baseApiUrl}/global`);
    // Pass the data to our page via props
    return { ...appProps, pageProps: { global } };
    
    */

const global = 
{
    "id": 1,
    "siteName": "Smart Guess for Planning Poker for Jira Cloud",
    "published_at": "2021-10-05T22:55:51.258Z",
    "created_at": "2021-10-05T21:27:53.220Z",
    "updated_at": "2021-10-10T22:18:51.663Z",
    "defaultSeo": {
        "id": 2,
        "metaTitle": "Your story estimation can be lightweight and efficient - but it's not.",
        //"metaTitle": "'The most efficient app for asynchronous estimations'", //55 or less
        
        "metaDescription": "Learn why teams are switching over from the most widely used apps on the market and giving Smart Guess great reviews.",
        //"metaDescription": "Plan and estimate your sprints in 20+ fewer steps than others! Smart Guess for Planning Poker, the easiest way to run story point estimation with your team 🚀", //125 or less
        //"metaDescription": "While other apps send you off to specific pages, Smart Guess allows you to run the entire estimation right from the issue 🚀",
        //"metaDescription": "We help development teams on a tight schedule run planning poker estimation faster. So they can spend more time delivering",
        //"metaDescription": "We help development teams on a tight schedule run story estimation in less time, so teams can focus on delivering results",

        "twitterCardType": "summary",
        "twitterUsername": "smartguess2",
        "video": {
            "url": "https://www.youtube.com/watch?v=s9JY6qf5AeA", //+response.data[0].youtubeVideoId, url: "https://www.youtube.com/watch?v=s9JY6qf5AeA"
            "image": "https://res.cloudinary.com/smartguess/image/upload/v1642201745/Smart_Guess_Video_thumbnail_2_ffabec29cb.webp", //response.data[0].image.url,
            "type": 'video/mp4',
            "width": 854 ,
            "height": 480,
        },
        "shareImage": [
            {
                "id": 260,
                "name": "Your-estimation-can-be-Google-Display-Still-Ads-1200x628.001.jpeg",
                "alternativeText": "",
                "caption": "",
                "width": 1200,
                "height": 628,
                "formats": {
                    "large": {
                        "ext": ".jpeg",
                        "url": "https://res.cloudinary.com/smartguess/image/upload/v1651742963/large_Your_estimation_can_be_Google_Display_Still_Ads_1200x628_001_11c37ca57f.jpg",
                        "hash": "large_Your_estimation_can_be_Google_Display_Still_Ads_1200x628_001_11c37ca57f",
                        "mime": "image/jpeg",
                        "name": "large_Your-estimation-can-be-Google-Display-Still-Ads-1200x628.001.jpeg",
                        "path": null,
                        "size": 79.8,
                        "width": 1000,
                        "height": 523,
                        "provider_metadata": {
                            "public_id": "large_Your_estimation_can_be_Google_Display_Still_Ads_1200x628_001_11c37ca57f",
                            "resource_type": "image"
                        }
                    },
                    "small": {
                        "ext": ".jpeg",
                        "url": "https://res.cloudinary.com/smartguess/image/upload/v1651742965/small_Your_estimation_can_be_Google_Display_Still_Ads_1200x628_001_11c37ca57f.jpg",
                        "hash": "small_Your_estimation_can_be_Google_Display_Still_Ads_1200x628_001_11c37ca57f",
                        "mime": "image/jpeg",
                        "name": "small_Your-estimation-can-be-Google-Display-Still-Ads-1200x628.001.jpeg",
                        "path": null,
                        "size": 27.23,
                        "width": 500,
                        "height": 262,
                        "provider_metadata": {
                            "public_id": "small_Your_estimation_can_be_Google_Display_Still_Ads_1200x628_001_11c37ca57f",
                            "resource_type": "image"
                        }
                    },
                    "medium": {
                        "ext": ".jpeg",
                        "url": "https://res.cloudinary.com/smartguess/image/upload/v1651742965/medium_Your_estimation_can_be_Google_Display_Still_Ads_1200x628_001_11c37ca57f.jpg",
                        "hash": "medium_Your_estimation_can_be_Google_Display_Still_Ads_1200x628_001_11c37ca57f",
                        "mime": "image/jpeg",
                        "name": "medium_Your-estimation-can-be-Google-Display-Still-Ads-1200x628.001.jpeg",
                        "path": null,
                        "size": 52.53,
                        "width": 750,
                        "height": 393,
                        "provider_metadata": {
                            "public_id": "medium_Your_estimation_can_be_Google_Display_Still_Ads_1200x628_001_11c37ca57f",
                            "resource_type": "image"
                        }
                    },
                    "thumbnail": {
                        "ext": ".jpeg",
                        "url": "https://res.cloudinary.com/smartguess/image/upload/v1651742962/thumbnail_Your_estimation_can_be_Google_Display_Still_Ads_1200x628_001_11c37ca57f.jpg",
                        "hash": "thumbnail_Your_estimation_can_be_Google_Display_Still_Ads_1200x628_001_11c37ca57f",
                        "mime": "image/jpeg",
                        "name": "thumbnail_Your-estimation-can-be-Google-Display-Still-Ads-1200x628.001.jpeg",
                        "path": null,
                        "size": 8.42,
                        "width": 245,
                        "height": 128,
                        "provider_metadata": {
                            "public_id": "thumbnail_Your_estimation_can_be_Google_Display_Still_Ads_1200x628_001_11c37ca57f",
                            "resource_type": "image"
                        }
                    }
                },
                "hash": "Your_estimation_can_be_Google_Display_Still_Ads_1200x628_001_11c37ca57f",
                "ext": ".jpeg",
                "mime": "image/jpeg",
                "size": 106.62,
                "url": "https://res.cloudinary.com/smartguess/image/upload/v1651742962/Your_estimation_can_be_Google_Display_Still_Ads_1200x628_001_11c37ca57f.jpg",
                "previewUrl": null,
                "provider": "cloudinary",
                "provider_metadata": {
                    "public_id": "Your_estimation_can_be_Google_Display_Still_Ads_1200x628_001_11c37ca57f",
                    "resource_type": "image"
                },
                "created_at": "2022-05-05T09:29:26.624Z",
                "updated_at": "2022-05-05T09:29:26.640Z"
            },
            {
                "id": 261,
                "name": "Most-Teams-Want-To-Google-Display-Still-Ads-1200x628.002.jpeg",
                "alternativeText": "",
                "caption": "",
                "width": 1200,
                "height": 628,
                "formats": {
                    "large": {
                        "ext": ".jpeg",
                        "url": "https://res.cloudinary.com/smartguess/image/upload/v1651745835/large_Most_Teams_Want_To_Google_Display_Still_Ads_1200x628_002_00f6984212.jpg",
                        "hash": "large_Most_Teams_Want_To_Google_Display_Still_Ads_1200x628_002_00f6984212",
                        "mime": "image/jpeg",
                        "name": "large_Most-Teams-Want-To-Google-Display-Still-Ads-1200x628.002.jpeg",
                        "path": null,
                        "size": 90.36,
                        "width": 1000,
                        "height": 523,
                        "provider_metadata": {
                            "public_id": "large_Most_Teams_Want_To_Google_Display_Still_Ads_1200x628_002_00f6984212",
                            "resource_type": "image"
                        }
                    },
                    "small": {
                        "ext": ".jpeg",
                        "url": "https://res.cloudinary.com/smartguess/image/upload/v1651745836/small_Most_Teams_Want_To_Google_Display_Still_Ads_1200x628_002_00f6984212.jpg",
                        "hash": "small_Most_Teams_Want_To_Google_Display_Still_Ads_1200x628_002_00f6984212",
                        "mime": "image/jpeg",
                        "name": "small_Most-Teams-Want-To-Google-Display-Still-Ads-1200x628.002.jpeg",
                        "path": null,
                        "size": 28.75,
                        "width": 500,
                        "height": 262,
                        "provider_metadata": {
                            "public_id": "small_Most_Teams_Want_To_Google_Display_Still_Ads_1200x628_002_00f6984212",
                            "resource_type": "image"
                        }
                    },
                    "medium": {
                        "ext": ".jpeg",
                        "url": "https://res.cloudinary.com/smartguess/image/upload/v1651745836/medium_Most_Teams_Want_To_Google_Display_Still_Ads_1200x628_002_00f6984212.jpg",
                        "hash": "medium_Most_Teams_Want_To_Google_Display_Still_Ads_1200x628_002_00f6984212",
                        "mime": "image/jpeg",
                        "name": "medium_Most-Teams-Want-To-Google-Display-Still-Ads-1200x628.002.jpeg",
                        "path": null,
                        "size": 57.17,
                        "width": 750,
                        "height": 393,
                        "provider_metadata": {
                            "public_id": "medium_Most_Teams_Want_To_Google_Display_Still_Ads_1200x628_002_00f6984212",
                            "resource_type": "image"
                        }
                    },
                    "thumbnail": {
                        "ext": ".jpeg",
                        "url": "https://res.cloudinary.com/smartguess/image/upload/v1651745835/thumbnail_Most_Teams_Want_To_Google_Display_Still_Ads_1200x628_002_00f6984212.jpg",
                        "hash": "thumbnail_Most_Teams_Want_To_Google_Display_Still_Ads_1200x628_002_00f6984212",
                        "mime": "image/jpeg",
                        "name": "thumbnail_Most-Teams-Want-To-Google-Display-Still-Ads-1200x628.002.jpeg",
                        "path": null,
                        "size": 8.27,
                        "width": 245,
                        "height": 128,
                        "provider_metadata": {
                            "public_id": "thumbnail_Most_Teams_Want_To_Google_Display_Still_Ads_1200x628_002_00f6984212",
                            "resource_type": "image"
                        }
                    }
                },
                "hash": "Most_Teams_Want_To_Google_Display_Still_Ads_1200x628_002_00f6984212",
                "ext": ".jpeg",
                "mime": "image/jpeg",
                "size": 123.4,
                "url": "https://res.cloudinary.com/smartguess/image/upload/v1651745835/Most_Teams_Want_To_Google_Display_Still_Ads_1200x628_002_00f6984212.jpg",
                "previewUrl": null,
                "provider": "cloudinary",
                "provider_metadata": {
                    "public_id": "Most_Teams_Want_To_Google_Display_Still_Ads_1200x628_002_00f6984212",
                    "resource_type": "image"
                },
                "created_at": "2022-05-05T10:17:16.968Z",
                "updated_at": "2022-05-05T10:17:16.985Z"
            }
        ]
    },
    "favicon": {
        "id": 143,
        "name": "SG-logo-color-05-MarketPlace.svg",
        "alternativeText": "",
        "caption": "",
        "width": 350,
        "height": 350,
        "formats": null,
        "hash": "SG_logo_color_05_Market_Place_b7ff5a6a60",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 2.85,
        "url": "https://res.cloudinary.com/smartguess/image/upload/v1633469252/SG_logo_color_05_Market_Place_b7ff5a6a60.svg",
        "previewUrl": null,
        "provider": "cloudinary",
        "provider_metadata": {
            "public_id": "SG_logo_color_05_Market_Place_b7ff5a6a60",
            "resource_type": "image"
        },
        "created_at": "2021-10-05T21:27:34.324Z",
        "updated_at": "2021-10-05T21:27:34.373Z"
    },
    "appleTouchIcon": {
        "id": 148,
        "name": "apple-touch-icon.png",
        "alternativeText": "",
        "caption": "",
        "width": 180,
        "height": 180,
        "formats": {
            "thumbnail": {
                "ext": ".png",
                "url": "https://res.cloudinary.com/smartguess/image/upload/v1633903995/thumbnail_apple_touch_icon_72f239544c.png",
                "hash": "thumbnail_apple_touch_icon_72f239544c",
                "mime": "image/png",
                "name": "thumbnail_apple-touch-icon.png",
                "path": null,
                "size": 11.05,
                "width": 156,
                "height": 156,
                "provider_metadata": {
                    "public_id": "thumbnail_apple_touch_icon_72f239544c",
                    "resource_type": "image"
                }
            }
        },
        "hash": "apple_touch_icon_72f239544c",
        "ext": ".png",
        "mime": "image/png",
        "size": 4.43,
        "url": "https://res.cloudinary.com/smartguess/image/upload/v1633903994/apple_touch_icon_72f239544c.png",
        "previewUrl": null,
        "provider": "cloudinary",
        "provider_metadata": {
            "public_id": "apple_touch_icon_72f239544c",
            "resource_type": "image"
        },
        "created_at": "2021-10-10T22:13:16.106Z",
        "updated_at": "2021-10-10T22:13:16.128Z"
    },
    "favicon32x32": {
        "id": 149,
        "name": "favicon-32x32.png",
        "alternativeText": "",
        "caption": "",
        "width": 32,
        "height": 32,
        "formats": null,
        "hash": "favicon_32x32_7bed8ccf20",
        "ext": ".png",
        "mime": "image/png",
        "size": 1.25,
        "url": "https://res.cloudinary.com/smartguess/image/upload/v1633904010/favicon_32x32_7bed8ccf20.png",
        "previewUrl": null,
        "provider": "cloudinary",
        "provider_metadata": {
            "public_id": "favicon_32x32_7bed8ccf20",
            "resource_type": "image"
        },
        "created_at": "2021-10-10T22:13:30.169Z",
        "updated_at": "2021-10-10T22:13:30.182Z"
    },
    "favicon16x16": [
        {
            "id": 150,
            "name": "favicon-16x16.png",
            "alternativeText": "",
            "caption": "",
            "width": 16,
            "height": 16,
            "formats": null,
            "hash": "favicon_16x16_5e858ded08",
            "ext": ".png",
            "mime": "image/png",
            "size": 0.51,
            "url": "https://res.cloudinary.com/smartguess/image/upload/v1633904023/favicon_16x16_5e858ded08.png",
            "previewUrl": null,
            "provider": "cloudinary",
            "provider_metadata": {
                "public_id": "favicon_16x16_5e858ded08",
                "resource_type": "image"
            },
            "created_at": "2021-10-10T22:13:43.825Z",
            "updated_at": "2021-10-10T22:13:43.851Z"
        }
    ],
    "maskIcon": {
        "id": 151,
        "name": "safari-pinned-tab.svg",
        "alternativeText": "",
        "caption": "",
        "width": 700,
        "height": 700,
        "formats": null,
        "hash": "safari_pinned_tab_004403806a",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 2.64,
        "url": "https://res.cloudinary.com/smartguess/image/upload/v1633904057/safari_pinned_tab_004403806a.svg",
        "previewUrl": null,
        "provider": "cloudinary",
        "provider_metadata": {
            "public_id": "safari_pinned_tab_004403806a",
            "resource_type": "image"
        },
        "created_at": "2021-10-10T22:14:18.875Z",
        "updated_at": "2021-10-10T22:14:18.887Z"
    },
    "shortCutIcon": {
        "id": 152,
        "name": "favicon.ico",
        "alternativeText": "",
        "caption": "",
        "width": null,
        "height": null,
        "formats": null,
        "hash": "favicon_af679d9935",
        "ext": ".ico",
        "mime": "image/x-icon",
        "size": 15.09,
        "url": "https://res.cloudinary.com/smartguess/image/upload/v1633904076/favicon_af679d9935.ico",
        "previewUrl": null,
        "provider": "cloudinary",
        "provider_metadata": {
            "public_id": "favicon_af679d9935",
            "resource_type": "image"
        },
        "created_at": "2021-10-10T22:14:36.915Z",
        "updated_at": "2021-10-10T22:14:36.939Z"
    }
};


export default MyApp;