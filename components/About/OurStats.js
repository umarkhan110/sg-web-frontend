import React from 'react'
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'

const OurStats = () => {
    const [stats, setStats] = React.useState()
    React.useEffect(() => {
        const getStats = async () => {
            const response = await axios.get(`${baseApiUrl}/our-stats`)
            setStats(response.data)
            // console.log(response.data)
        }
        getStats()
    }, [])

    return (
        <>
            {stats && (
                <div className="stats-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">
                                {stats.subTitle}
                            </span>
                            <h2>{stats.title}</h2>
                        </div>
                        <div className="stats-map text-center">
                            <img src={stats.image.url} alt={stats.image.alternativeText} />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default OurStats;