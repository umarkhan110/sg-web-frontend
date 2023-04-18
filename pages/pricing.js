import React from 'react';

import SGPageBannerStyle1 from '@/components/Common/SGPageBannerStyle1';
import SGNavbarStyle, { LIGHT_MODE, DARK_MODE, DARK_BTN_MODE } from '@/components/Navbar/SGNavbarStyle';

import SectionTextPicture from '@/components/Elements/SectionTextPicture';

import SGFooterStyle from '@/components/Footer/SGFooterStyle';
import SGFreeTrialStyle from '@/components/FreeTrial/SGFreeTrialStyle3';
import SGFeatures from '@/components/features/SGFeatures';

import SGPricingPlanStyle from '@/components/PricingPlan/SGPricingPlanStyle';
import Seo from '@/components/_App/Seo';
import baseApiUrl from '@/utils/baseApiUrl';

const IndexPage = ({ pageProps, pageTitle,
  logo, ctaInfo, navbarUrl, pricing }) => {
  return (
    <>
      <Seo {...pageProps} slug="/pricing/"  /*videoSeo={videoSeo}*/ />
      <SGNavbarStyle ctaInfo={ctaInfo} logo={logo} menuCategory={navbarUrl} stickyMode={DARK_MODE} nonStickyMode={LIGHT_MODE} buttonMode={DARK_BTN_MODE} />

      {pageTitle && (
        <SGPageBannerStyle1
          pageTitle={pageTitle.title}
          homePageUrl={pageTitle.homeUrl}
          homePageText={pageTitle.homeText}
          activePageText={pageTitle.activeText}
        />)}
      <SectionTextPicture renderPictureFirst={true} {...pageProps} url={"content-data?slug=pricing-section"} padding={true} />

      <SGPricingPlanStyle content={pricing} {...pageProps} />

      {/*
      <SGFreeTrialStyle {...pageProps} url={"content-data?slug=cta-pricing"} />
      */}

      {/*SUPPORT - SECURE - FULLY DOCUMENTED */}
      <SGFeatures {...pageProps} url={"content-data?slug=more-features"} />


      <SGFreeTrialStyle {...pageProps} openInNew={true} hideSecondLink={true} url={"content-data?slug=free-trial-cta"} />

      {/*
      <SectionPictureText renderPictureFirst={true} {...pageProps} url={"content-data?slug=not-convinced"} padding={true}  />    
      */}


      <SGFooterStyle {...pageProps} />
    </>
  )
}

export async function getServerSideProps() {
  const titleRes = await fetch(`${baseApiUrl}/page-titles?slug=pricing`);
  const pageTitle = await titleRes.json();

  const pricingRes = await fetch(`${baseApiUrl}/pricing-table`);
  const pricingData = await pricingRes.json();
  
  //Navbar
  const navbarUrlRes = await fetch(`${baseApiUrl}/menu-dropdowns?slug=sg-landing-page&_sort=order:desc`);
  const navbarUrlData = await navbarUrlRes.json();

  const logoRes = await fetch(`${baseApiUrl}/site-logo`);
  const logoData = await logoRes.json();

  const ctaRes = await fetch(`${baseApiUrl}/content-data?slug=nav-try-button`);
  const ctaData = await ctaRes.json();

  return {
    props: {
      pageTitle: pageTitle[0] /* initialPosts:posts,  */,
      navbarUrl: navbarUrlData,
      logo: logoData,
      ctaInfo: Array.isArray(ctaData) ? ctaData[0] : ctaData,
      pricing: Array.isArray(pricingData) ? pricingData[0] : pricingData,
    }, // will be passed to the page component as props
  }

}

export default IndexPage;