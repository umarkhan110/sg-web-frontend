import React from 'react'
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'

const IntroVideo = () => {
    const [video, setVideo] = React.useState()
    React.useEffect(() => {
        const getVideo = async () => {
            const response = await axios.get(`${baseApiUrl}/intro-videos?slug=smartguess-45sec-intro`)
            setVideo(response.data[0])
        }
        getVideo()
    }, [])

    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            {video && (
                <div className="videoContent">
                    <div className="video-area">
                        <div className="container">
                            <div className="video-box">
                                <img src={video.image.url} alt={video.image.alternativeText} />
        
                                <div
                                    onClick={e => {e.preventDefault(); openModal()}}
                                    className="video-btn popup-youtube"
                                > 
                                    <i className={video.iconName}></i>
                                </div>

                                <div className="shape">
                                    <img width="99px" height="185px" className="shape1" src="/images/shape/shape1.webp" alt="shape1" />
                                    <img width="149px" height="185px" className="shape2" src="/images/shape/shape2.webp" alt="shape2" />
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <ModalVideo 
                        channel='youtube' 
                        isOpen={!isOpen} 
                        videoId={video.youtubeVideoId} 
                        onClose={() => setIsOpen(!isOpen)} 
                    />
                </div>
            )}
        </>
    )
}

export default IntroVideo;