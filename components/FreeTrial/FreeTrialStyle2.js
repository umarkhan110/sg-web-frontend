import React from 'react';
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'

const FreeTrialStyle2 = () => {

    const [infoText, setInfoText] = React.useState()
    React.useEffect(() => {
        const getInfoText = async () => {
            const response = await axios.get(`${baseApiUrl}/free-trial-form`)
            setInfoText(response.data)
        }
        getInfoText()
    }, [])

    return (
        <>
            {infoText && (
                <div className="free-trial-area">
                    <div className="container">
                        <div className="free-trial-content bg-color">
                            <span className="sub-title">
                                {infoText.subTitle}
                            </span>
                            
                            <h2>
                                {infoText.title}
                            </h2>

                            <form className="free-trial-form" onSubmit={e => e.preventDefault()}>
                                <input 
                                    type="text" 
                                    className="input-newsletter" 
                                    placeholder="Enter Your Email Address" 
                                    name="email" 
                                />
                                <button type="submit" className="default-btn">
                                    {infoText.btnText}
                                </button>
                            </form>

                            {/* Shape Images */}
                            <div className="shape8">
                                <img width="78px" height="auto"  src="/images/shape/shape7.webp" alt="shape" />
                            </div>
                            <div className="shape9">
                                <img width="125px" height="101px"  src="/images/shape/shape8.webp" alt="shape" />
                            </div>

                            {/* Animation lines */}
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

export default FreeTrialStyle2;