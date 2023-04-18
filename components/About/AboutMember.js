import React from 'react';
//import ScrollAnimation from 'react-animate-on-scroll';
import ReactMarkdown from 'react-markdown';
import SGImage from '../Elements/SGImage';

const AboutMember = (data) => {
    const { title,longDec,image,subTitle } = data[0];
    const script1 = "https://www.goodreads.com/review/grid_widget/9323260.Bj%C3%B6rn%20Brynjar's%20bookshelf:%20read?cover_size=medium&hide_link=true&hide_title=true&num_books=16&order=d&shelf=read&sort=date_added&widget_id=1636398505";
    const script2 = "https://www.goodreads.com/review/grid_widget/9323260.Bj%C3%B6rn%20Brynjar's%20bookshelf:%20read?cover_size=medium&hide_link=true&hide_title=true&num_books=16&order=d&shelf=read&sort=date_added&widget_id=1636453511";


    React.useEffect(() => {
        const addGoodReadScript = async (scriptURL) => {
            const script = document.createElement("script");
            script.src = scriptURL;
            script.type = "text/javascript";
            script.async = true;
            document.body.appendChild(script);            
        }
        
        addGoodReadScript(script1);
        addGoodReadScript(script2);
    }, []);

    // <div>{JSON.stringify(aboutMember)}</div>
    //<div>{"Props:" + JSON.stringify(props)}</div>
    return (
        <>
            {data && (
                <>
           {/*    <Seo seo={seo} />       */} 
                <div className="about-area pt-50 pb-100">
                    
                    <div className="container">
                        <div style={{display:'flex',
                                    flexDirection:'row-reverse'
                                    }} className="row ">
                            <div className="col-lg-6 col-md-12 pb-50">
                                <div className="about-image">
                                    {/* 
                                    <ScrollAnimation animateIn='fadeInRight'>
                                    */}
                                        <SGImage 
                                            {...image}
                                           // lazyload={true} 
                                            responsive={true} 
                                            placeholder={true} 
                                        />
                                    {/* 
                                    </ScrollAnimation>
                                    */}
                                </div>

                                  {/* Goodreads grid here */}
                                <div id="grid-left" className='pt-50'>
                                    <div id="gr_grid_widget_1636398505"  style={{width:'100%'}} />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="about-content">
                                    <span className="sub-sg-title">
                                        {subTitle}
                                    </span>
                                    <h2>{title}</h2>
                                    
                                    <div className="">
                                        <ReactMarkdown>
                                            {longDec}
                                        </ReactMarkdown>
                                    </div>

                                     {/* Goodreads grid here 1636453511 */} 
                                    <div id="grid-below" className='pt-50'>
                                        <div id="gr_grid_widget_1636453511"  style={{width:'100%'}} />
                                    </div>   
                                
                                   
                                </div>
                                
                            </div>

                       </div>
                        
                    </div>
                </div>
                </>
            )}
        </>
    )
}

export default AboutMember;