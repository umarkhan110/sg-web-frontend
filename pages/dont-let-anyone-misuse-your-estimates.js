import React from 'react';

import SGNavbarStyle, { COLOR_MODE, DARK_MODE, LIGHT_MODE } from '@/components/Navbar/SGNavbarStyle';
import SGMainBanner from '@/components/Banner/SGMainBanner';

import SectionTextPicture from '@/components/Elements/SectionTextPicture';
//import SectionFullwidthImage from '@/components/Elements/SectionFullwidthImage';
import SGFooterStyle from '@/components/Footer/SGFooterStyle';

import SGEmailCapture from '@/components/Contact/SGEmailCapture';
import Seo from '@/components/_App/Seo';
import baseApiUrl from '@/utils/baseApiUrl';


const mainBannerSlug = "sb-guide-empathy-lead-magnet";

const IndexPage = ({ pageProps, mainBannerContent, 
  navbarUrl, logo, ctaInfo }) => {
  return (
    <>
      <Seo {...pageProps} /*videoSeo={videoSeo}*/ />
      <SGNavbarStyle  ctaInfo={ctaInfo} logo={logo} menuCategory={navbarUrl} {...pageProps} stickyMode={DARK_MODE} nonStickyMode={COLOR_MODE} />

      <SGMainBanner content={mainBannerContent} useH2Header={false} showCarousel showImage={false} renderPictureFirst={true} />
      {/*
        <SectionTextPicture  url={'content-data?slug=lead-magnet-master'} renderPictureFirst ></SectionTextPicture>
        {/*
        EMAIL CAPTURE WIDGET       
        */}
      <SGEmailCapture url={'content-data?slug=lead-magnet-master'} />


      {/* TESTING
                <SGMainBanner skipBackground content={mainBannerContent} useH2Header={true}  showImage={false} renderPictureFirst={true} />
                */}


      {/* SB - EXPLANAOTYR PARAGRAPH             */}
      <SectionTextPicture renderPictureFirst={true} {...pageProps} url={"content-data?slug=sb-explanatory-paragraph"} padding={false} />
      <SectionTextPicture showCTA={true} renderPictureFirst={false} {...pageProps} url={"content-data?slug=sb-explanatory-paragraph-2"} padding={false} paddingTop={'pt-0'} paddingBottom={'pb-50'} />

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
      ctaInfo: Array.isArray(ctaData) ? ctaData[0] : ctaData }, // will be passed to the page component as props
  }
}


export default IndexPage;