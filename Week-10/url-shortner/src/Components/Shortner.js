import React, {useEffect, useState} from 'react'
import '../CSS/shortner.css'
import axios from "axios";

function Shortner() {
    const [link, setLink] = useState('');
    const [shortendURL, setShortendURL] = useState('');
    const onChangeHandler = function (e) {
        let temp = e.target.value;
        setLink(temp);
    };

    const onClickShortner = function () {
        console.log("Clicked")
        if (link === "") {
            console.log("Empty URL");
            return;
        }
        axios.post(`https://api.shrtco.de/v2/shorten?url=${link}`)
        .then((response)=>{
            let data = response.data.result;
            console.log(data)
            setShortendURL(data.short_link)
            setLink(data.original_link)
            console.log(link, shortendURL)
        });
    };
    return (
    <div className='shortner'>
        <div className='urlInput'>
            <input onChange={onChangeHandler} placeholder='Shorten URL'></input>
            <button onClick={onClickShortner}>Shorten</button>
        </div>
    </div>
  )
}

export default Shortner