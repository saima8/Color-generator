import React, {useState, useEffect} from 'react'
import rgbtoHex from './utils'

const SingleColor = ({rgb, weight, index, hexcolor}) => {
    const [alert, setAlert] = useState(false)
    const bcg = rgb.join(',')
    const hex = rgbtoHex(...rgb);
    return (
        <article className={`color`} style={{backgroundColor: `rgb({${bcg}})`}}>
            <p className="percent-value">{weight}%</p>
            <p className="color-value">{hex}</p>
        </article>
        
    )
}

export default SingleColor