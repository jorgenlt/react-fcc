import React from 'react'
import memesData from '../memesData'

export default function Meme() {

    const [memeImage, setMemeImg] = React.useState('');

    const getMemeImage = () => {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        
        setMemeImg(() => url);
        console.log(memeImage);

    }

    return (
        <div id="meme">
            <form>
            </form>
            <div id="meme--inputs">
                <input 
                    type="text" 
                    className="form--input"
                    placeholder="Top text" 
                />
                <input 
                    type="text" 
                    className="form--input"
                    placeholder="Bottom text"
                />
            </div>
            <button onClick={getMemeImage} >Get a new meme image</button>
            <img 
                src={memeImage}
                width={477}
                alt="meme"
            />
        </div>
    )
}