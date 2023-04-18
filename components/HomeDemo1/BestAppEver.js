import React from 'react'
import Link from 'next/link'
//import ScrollAnimation from 'react-animate-on-scroll'
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'

const BestAppEver = (props) => {
   /*console.log(JSON.stringify(props));
    const [content, setContent] = React.useState()
   
     React.useEffect(() => {
        const getContent = async () => {
            const response = await axios.get(`${baseApiUrl}/${props.url}`)
            setContent(response.data[0])
        }
        getContent();
     }, []);
     */
    
    const [content, setBestApp] = React.useState()
    React.useEffect(() => {
        const getBestApp = async () => {
            const response = await axios.get(`${baseApiUrl}/best-app-ever`)
            setBestApp(response.data)
        }
        getBestApp()
    }, []);
    

    return (
        <>
            {content && (
                <div className="features-area ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="features-content">
                                    <h2>{content.title}</h2>
                                    <p>{content.description}</p>

                                    <ul className="features-list" >
                                        {content.feature.map(featureList => (
                                            <li key={featureList.id}>
                                                <div className={featureList.iconBgClass}>
                                                    <i className={featureList.icon}></i>
                                                </div>
                                                <h3>{featureList.title}</h3>
                                                <p>{featureList.shortDec}</p>
                                            </li>
                                        ))}
                                    </ul>
                                    
                                    <div className="btn-box">
                                        <Link href={content.btnOneUrl}>
                                            <a className="default-btn">{content.btnOneText}</a>
                                        </Link>
                                        <Link href={content.btnTwoUrl}>
                                            <a className="link-btn">{content.btnTwoText}</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="features-image text-center">
                               {/*     <ScrollAnimation animateIn="fadeInUp"> */}
                                        <img src={content.image.url} alt={content.image.alternativeText} />
                                {/*    </ScrollAnimation> */}

                                    <div className="shape">
                                        <img className="shape3" src="/images/shape/shape2.webp" alt="shape" />
                                        <img className="shape4" src="/images/shape/shape3.webp" alt="shape" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-shape1">
                        <img width="99px" height="185px" src="/images/shape/bg-shape1.png" alt="bg-shape" />
                    </div>
                </div>
            )}
        </>
    )
}

export default BestAppEver;