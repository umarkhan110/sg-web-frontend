import React from 'react';

import SGNavbarStyle, { COLOR_MODE, DARK_MODE, LIGHT_MODE } from '@/components/Navbar/SGNavbarStyle';
// import SGMainBanner from '@/components/Banner/SGMainBanner';
import SectionTextPicture from '@/components/Elements/SectionTextPicture';
//import SGFeatures from '@/components/features/SGFeatures';
//import SGVideoBanner from '@/components/Banner/SGVideoBanner';
import SectionFullwidthImage from '@/components/Elements/SectionFullwidthImage';
//import FeatureList from '@/components/Elements/FeatureList';
//import VideoContent from '@/components/Common/VideoContent';

// import BlogPostSection from '@/components/Blog/BlogPostSection'
import SGFooterStyle from '@/components/Footer/SGFooterStyle';
import SGFreeTrialStyle from '@/components/FreeTrial/SGFreeTrialStyle3';
import SGVideoBanner from '@/components/Banner/SGVideoBanner';
import FunfactStyleOne from '@/components/Common/FunfactStyleOne';

import Seo from '@/components/_App/Seo';
import baseApiUrl from '@/utils/baseApiUrl';
import SGPartnerStyle from '@/components/Common/SGPartnerStyle';
import SectionTextPicForCustomer from '@/components/Elements/SectionTextPicForCustomer';
import dynamic from 'next/dynamic';
const SGMainBanner = dynamic(() => import('@/components/Banner/SGMainBanner'));
const BlogPostSection= dynamic(() => import('@/components/Blog/BlogPostSection'));

const IndexPage = (
  { pageProps, mainBannerContent, oneLiner,
    negativeStakes, twoSolutions,
    navbarUrl, logo, ctaInfo
  }) => {
  //const { content, isLoading, isError } = useContentData("content-data?slug=sb-negative-stakes");
  return (
    <>
      <Seo {...pageProps} /*videoSeo={videoSeo}*/ />
      <SGNavbarStyle ctaInfo={ctaInfo} logo={logo} menuCategory={navbarUrl} {...pageProps} stickyMode={DARK_MODE} nonStickyMode={COLOR_MODE} />

      {/* SB ONE LINER - WE HELP...  */}
      <SGMainBanner titleItalic={true} content={oneLiner} showImage={false} showCarousel={false} skipBackground={false} showCTA={true} />

      {/* TWO SOLUTIONS  */}
      <SectionFullwidthImage content={twoSolutions} url={'content-data?slug=two-solutions'} paddingBottom="pb-30" ></SectionFullwidthImage>

      {/* SB PROBLEM - THE VILLAN...  */}
      <SGMainBanner content={mainBannerContent} skipBackground={true} showBubbles={true} useH2Header={true} />

      {/* SB SOLUTION   */}
      <SGVideoBanner
        textThenVideo={false}
        useH2Header={true}
        videoUrl={"intro-videos?slug=smartguess-45sec-intro"}
        url={"content-data?slug=here-is-how-smart-guess-works"} />

      {/* SB - GIVES THEM A PLAN */}
      <SectionTextPicture renderPictureFirst={false} {...pageProps} url={"content-data?slug=sb-the-plan"} /*paddingBottom=""*/ />


      {/* SB - Negative Stakes 
                <SectionTextPicture renderPictureFirst={true} {...pageProps} url={"content-data?slug=sb-negative-stakes"} />   */}
      <SGMainBanner content={negativeStakes} useH2Header={false} showCarousel carouselAutoPlay={true} showImage={false} renderPictureFirst={true} paddingTop="0px" paddingBottom="30px" />

      {/* SB - Positive Stakes  -- TODO Create 1st-message as slug with sb-positive-stakes
                <SectionTextPicture renderPictureFirst={false} {...pageProps} url={"content-data?slug=sb-positive-stakes"} />   
                */}
      {/* WHAT CUSTOMER ARE SAYING  */}
      <SectionTextPicForCustomer renderPictureFirst={false} {...pageProps} url={"content-data?slug=1st-message"} paddingBottom={'pb-50'} />


      {/* SB - MEETS A GUIDE - AUTHORITY */}
      <FunfactStyleOne />  {/* Customers size ..  */}

      {/*SB-CALLS-USERS-TO-ACTION  */}
      <SGFreeTrialStyle {...pageProps} openInNew={true} hideSecondLink={false} url={"content-data?slug=free-trial-cta"} />

      {/* SB - MEETS A GUIDE - AUTHORITY */}
      <SGPartnerStyle />   {/* Trusted by teams at  */}


      {/* Remote Planning 
        <SectionPictureText renderPictureFirst={true} {...pageProps} url={"content-data?slug=remote-planning"} />   
        <SectionPictureText {...pageProps} magnify={true} url={"content-data?slug=does-not-slow-you-down"} />    
        <SectionPictureText renderPictureFirst={true} {...pageProps} url={"content-data?slug=1stgen-tool-problem"} />    
        <FeatureList {...pageProps} url={"content-data?slug=solution"} />
        <SectionPictureText {...pageProps} url={"content-data?slug=planning-from-backlog"} />
      */}

      <BlogPostSection {...pageProps} />

      {/* SB - MEETS A GUIDE - EMPATHY -> Replace with EDUCATE section
        <SectionTextPicture renderPictureFirst={true} {...pageProps} url={"content-data?slug=sb-guide-empathy"} padding={'pt-50'}
        />
      
        <VideoContent {...pageProps} url={"intro-videos?slug=smartguess-45sec-intro"} />
        <SGPricingPlanStyle {...pageProps} />
      */}

      {/*VIEW PRICING CTA FREE TOOLS WILL COST YOU MORE 
      <SGFreeTrialStyle {...pageProps} url={"content-data?slug=cta-pricing"} />
      */}

      {/*SB-THAT-ENDS-IN-SUCCESS  
      <SectionTextPicture {...pageProps} showCTA={true} url={"content-data?slug=sb-ends-in-success"} padding={true} /> 
      */}

      {/*SB-CALLS-USERS-TO-ACTION  */}
      <SGFreeTrialStyle {...pageProps} openInNew={true} hideSecondLink={false} url={"content-data?slug=free-trial-cta"} />

      {/* SB - EXPLANAOTYR PARAGRAPH  - SKIP REPLACE WITH EDUCATE 
        <SectionTextPicture renderPictureFirst={true} {...pageProps} url={"content-data?slug=sb-explanatory-paragraph"} padding={false} paddingTop={'pt-50'} paddingBottom={'pb-0'} /> 
        <SectionTextPicture showCTA={true} renderPictureFirst={false} {...pageProps} url={"content-data?slug=sb-explanatory-paragraph-2"} padding={false} paddingTop={'pt-0'} paddingBottom={'pb-50'} /> 
      */}

      <SGFooterStyle {...pageProps} />
    </>
  )
}

