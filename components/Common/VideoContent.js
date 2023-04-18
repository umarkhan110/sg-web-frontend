import React from 'react';

import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

import SGImage from '../Elements/SGImage';
import { useContentData } from '@/utils/useContentData';

const VideoContent = (props) => {
    const { url="intro-videos?slug=smartguess-45sec-intro" } = props;
    const { content, isLoading, isError } = useContentData(url);

    // Popup Video
	const [isOpen, setIsOpen] = React.useState(false);
    const openModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            {!isLoading && content&& (
                <div className="videoContent "/*ptb-50*/>
                    <div  className="video-area" >
                        <div className="container" style={{ padding:'0px'}} >
                            <div className="video-box">
                              <a target="_blank" href="https://www.youtube.com/watch?v=s9JY6qf5AeA"> 
                              
                                <SGImage 
                                    {...content.image}
                                    lazyload={true} 
                                    responsive={true} //Responsive Og ReSize saman = ekki gott
                                    placeholder={true}           
                                />        
                                <div
                                    onClick={e => {e.preventDefault(); openModal()}}
                                    className="video-btn popup-youtube"> 
                                    <i className={content.iconName} />
                                </div>
                            </a>   
                            </div>
                        </div>
                    </div>
                    <ModalVideo 
                        channel='youtube' 
                        isOpen={isOpen} 
                        videoId={content.youtubeVideoId} 
                        onClose={() => setIsOpen(!isOpen)} 
                    />
                </div>
                
            )}
        </>
    )
}

export default VideoContent;