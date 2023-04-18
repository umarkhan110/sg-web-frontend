import React from 'react';

import SGNavbarStyle,{COLOR_MODE, DARK_MODE,LIGHT_MODE} from '@/components/Navbar/SGNavbarStyle';
import SGMainBanner from '@/components/Banner/SGMainBanner';

import SectionTextPicture from '@/components/Elements/SectionTextPicture';
import SGFreeTrialStyle from '@/components/FreeTrial/SGFreeTrialStyle3';
//import SectionFullwidthImage from '@/components/Elements/SectionFullwidthImage';
import SGFooterStyle from '@/components/Footer/SGFooterStyle';

//import SGEmailCapture from '@/components/Contact/SGEmailCapture';
import Seo from '@/components/_App/Seo';

import baseApiUrl from '@/utils/baseApiUrl';

//import { useContentData } from '@/utils/useContentData';


const IndexPage = ({pageProps, mainBannerContent, problem, negativeStakes,
  navbarUrl, logo, ctaInfo
}) => {

  //const { content, isLoading, isError } = useContentData("content-data?slug=sb-negative-stakes");
    return (
            <>
                <Seo {...pageProps} /*videoSeo={videoSeo}*/ /> 
                <SGNavbarStyle ctaInfo={ctaInfo} logo={logo} menuCategory={navbarUrl} {...pageProps} stickyMode={DARK_MODE} nonStickyMode={COLOR_MODE} />
                
                
                {/* One liner  */}              
                <SGMainBanner titleItalic={true} content={mainBannerContent} useH2Header={false}  showImage={false} 
                  showCarousel={false}
                  renderPictureFirst={false} 
                  skipBackground={false}
                  showCTA={true} />

                {/* Problem  */}              
                <SGMainBanner content={problem} skipBackground={true} showBubbles={true} useH2Header={true}  />
                

                {/* Solution */}              
                <SectionTextPicture renderPictureFirst={true} magnify={true} {...pageProps} url={"content-data?slug=pp-solution"} padding={false} /> 

                {/* The plan */}              
                <SectionTextPicture renderPictureFirst={false} {...pageProps} url={"content-data?slug=sb-the-plan"} padding={false} /> 

                {/* Negative stakes               
                <SectionTextPicture renderPictureFirst={true} {...pageProps} url={"content-data?slug=sb-negative-stakes"} padding={false} /> */}  
                <SGMainBanner content={negativeStakes} useH2Header={false} showCarousel carouselAutoPlay={true} showImage={false} renderPictureFirst={true} />

                {/* Positive stakes */}              
                <SectionTextPicture renderPictureFirst={false} {...pageProps} url={"content-data?slug=sb-positive-stakes"} padding={false} /> 

                {/*SB-CALLS-USERS-TO-ACTION  */}
                <SGFreeTrialStyle {...pageProps} openInNew={true} hideSecondLink={false} url={"content-data?slug=free-trial-cta"} />


                {/*
                <SectionTextPicture  url={'content-data?slug=lead-magnet-master'} renderPictureFirst ></SectionTextPicture>
                {/*
                EMAIL CAPTURE WIDGET       
                <SGEmailCapture url={'content-data?slug=lead-magnet-master'} />
                */}                 
                


                {/* TESTING
                <SGMainBanner skipBackground content={mainBannerContent} useH2Header={true}  showImage={false} renderPictureFirst={true} />
                */}

                
                {/* SB - EXPLANAOTYR PARAGRAPH            
                <SectionTextPicture renderPictureFirst={true} {...pageProps} url={"content-data?slug=sb-explanatory-paragraph"} padding={false} /> 
                <SectionTextPicture showCTA={true} renderPictureFirst={false} {...pageProps} url={"content-data?slug=sb-explanatory-paragraph-2"} padding={false} paddingTop={'pt-0'} paddingBottom={'pb-50'} /> 
                 */}

                {/* TWO SOLUTIONS  */}
                <SectionTextPicture renderPictureFirst={false} magnify={true}  {...pageProps} url={"content-data?slug=check-silent-estimation"} paddingTop="pt-30" paddingBottom="pb-50"  /> 

                <SGFooterStyle {...pageProps} />
            </>
    )
}

const mainBannerSlug="pp-one-liner";
const planningPokerProblem = "pp-problem";

export async function getServerSideProps() {
  const mainBannerRes = await fetch(`${baseApiUrl}/content-data?slug=${mainBannerSlug}`);
  const mainBannerData = await mainBannerRes.json();

  const problemRes = await fetch(`${baseApiUrl}/content-data?slug=${planningPokerProblem}`);
  const problemData = await problemRes.json();

  const negativeStakesRes = await fetch(`${baseApiUrl}/content-data?slug=sb-negative-stakes`);
  const negativeStakesData = await negativeStakesRes.json();

  //const { content, isLoading, isError } = useContentData("content-data?slug=sb-negative-stakes");
  


  //Navbar
  const navbarUrlRes = await fetch(`${baseApiUrl}/menu-dropdowns?slug=sg-landing-page&_sort=order:desc`);
  const navbarUrlData = await navbarUrlRes.json();

  const logoRes = await fetch(`${baseApiUrl}/site-logo`);
  const logoData = await logoRes.json();

  const ctaRes = await fetch(`${baseApiUrl}/content-data?slug=nav-try-button`);
  const ctaData = await ctaRes.json();

  return {
      props: { 
        mainBannerContent: Array.isArray(mainBannerData)?  mainBannerData[0] :mainBannerData,
        negativeStakes: Array.isArray(negativeStakesData)? negativeStakesData[0]: negativeStakesData,
        navbarUrl: navbarUrlData, logo: logoData, 
        ctaInfo:  Array.isArray( ctaData) ? ctaData[0] : ctaData,
        problem: Array.isArray(problemData) ? problemData[0] : problemData }, // will be passed to the page component as props
  }
}

export default IndexPage;