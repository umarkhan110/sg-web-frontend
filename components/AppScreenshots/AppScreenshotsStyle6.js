import React from 'react'
import { 
    Tab, 
    Tabs, 
    TabList, 
    TabPanel, 
    resetIdCounter 
} from 'react-tabs';
resetIdCounter();
import axios from 'axios';
import baseApiUrl from '@/utils/baseApiUrl';

const AppScreenshotsStyle6 = () => {

    const [screenshots, setScreenshots] = React.useState()
    React.useEffect(() => {
        const getScreenshots = async () => {
            const response = await axios.get(`${baseApiUrl}/home-6-app-screenshots`)
            setScreenshots(response.data)
        }
        getScreenshots()
    }, [])

    return (
        <>
            {screenshots && ( 
                <div className="screenshots-area bg-black-color ptb-100">
                    <div className="container">
                        <div className="section-title color-white">
                            <span className="sub-title">
                                {screenshots.subTitle}
                            </span>
                            <h2>{screenshots.title}</h2>
                        </div>

                        <div className="screenshots-tabs">
                            <Tabs>
                                <TabList>
                                    {screenshots.tabList.map(heading => (
                                        <Tab key={heading.id}>
                                            <i className="ri-exchange-dollar-line"></i> 
                                            {heading.title}
                                        </Tab>  
                                    ))}
                                </TabList>
                                
                                {screenshots.screenshot.map(image => (
                                    <TabPanel key={image.id}>
                                        <img 
                                            src={image.image.url} 
                                            alt={image.image.alternativeText} 
                                        />
                                    </TabPanel>  
                                ))} 
                            </Tabs>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default AppScreenshotsStyle6;