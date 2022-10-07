import React, {useEffect, useState} from 'react'
import '../CSS/shortner.css'
import axios from "axios";

const loaderAnimation = 'https://assets.materialup.com/uploads/b68f4460-aaa9-4e19-99d8-232dfea1c537/preview.gif'


function Shortner() {
    const [link, setLink] = useState('');
    const [loader, setLoader] = useState(false)
    const [shortendURL, setShortendURL] = useState('');
    const onChangeHandler = function (e) {
        let temp = e.target.value;
        setLink(temp);
    };

    const onClickShortner = function () {
        console.log("Clicked")
        setLoader(true)
        if (link === "") {
            console.log("Empty URL");
            setLoader(false)
            return;
        }
        axios.post(`https://api.shrtco.de/v2/shorten?url=${link}`)
        .then((response)=>{
            let data = response.data.result;
            console.log(data)
            setShortendURL(data.short_link)
            setLink(data.original_link)
            setLoader(false);
            console.log(link, shortendURL)
        });
    };
    const Load = function (props){
        console.log(props.loader)
        if(props.loader){
            return <img className='loader' src={loaderAnimation} alt='loader' />
        }
        else{
            return ;
        }
    }
    const Display = function (props){
        console.log(props.link)
        if(props.link !== ''){
            return(
                <div className='urlOutput'>
                <button title='Copy' className='copy' onClick={()=>{
                    navigator.clipboard.writeText(shortendURL);
                }}><p className='shortendLink'>{shortendURL}</p></button>
                </div>)
        }
    }
    return (
    <div className='shortner'>
        <div className='urlInput'>
            <input onChange={onChangeHandler} placeholder='Shorten URL'></input>
            <button onClick={onClickShortner}>Shorten</button>
        </div>
        <Load loader={loader}/>
        <Display link={shortendURL} />
    </div>
  )
}

export default Shortner