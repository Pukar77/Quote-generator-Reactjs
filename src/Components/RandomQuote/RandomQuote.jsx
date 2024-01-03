import React, { useState } from 'react'
import './RandomQuote.css'
import Reload_icon from '../Assest/Reload image.png'

export const RandomQuote = () => {

    let quotes = [];

    async function loadquotes(){
        const response = await fetch ("https://type.fit/api/quotes");
        quotes = await response.json();
    }


    const [quote, setquote] = useState({
        text: "Difficulties increases the nearer we get to the goal.",
        author: "Johann Wolfgang von Goethe",
    });

    
    const random = () => {
        const select = quotes[Math.floor(Math.random()*quotes.length)]
        setquote(select);
    }

    loadquotes();


  return (



    <div className='container'>

        <div className="quote">
            {quote.text}
            <div className="line">
                <div className="bottom">
                    <div className="author">
                        - {quote.author .split(',')[0]}
                      
                    </div>
                    <div className="icons">
                            <img src={Reload_icon} onClick={()=>{random()}} alt=''/>
                        </div>
                </div>
            </div>
        </div>

    </div>
  )
}
