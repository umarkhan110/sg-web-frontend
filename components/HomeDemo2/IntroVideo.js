import React from 'react';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});
import Link from 'next/link';
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'

const IntroVideo = () => {

    const [intro, setIntro] = React.useState()
    React.useEffect(() => {
        const getIntro = async () => {
            const response = await axios.get(`${baseApiUrl}/intro-videos?slug=smartguess-45sec-intro`)
            //const response = await axios.get(`${baseApiUrl}/intro-video-with-title`)
            setIntro(response.data[0])
        }
        getIntro()
    }, [])

    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            {intro && (
                <div className="videoContent">
                    <div className="video-area ptb-100">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="intro-video-content">
                                        <span className="sub-title">
                                            {intro.subTitle}
                                        </span>
                                        <h2>
                                            {intro.title}
                                        </h2>
                                        <p>
                                            {intro.description}
                                        </p>
                                        <Link href={intro.btnUrl}>
                                            <a className="default-btn">{intro.btnText}</a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="intro-video-box">
                                        <img src={intro.videoImage.url} alt={intro.videoImage.alternativeText} />
                
                                        <div
                                            onClick={e => {e.preventDefault(); openModal()}}
                                            className="video-btn popup-youtube"
                                        > 
                                            <i className={intro.videoPlayIcon}></i>
                                        </div>

                                        <div className="shape">
                                            <img className="shape10" src="/images/shape/shape13.webp" alt="image" />
                                            <img className="shape11" src="/images/shape/shape14.webp" alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* If you want to change the video need to update videoID */}
                    <ModalVideo 
                        channel='youtube' 
                        isOpen={!isOpen} 
                        videoId={intro.youtubeVideoID} 
                        onClose={() => setIsOpen(!isOpen)} 
                    />
                </div>
            )}
        </>
    )
}

export default IntroVideo;