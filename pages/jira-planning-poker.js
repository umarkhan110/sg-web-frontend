import React from 'react';

import SGNavbarStyle, { COLOR_MODE, DARK_MODE, LIGHT_MODE } from '@/components/Navbar/SGNavbarStyle';
import SGMainBanner from '@/components/Banner/SGMainBanner';

import SectionTextPicture from '@/components/Elements/SectionTextPicture';
import SGFeatures from '@/components/features/SGFeatures';

import BlogPostSection from '@/components/Blog/BlogPostSection'
import SGFooterStyle from '@/components/Footer/SGFooterStyle';
import SGFreeTrialStyle from '@/components/FreeTrial/SGFreeTrialStyle3';
import SGVideoBanner from '@/components/Banner/SGVideoBanner';

import Seo from '@/components/_App/Seo';
import baseApiUrl from '@/utils/baseApiUrl';

const mainBannerSlug = "non-user-mainbanner-no-carousel";

const IndexPage = ({ pageProps, mainBannerContent, competitionContent,
  navbarUrl, logo, ctaInfo
 }) => {
  return (
    <>
      <Seo {...pageProps} /*videoSeo={videoSeo}*/ />
      <SGNavbarStyle ctaInfo={ctaInfo} logo={logo} menuCategory={navbarUrl}  {...pageProps} stickyMode={DARK_MODE} nonStickyMode={COLOR_MODE} />
      <SGMainBanner content={mainBannerContent} showBubbles={true} showCTA={true} />

      {/* WHAT CUSTOMER ARE SAYING  */}
      <SectionTextPicture renderPictureFirst={true}  {...pageProps} url={"content-data?slug=1st-message"} /* padding={'pt-100'} */ />

      {/* SEVEN WAYT OTHER TOOLS WASTE YOUR TIME  */}
      <SGMainBanner content={competitionContent} showCarousel={true} skipBackground={true} useH2Header={true} />

      {/* Remote Planning */}
      <SectionTextPicture renderPictureFirst={true}  {...pageProps} url={"content-data?slug=remote-planning"} />


      <SGVideoBanner
        textThenVideo={true}
        useH2Header={true}
        videoUrl={"intro-videos?slug=smartguess-45sec-intro"}
        url={"content-data?slug=here-is-how-smart-guess-works"} />

      <SGFeatures {...pageProps} url={"content-data?slug=more-features"} />

      <SGFreeTrialStyle {...pageProps} url={"content-data?slug=cta-pricing"} />
      <BlogPostSection {...pageProps} />
      <SGFooterStyle {...pageProps} />
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${baseApiUrl}/content-data?slug=${mainBannerSlug}`);
  const data = await res.json();
  let results = {}
  if (Array.isArray(data))
    results = data[0]
  else
    resutls = data;

  const resX = await fetch(`${baseApiUrl}/content-data?slug=sg-vs-competition`);
  const dataX = await resX.json();
  let resultsX = {}
  if (Array.isArray(dataX))
    resultsX = dataX[0]
  else
    resutlsX = dataX;

  //Navbar
  const navbarUrlRes = await fetch(`${baseApiUrl}/menu-dropdowns?slug=sg-landing-page&_sort=order:desc`);
  const navbarUrlData = await navbarUrlRes.json();

  const logoRes = await fetch(`${baseApiUrl}/site-logo`);
  const logoData = await logoRes.json();

  const ctaRes = await fetch(`${baseApiUrl}/content-data?slug=nav-try-button`);
  const ctaData = await ctaRes.json();

  return {
    props: { mainBannerContent: results, competitionContent: resultsX,
      navbarUrl: navbarUrlData,
      logo: logoData,
      ctaInfo: Array.isArray(ctaData) ? ctaData[0] : ctaData,
    }, // will be passed to the page component as props
  }
}


export default IndexPage;