export async function getStaticProps(context) {
  const mainBannerRes = await fetch(`${baseApiUrl}/content-data?slug=sb-villain`);
  const mainBannerData = await mainBannerRes.json();

  const oneLinerRes = await fetch(`${baseApiUrl}/content-data?slug=sb-one-liner`);
  const oneLinerData = await oneLinerRes.json();

  const negativeStakesRes = await fetch(`${baseApiUrl}/content-data?slug=sb-negative-stakes`);
  const negativeStakesData = await negativeStakesRes.json();

  const twoSolutionsRes = await fetch(`${baseApiUrl}/content-data?slug=two-solutions`);
  const twoSolutionsData = await twoSolutionsRes.json();

  //Navbar
  const navbarUrlRes = await fetch(`${baseApiUrl}/menu-dropdowns?slug=sg-landing-page&_sort=order:desc`);
  const navbarUrlData = await navbarUrlRes.json();

  const logoRes = await fetch(`${baseApiUrl}/site-logo`);
  const logoData = await logoRes.json();

  const ctaRes = await fetch(`${baseApiUrl}/content-data?slug=nav-try-button`);
  const ctaData = await ctaRes.json();

  return {
    props: {
      mainBannerContent: Array.isArray(mainBannerData) ? mainBannerData[0] : mainBannerResults,
      oneLiner: Array.isArray(oneLinerData) ? oneLinerData[0] : oneLinerData,
      negativeStakes: Array.isArray(negativeStakesData) ? negativeStakesData[0] : negativeStakesData,
      twoSolutions: Array.isArray(twoSolutionsData) ? twoSolutionsData[0] : twoSolutionsData,
      navbarUrl: navbarUrlData,
      logo: logoData,
      ctaInfo: Array.isArray(ctaData) ? ctaData[0] : ctaData,
    }, // will be passed to the page component as props
  }
}

export default IndexPage;