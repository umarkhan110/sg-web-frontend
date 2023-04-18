import React from 'react'
import AboutMember from '@/components/About/AboutMember';
import SGPageBannerStyle1 from '@/components/Common/SGPageBannerStyle1'
import SGFooterStyle from '@/components/Footer/SGFooterStyle';

import baseApiUrl from '@/utils/baseApiUrl';
import siteUrl from '@/utils/siteUrl';

import SGNavbarStyle, { LIGHT_MODE, DARK_MODE, DARK_BTN_MODE } from '@/components/Navbar/SGNavbarStyle';

import Seo from '@/components/_App/Seo';


const AboutSimple = ({ data, pageTitle,
  logo, ctaInfo, navbarUrl }) => {
  const { title, longDec, image, slug } = data[0];

  //Create SEO for post
  const pageSeo = {
    type: "Person",
    name: title,
    url: siteUrl + '/about/?slug=' + slug,
    image: [image],
    metaTitle: "Smart Guess Creator " + title,
    shareImage: [image],
    slug: '/about/' + slug,
    metaDescription: longDec,
    hasOccupation: {
      type: "Occupation",
      name: "Chief Tinkerer",
      organization: "Smart Guess"
    },
    article: true,
  }

  if (!data[0])
    return (null);

  // JSON.stringify(data)

  return (
    <>
      <Seo seo={pageSeo} />
      <SGNavbarStyle ctaInfo={ctaInfo} logo={logo} menuCategory={navbarUrl} stickyMode={DARK_MODE} nonStickyMode={LIGHT_MODE} buttonMode={DARK_BTN_MODE} />
      {pageTitle && (
        <SGPageBannerStyle1
          pageTitle={pageTitle.title}
          homePageUrl={pageTitle.homeUrl}
          homePageText={pageTitle.homeText}
          activePageText={pageTitle.activeText}
        />
      )}
      {
        <AboutMember key={data.id} {...data} />
      }
      <SGFooterStyle seo={pageSeo} />
    </>
  )
}

export async function getServerSideProps(context) {
  let { id } = context.query;
  const res = await fetch(`${baseApiUrl}/about-us-texts/?slug=${id}`);
  const data = await res.json();

  const titleRes = await fetch(`${baseApiUrl}/page-titles?slug=about`);
  const pageTitle = await titleRes.json();

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
      pageTitle: pageTitle[0],
      navbarUrl: navbarUrlData,
      logo: logoData,
      ctaInfo: Array.isArray(ctaData) ? ctaData[0] : ctaData,
    }, // will be passed to the page component as props
  }
}

export default AboutSimple;