import React from 'react'
import Lottie from 'react-lottie'
import * as loading from '../assets/loader.json'

const defaultOptions = {
    loop: true,
    autoplay:true,
    animationData: loading.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
}

const Loader = () => {
    return(
        <div>
            <Lottie options={defaultOptions}/>
        </div>
    )
}

export default Loader