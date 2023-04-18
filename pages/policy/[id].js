import React from 'react';
import SGNavbarStyle, { DARK_MODE, LIGHT_MODE, DARK_BTN_MODE } from '@/components/Navbar/SGNavbarStyle';
import SGPageBannerStyle1 from '@/components/Common/SGPageBannerStyle1';
import SGFooterStyle from '@/components/Footer/SGFooterStyle';

import baseApiUrl from '@/utils/baseApiUrl';

import SGTerms from '../../components/Common/SGTerms';

const PolicyDetails = ({ data, logo, ctaInfo, navbarUrl }) => {

  return (
    <>
      <SGNavbarStyle ctaInfo={ctaInfo} logo={logo} menuCategory={navbarUrl} stickyMode={DARK_MODE} nonStickyMode={LIGHT_MODE} buttonMode={DARK_BTN_MODE} />
      {data && (
        <SGPageBannerStyle1
          pageTitle={data[0].title}
          homePageUrl="/"
          homePageText="Home"
          activePageText={data[0].title}
        />
      )}
      <SGTerms key={data[0].id} content={data[0]} ></SGTerms>
      <SGFooterStyle />
    </>
  )
}

export async function getServerSideProps(context) {
  let { id } = context.query
  const res = await fetch(`${baseApiUrl}/policies?slug=${id}`)
  const data = await res.json()

  //Navbar
  const navbarUrlRes = await fetch(`${baseApiUrl}/menu-dropdowns?slug=sg-landing-page&_sort=order:desc`);
  const navbarUrlData = await navbarUrlRes.json();

  const logoRes = await fetch(`${baseApiUrl}/site-logo`);
  const logoData = await logoRes.json();

  const ctaRes = await fetch(`${baseApiUrl}/content-data?slug=nav-try-button`);
  const ctaData = await ctaRes.json();

  return {
    props: {
      data,
      navbarUrl: navbarUrlData,
      logo: logoData,
      ctaInfo: Array.isArray(ctaData) ? ctaData[0] : ctaData,
    }, // will be passed to the page component as props
  }
}

export default PolicyDetails;