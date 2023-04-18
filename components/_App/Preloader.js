import React from 'react'
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'

const Preloader = () => {
    const [logo, setLogo] = React.useState()
    React.useEffect(() => {
        const getLogo = async () => {
            const response = await axios.get(`${baseApiUrl}/site-logo`)
            setLogo(response.data)
        }
        getLogo()
    }, [])

    return (
        <>
            <div className="preloader-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        {logo && (
                            <img 
                                src={logo.blackLogo.url} 
                                alt={logo.blackLogo.alternativeText} 
                            />
                        )}
                        <p>Loading...</p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .preloader-area {
                    position: fixed;
                    background: #fff;
                    width: 100%;
                    top: 0;
                    height: 100%;
                    z-index: 1010;
                    left: 0;
                    text-align: center;
                    opacity: .97;
                }
                .preloader-area img {
                    margin-bottom: 5px;
                }
                .preloader-area p {
                    font-size: 17px;
                }
            `}</style>
        </>
    )
}

export default Preloader;
