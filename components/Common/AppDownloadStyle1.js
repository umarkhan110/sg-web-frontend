import React from 'react'
//import ScrollAnimation from 'react-animate-on-scroll'
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'

const AppDownloadStyle1 = () => {

    const [downloadApp, setDownloadApp] = React.useState()
    React.useEffect(() => {
        const getDownloadApp = async () => {
            const response = await axios.get(`${baseApiUrl}/download-app`)
            setDownloadApp(response.data)
            // console.log(response.data)
        }
        getDownloadApp()
    }, [])

    return (
        <>
            {downloadApp && (
                <div className="app-download-area">
                    <div className="container">
                        <div className="app-download-inner">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="app-download-content">
                                        <span className="sub-title">
                                            {downloadApp.subTitle}
                                        </span>
                                        <h2>{downloadApp.title}</h2>
                                        <p>{downloadApp.shortDec}</p>

                                        <div className="btn-box">
                                            <a href={downloadApp.googlePlayUrl} className="playstore-btn" target="_blank">
                                                <img src="/images/play-store.png" alt="image" />
                                                {downloadApp.googlePlaySubTitle}
                                                <span>{downloadApp.googlePlayTitle}</span>
                                            </a>
                                            <a href={downloadApp.appleStoreUrl} className="applestore-btn" target="_blank">
                                                <img src="/images/apple-store.png" alt="image" />
                                                {downloadApp.appleStoreSubTitle}
                                                <span>{downloadApp.appleStoreTitle}</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="app-download-image">
                         {/*               <ScrollAnimation animateIn="fadeInUp"> */}
                                            <img src={downloadApp.image.url} alt={downloadApp.image.alternativeText} />
                         {/*               </ScrollAnimation> */}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="shape5">
                                <img src="/images/shape/shape4.webp" alt="shape4" />
                            </div>

                            <div className="lines">
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default AppDownloadStyle1;