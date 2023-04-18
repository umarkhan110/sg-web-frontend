import React from 'react';
import Link from 'next/link';
import BlogSidebar from '@/components/Blog/BlogSidebar'
import ReactMarkdown from 'react-markdown';

import SectionFullwidthImage from '@/components/Elements/SectionFullwidthImage';
//import BlogCTAbar from './BlogCTAbar'; //Too salesy..

import SGImage from '../Elements/SGImage';
import siteUrl from '@/utils/siteUrl';
import { preserveUrlParam } from '../Banner/CTAButton';

import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
  ssr: false
});

const Tweet = dynamic(() => import('react-twitter-widgets').then((mod) => mod.Tweet));
const Moment = dynamic(() => import('react-moment').then((mod) => mod.Moment));
const ShareOnSocial = dynamic(() => import('../Common/ShareOnSocial'));

const BlogDetailsContent = (props) => {
  const { longDesc, tag, image, date, writer, title, slug, metaDescription, discussOnTwitter, moreContent, solutions } = props;

  // Popup Video
  const [isOpen, setIsOpen] = React.useState(true);
  const openModal = () => {
    setIsOpen(!isOpen);
  }

  //Share Social Post options 
  const options = {
    "title": title, //"title": metaDescription,
    "text": metaDescription,
    "url": `${siteUrl}/blog/${slug}/`,
    "via": "smartguess2",
    //"related":"[smartguess2,]", // "smartguess2",
    //"hashtag":"Estimates"
  }

  const renderMoreContent = (moreContent) => {
    if (!moreContent || moreContent.length == 0)
      return (null);

    return (
      <div>
        {moreContent.map(eachContent => (
          renderComponent(eachContent)
        ))}
      </div>
    );
  }

  const renderComponent = (component) => {
    switch (component.__component) {
      case ('blog-post-content.text'): {
        return (<ReactMarkdown key={"T" + component.id}>
          {component.text}
        </ReactMarkdown>)
      }
      case ('blog-post-content.leave-reply'): {
        return (
          <div key={"R" + component.id} className="comments-area">
            <Tweet tweetId={component.twitterId} options={component.options} />
          </div>)
      }
      case ('blog-post-content.image'): {
        return (
          <div /*style={{width:'100%',height:'100%'}}*/ key={"I" + component.id} className="article-image ptb-30" >

            <SGImage
              setWidth={856}
              magnify={component.magnifyImage}
              lazyload={true}
              responsive={true}
              placeholder={true}
              {...component.image}
            />
          </div>
        )
      }
      case ('blog-post-content.you-tube-video'): {
        return (
          <div key={"U2" + component.id} className="videoContent ptb-30">
            <div className="video-area">
              <div className="container">
                <div width="100%" height='100%' className="video-box">
                  <SGImage

                    {...component.image}
                    lazyload={true}
                    responsive={true}
                    placeholder={true}
                  />

                  <div
                    onClick={e => { e.preventDefault(); openModal() }}
                    className="video-btn popup-youtube"
                  >
                    <i className={component.iconName}></i>
                  </div>


                </div>
              </div>
            </div>

            <ModalVideo
              channel='youtube'
              isOpen={!isOpen}
              videoId={component.youtubeVideoId}
              onClose={() => setIsOpen(!isOpen)}
            />
          </div>
        );
      }
    }
  }

  return (
    <>
      <div className="blog-details-area pt-100 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  <div className="tag">
                    {tag}
                  </div>
                  <SGImage
                    {...image}
                    placeholder={true}
                    responsive={true}
                  />
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <i className="ri-calendar-2-line"></i>
                        {date}
                      </li>
                    </ul>
                  </div>
                  <ReactMarkdown>
                    {longDesc}
                  </ReactMarkdown>
                  {/* MRORE CONTENT HERE    */}
                  {
                    renderMoreContent(moreContent)
                  }

                </div>

                <div>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }} className="col-lg-4 col-md-12">
              <BlogSidebar />
              {discussOnTwitter && (
                <div id="cta-below" style={{ display: 'flex', flexWrap: 'wrap', alignContent: 'flex-end', width: '100%', height: '100%' }}  >
                  <div className="comments-area" style={{ display: 'flex', flexDirection: 'column', flex: '1' }}>
                    <h3 className="comments-title">Share your thoughts</h3>
                    <Tweet tweetId={discussOnTwitter.twitterId} options={discussOnTwitter.options} />
                  </div>
                </div>

              )}
              {/*    
                  //Removeing the cta section 
                  <div id="cta-above"> 
                      <BlogCTAbar  url={'content-data?slug=blog-cta-bar'} /> 
                  </div>
                  <div id="cta-below" style={{paddingTop:'505px'}}  >
                        <BlogCTAbar  url={'content-data?slug=blog-cta-bar'} /> 
                  </div>                  
                */}
            </div>
          </div>
          {/* THEN RENDER THE POST FOOTER   */}
          <div className="blog-details-desc">
            <div className="article-footer">
              {/*SHARE AUTHER SECTION    */}
              <div style={{ display: 'flex', marginBottom: '20px', alignContent: 'space-between', flexWrap: 'wrap', flex: 1 }}>
                <div className="post-author-meta " >
                  <div className="d-flex align-items-center">
                    <img src={writer.picture.url} alt="user" />
                    <div className="title">
                      <span className="name">
                        {/*By <Link href={`/about/bjornbrynjar=${writer.about_member}`} > */}
                        By <Link href={preserveUrlParam('/about/bjornbrynjar/')} >
                          <a>{writer.name}</a>
                        </Link>
                      </span>
                      <Moment className="date" format="Do MMM YYYY">{date}</Moment>
                    </div>
                  </div>
                </div>
                {/*SHARE BUTTON SECTION    */}
                <div className="article-share">
                  <div style={{ display: 'flex', paddingTop: '10px' }} className="social-links">
                    <div style={{ marginRight: '5px' }}><span>Share using</span></div>
                    <ShareOnSocial options={options} />
                  </div>
                </div>

              </div>

              {/* TWO SOLUTIONS  */}
              <SectionFullwidthImage content={solutions} useAsCTA={true} url={'content-data?slug=two-solutions'} paddingTop={"pt-30"} paddingBottom="pb-30" ></SectionFullwidthImage>
            </div>

            <div id="cta-above">
              {/*COMMENT SECTION    */}
              {discussOnTwitter && (
                <div className="comments-area">
                  <h3 className="comments-title">Share your thoughts:</h3>
                  <Tweet tweetId={discussOnTwitter.twitterId} options={discussOnTwitter.options} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogDetailsContent;