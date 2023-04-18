import React from 'react';
import Link from 'next/link';
//import ScrollAnimation from 'react-animate-on-scroll';
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import baseApiUrl from '@/utils/baseApiUrl'

const AppProgressStyle2 = () => {

    const [appProgress, setAppProgress] = React.useState()
    React.useEffect(() => {
        const getAppProgress = async () => {
            const response = await axios.get(`${baseApiUrl}/app-progress-style-2`)
            setAppProgress(response.data)
        }
        getAppProgress()
    }, [])

    return (
        <>
            {appProgress && (
                <div className="app-progress-area bg-black ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="app-progress-animation-image">
                                    <div className="app-img">
                                 {/*        <ScrollAnimation animateIn='fadeInDown' duration={2}>*/} 
                                            <img 
                                                src={appProgress.shapeImageOne.url} 
                                                alt={appProgress.shapeImageOne.alternativeText} 
                                            />
                                   {/*     </ScrollAnimation>*/} 
                                    </div>

                                    <div className="app-img">
                                   {/*      <ScrollAnimation animateIn='fadeInRight' duration={2}>
                                            <img 
                                                src={appProgress.shapeImageTwo.url} 
                                                alt={appProgress.shapeImageTwo.alternativeText} 
                                            />
                                    {/*    </ScrollAnimation>*/} 
                                    </div>

                                    <div className="app-img">
                                   {/*      <ScrollAnimation animateIn='fadeInLeft' duration={2}>*/} 
                                            <img 
                                                src={appProgress.shapeImageThree.url} 
                                                alt={appProgress.shapeImageThree.alternativeText} 
                                            />
                                   {/*     </ScrollAnimation>*/} 
                                    </div>

                                    <div className="app-img">
                                  {/*        <ScrollAnimation animateIn='fadeInUp' duration={2}>*/} 
                                            <img 
                                                src={appProgress.shapeImageFour.url} 
                                                alt={appProgress.shapeImageFour.alternativeText} 
                                            />
                                   {/*       </ScrollAnimation>*/} 
                                    </div>

                                    <div className="app-img main-image">
                                        <img 
                                            src={appProgress.fullImage.url} 
                                            alt={appProgress.fullImage.alternativeText} 
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="app-progress-content text-white">
                                    <span className="sub-title">
                                        {appProgress.subTitle}
                                    </span>

                                    <h2>{appProgress.title}</h2>

                                    <ReactMarkdown>
                                        {appProgress.longDec}
                                    </ReactMarkdown>
                                    
                                    <Link href={appProgress.btnUrl}>
                                        <a className="default-btn">
                                            {appProgress.btnText}
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default AppProgressStyle2;