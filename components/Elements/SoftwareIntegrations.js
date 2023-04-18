import React from 'react';
import Link from 'next/link';
//import ScrollAnimation from 'react-animate-on-scroll';
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import baseApiUrl from '@/utils/baseApiUrl'

const SoftwareIntegrations = (props) => {
    console.log(JSON.stringify(props));
    const [content, setContent] = React.useState()
   
     React.useEffect(() => {
        const getContent = async () => {
            const response = await axios.get(`${baseApiUrl}/${props.url}`)
            setContent(response.data[0])
        }
        getContent()
     }, [])

    return (
        <>
            {content && (
                <div className="software-integrations-area ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="software-integrations-content">
                                    <span className="sub-title">
                                        {content.subTitle}
                                    </span>

                                    <h2>{content.title}</h2>

                                    <ReactMarkdown>
                                        {content.description}
                                    </ReactMarkdown>
                                    {content.btnUrl && content.btnText  && ( 
                                    <Link href={content.btnUrl}>
                                        <a className="default-btn">{content.btnText}</a>
                                    </Link>
                                    )}
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                             {/*   <ScrollAnimation animateIn="fadeInUp">*/} 
                                    <div className="software-integrations-list">
                                        <img width="149px" height="auto" src="/images/shape/bg-shape2.png" alt="bg-shape" />

                                        <ul>
                                            <li>
                                                <img 
                                                    src={content.image.url} 
                                                    className="atlassian" 
                                                    alt={content.image.alternativeText} 
                                                />
                                            </li>
                                            {content.image && (
                                            <li> 
                                                <img 
                                                    src={content.image.url} 
                                                    className="skype" 
                                                    alt={content.image.alternativeText} 
                                                />
                                            </li>
                                             )}
                                            {/*  
                                            <li>
                                                <img 
                                                    src={content.softwareImg3.url} 
                                                    className="gdrive" 
                                                    alt={content.softwareImg3.alternativeText} 
                                                />
                                            </li>
                                            <li>
                                                <img 
                                                    src={content.softwareImg4.url} 
                                                    className="slack" 
                                                    alt={content.softwareImg4.alternativeText} 
                                                />
                                            </li>
                                            <li>
                                                <img 
                                                    src={content.softwareImg5.url} 
                                                    className="jira" 
                                                    alt={content.softwareImg5.alternativeText} 
                                                />
                                            </li>
                                            <li>
                                                <img 
                                                    src={content.softwareImg6.url} 
                                                    className="frame" 
                                                    alt={content.softwareImg6.alternativeText} 
                                                />
                                            </li>
                                            */}
                                        </ul>
                                    </div>
                               {/* </ScrollAnimation>*/} 
                            </div>
                        </div>
                    </div>

                    <div className="shape6">
                        <img src="/images/shape/shape5.png" alt="shape" />
                    </div>
                </div>
            )}
        </>
    )
}

export default SoftwareIntegrations;