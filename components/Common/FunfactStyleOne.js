import React from 'react'
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'

const FunfactStyleOne = () => {

    const [funfact, setFunfact] = React.useState()
    React.useEffect(() => {
        const getFunfact = async () => {
            const response = await axios.get(`${baseApiUrl}/funfact-style-one`)
            setFunfact(response.data)
        }
        getFunfact()
    }, [])

    return (
        <>
            {funfact && (
                <div className="funfacts-area bg-f9f9f9 ptb-100">
                    <div className="container">
                        <div className="row justify-content-center">  
                            {funfact.funfacts.map(funfactList => (
                                <div className=" col-sm-3 col-md-3 col-6" key={funfactList.id}>
                                    <div className={funfactList.BgClass}>
                                        <div className="icon">
                                            <i style={{fontSize:'48px'}} className={funfactList.icon}></i>
                                        </div>
                                        <p>{funfactList.title}</p>
                                        <h3>
                                            {funfactList.number}<span className="sign">{funfactList.sign}</span>
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default FunfactStyleOne;