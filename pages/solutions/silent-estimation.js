import React from 'react';

import SGNavbarStyle,{COLOR_MODE, DARK_MODE,LIGHT_MODE} from '@/components/Navbar/SGNavbarStyle';
import SGMainBanner from '@/components/Banner/SGMainBanner';

import SectionTextPicture from '@/components/Elements/SectionTextPicture';
import SGFreeTrialStyle from '@/components/FreeTrial/SGFreeTrialStyle3';
import SGFooterStyle from '@/components/Footer/SGFooterStyle';

import Seo from '@/components/_App/Seo';
import baseApiUrl from '@/utils/baseApiUrl';

const IndexPage = ({pageProps, mainBannerContent, 
  navbarUrl, logo, ctaInfo}) => {
    return (
            <>
                <Seo {...pageProps} /*videoSeo={videoSeo}*/ />  
                <SGNavbarStyle ctaInfo={ctaInfo} logo={logo} menuCategory={navbarUrl} {...pageProps} stickyMode={DARK_MODE} nonStickyMode={COLOR_MODE} />
                
                {/* One liner  */}              
                <SGMainBanner content={mainBannerContent} useH2Header={false}  showImage={false} 
                  showCarousel={false}
                  renderPictureFirst={false} 
                  skipBackground={false}
                  showCTA={true} />

                {/* Problem */}              
                <SectionTextPicture renderPictureFirst={false} {...pageProps} url={"content-data?slug=se-problem"} padding={false} /> 

                {/* Solution */}              
                <SectionTextPicture renderPictureFirst={true} magnify={true} {...pageProps} url={"content-data?slug=se-solution"} padding={false} /> 

                {/* The plan */}              
                <SectionTextPicture renderPictureFirst={false} {...pageProps} url={"content-data?slug=se-plan"} padding={false} /> 

                {/* Negative stakes */}              
                <SectionTextPicture renderPictureFirst={true} {...pageProps} url={"content-data?slug=se-negative"} padding={false} /> 

                {/* Positive stakes */}              
                <SectionTextPicture renderPictureFirst={false} {...pageProps} url={"content-data?slug=se-positive"} paddingTop="pt-30" paddingBottom="pb-50"  /> 

                {/*SB-CALLS-USERS-TO-ACTION  */}
                <SGFreeTrialStyle {...pageProps} openInNew={true} hideSecondLink={false} url={"content-data?slug=free-trial-cta"} />          

                {/* TWO SOLUTIONS  */}
                <SectionTextPicture renderPictureFirst={false} magnify={true}  {...pageProps} url={"content-data?slug=check-planning-poker"} paddingTop="pt-30" paddingBottom="pb-50"  /> 
                
                <SGFooterStyle {...pageProps} />
            </>
    )
}

export async function getServerSideProps() {
  const mainBannerRes = await fetch(`${baseApiUrl}/content-data?slug=se-one-liner`);
  const mainBannerData = await mainBannerRes.json();

  const compareRes = await fetch(`${baseApiUrl}/content-data?slug=sg-vs-competition`);
  const compareData = await compareRes.json();

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
        competitionContent: Array.isArray(compareData)?  compareData[0] :compareData,
        navbarUrl: navbarUrlData, logo: logoData, 
        ctaInfo:  Array.isArray( ctaData) ? ctaData[0] : ctaData,
      }, // will be passed to the page component as props
  }
}


export default IndexPage;