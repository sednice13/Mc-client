
import axios from 'axios'
import React, { useState, useEffect } from "react";



const PlayerHead = ({username}) => {
    const [skinUrl, setSkinUrl] = useState(null)

    useEffect(()  => {

        const gethead = async () => {

            
            setSkinUrl(`https://mineskin.eu/avatar/${username}/100.png`)

        }
        
    gethead()
        
    }, [username])

    if (skinUrl === null) {
        return <div>Loading...</div>;
      } else {
        return <img src={skinUrl} alt={`Minecraft Skin`} />;
      }

}

export default PlayerHead