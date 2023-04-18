import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import baseApiUrl from '@/utils/baseApiUrl';
import { preserveUrlParam } from '../Banner/CTAButton';

/**
 * Usage
 * <BlogCTAbar url={'content-data?slug=blog-cta-bar'} />
 */

//        
const BlogCTAbar = (props) => {
    const [ctaMessage, setCTAMessage] = React.useState()
    React.useEffect(() => {
        const getCTAMessage = async () => {
            const response = await axios.get(`${baseApiUrl}/${props.url}`);
            setCTAMessage(response.data[0]);
        }
        getCTAMessage();
    }, [])

  // <
    return (
        <>    
            <div className="widget-area">
                <div style={{background:'#fa9035'}} className="widget widget_pakap_posts_thumb">
                    
                    <h3 style={{color:'white'}} className="widget-title">{ ctaMessage && ctaMessage.title}</h3>
                    {ctaMessage && (
                        <>
                        <div style={{padding:'0 0 20px 0'}}  className="info">
                            <h6 style={{color:'white'}} className="title usmall">
                            {ctaMessage.subTitle}
                            </h6>
                            <h6 style={{color:'white'}} className="title usmall">
                            {ctaMessage.subTitle2}
                            </h6>
                            <h6  style={{color:'white'}} className="title usmall">
                            {ctaMessage.subTitle3}
                            </h6>

                        </div>
                        <Link href={preserveUrlParam(ctaMessage.btnUrl)}>
                            <a className='cta-btn'>
                                {ctaMessage.btnText}
                            </a>
                        </Link>
                        <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                        </div>
                        
                      </>
                    )}
                    
                </div>
            
            </div>
        </>
    )
}

export default BlogCTAbar;