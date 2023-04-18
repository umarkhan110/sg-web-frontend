import React from 'react';
import dynamic from 'next/dynamic';
import ReactMarkdown from 'react-markdown';

import SGImage from '../Elements/SGImage';
import ErrorBoundary from '@/utils/ErrorBoundary';
import CTAButton from './CTAButton';
import NextSGImage from '../Elements/NextImage';


const tinyOptions = {
  autoplay: true,
  autoplaySpeed: 9000, //seconds between slides
  dots: true,
  infinite: true,
  speed: 900,  //how fast it completes a slide
  slidesToShow: 1,
  slidesToScroll: 1
};


const SGMainBanner = (props) => {
  const { content,
    renderPictureFirst = false,
    titleItalic = false,
    showCTA = false,
    showImage = false,
    showCarousel = false,
    showBubbles = false,
    useH2Header = false,
    skipBackground = false,
    paddingTop = "",
     paddingBottom = "",
  } = props;

  let Slider = null;
  if (showCarousel) {
    Slider = dynamic(import('react-slick'));
  }

  const getTitleText = () => {
    if (titleItalic) {
      if (content.btn2Text)
        return (<><i> {content.title} <br></br>{content.btn2Text}</i></>);
      else
        return (<><i>{content.title}</i></>);
    }
    else {
      if (content.btn2Text)
        return (<>{content.title} <br></br>{content.btn2Text}</>);
      else
        return (<>{content.title}</>);
    }
  }


  const renderTitle = () => {
    return (
      <>
        {useH2Header ?
          <h2> {getTitleText()} </h2>
          :
          <h1> {getTitleText()} </h1>
        }
      </>
    );
  }

  const renderImage = (bannerContent) => {
    return (
      <>
        <div style={{ paddingTop: 25, height: '25px' }} />
        <SGImage
          key={bannerContent.id}
          {...bannerContent.image}
          maxHeight={"370px"}
        />
      </>
    );
  }

  const CaroselTiny = (props) => {
    const { screenshots } = props;

    return (
      <div style={{ margin: '0 0px', width: '-webkit-fill-available', paddingTop: paddingTop,paddingBottom: paddingBottom }}>
        <Slider {...tinyOptions}>
          {screenshots.map(screenshot => (
            <div className="single-screenshot-item"
              key={screenshot.id}
            >
              <NextSGImage
                magnify={false}
                key={screenshot.id}
                {...screenshot.image}
                placeholder={true}
                setWidth="480px"
                setHeight="480px"
              />

                {screenshot &&
                  screenshot.image &&
                  screenshot.image.caption && (
                    <div style={{
                      margin: '0 5px',
                      fontSize: '18px',
                      fontFamily: "Patrick Hand",
                      fontWeight: 600,
                      lineHeight: 1.1,
                      letterSpacing: '0.3px',
                      marginTop: 10,
                      color: '#f67a43',
                    }}>
                      {screenshot.image.caption}
                    </div>
                  )}
            </div>
          ))}
        </Slider>
      </div>
    );
  }

  const renderSubtitles = (bannerContent) => {
    return (
      <div>
        <span className="sub-sg-title">
          {bannerContent.subTitle}
        </span>
        {bannerContent.subTitle2 && (
          <span className="sub-sg-title">
            {bannerContent.subTitle2}
          </span>
        )}
        {bannerContent.subTitle3 && (
          <span className="sub-sg-title">
            {bannerContent.subTitle3}
          </span>
        )}
      </div>
    );
  }

  const getCalloutClass = (bannerContent) => {
    let intent = bannerContent.icon ? bannerContent.icon : "";
    let calloutClassName = "green-callout " + intent;
    if (bannerContent.title && bannerContent.title !== "green") {
      calloutClassName = "red-callout " + intent;
    }
    return calloutClassName;
  }

  //<div key="a" className="callout-wrapper" style={{height:'25px'}}/>
  const renderBubbles = () => {
    return (
      <section style={{ paddingRight: '20px' }}>
        {content.contentList.map(eachOne => (
          <div key={eachOne.id} className={getCalloutClass(eachOne)}>
            {renderBubble(eachOne)}
          </div>
        ))}
      </section>
    );
  }

  const renderBubble = (bannerContent) => {
    let intent = bannerContent.icon;
    let calloutClassName = "green-callout " + intent;
    let paragrId = "green-paragraph"
    if (bannerContent.title && bannerContent.title !== "green") {
      calloutClassName = "red-callout";
      paragrId = "red-paragraph"
    }
    const paragraphs = bannerContent.description.split('\n');
    let bulletsDone = false;

    let results = [];
    let eachOne = null;
    for (let i = 0; i < paragraphs.length; i++) {
      eachOne = paragraphs[i];
      if (eachOne.startsWith("*") && !bulletsDone) {
        let ulKey = "ul" + i;
        let liKey = "li" + i
        results.push(
          <ul key={ulKey} >
            <li key={liKey} id={paragrId}>{eachOne.replace("*", "")}</li>
            {renderBullets(paragraphs, i, paragrId)}
          </ul>);
        bulletsDone = true;
      }
      else if (!eachOne.startsWith("*")) {
        results.push(<p key={eachOne.substring(0, 2)} id={paragrId} >{eachOne} </p>);
      }
    }
    return (results);
  }

  const renderBullets = (array, index, paragrId) => {
    let results = [];
    for (let i = index + 1; i < array.length; i++) {
      let likey = "li" + i;
      results.push(
        <li key={likey} id={paragrId}>{array[i].replace("*", "")}</li>
      );
    }
    return (results);
  }

  const render = () => {

    if (oneColum) {
      return (renderContent());
    }
    else if (renderPictureFirst) {
      return (
        <>
          {renderSecondColumn()}
          {renderContent()}
        </>
      )
    }
    else {
      return (
        <>
          {renderContent()}
          {renderSecondColumn()}
        </>
      )
    }
  }

  const renderContent = () => {
    return (
      <div className={oneColum ? " " : "col-lg-6 col-md-12 "}>
        {/* <ContentSection content={content} {...props} /> */}
        {renderSubtitles(content)}
        {renderTitle()}
        <ReactMarkdown style={{ marginLeft: '0px' }}>
          {content.description}
        </ReactMarkdown>
        {!showCTA && (
          <CTAButton {...props}></CTAButton>

        )}
      </div>
    );
  }

  const renderSecondColumn = () => {
    return (
      <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'center' }}
        className="col-lg-6 col-md-12 pt-0">
        {showCarousel && <CaroselTiny screenshots={content.contentList} />}
        {showImage && renderImage(content)}
        {showBubbles && renderBubbles(content)}
      </div>
    );
  }

  const renderOneColumn = () => {
    if (showCarousel || showImage || showBubbles)
      return false;

    return true;
  }

  const getWrapStyle = () => {
    return renderPictureFirst ? { flexWrap: 'wrap-reverse' } : { flexWrap: 'wrap' }
  }

  let oneColum = renderOneColumn();

  return (
    <>
      {content && (
        <ErrorBoundary>
          <div className={skipBackground ? "pb-50" : "banner-area pb-50"}>
            <div className="container">
              <div className="row align-items-center m-0" style={getWrapStyle()}>
                {render()}
              </div>
              {showCTA && (
                <div style={{ paddingLeft: '12px', paddingTop: '30px' }} >
                  <CTAButton {...props}></CTAButton>
                </div>
              )}
            </div>

            {/* Shape Images */}

            {/*
                    <div className="banner-shape3">
                        <img width="149px" height="185px" src="/images/shape/shape2.webp" alt="image" />
                    </div>
                    
                    <div className="banner-shape6">
                        <img width="106" height="106" src="/images/shape/shape16.webp" alt="image" />
                    </div>
                    <div className="banner-shape7">
                        <img width="100%" height="auto" src="/images/shape/shape11.webp" alt="image" />
                    </div>
                    <div className="banner-shape8">
                        <img width="100%" height="auto" src="/images/shape/shape11.webp" alt="image" />
                    </div>
                    */}
          </div>
        </ErrorBoundary>
      )}
    </>
  )
}

export default SGMainBanner;