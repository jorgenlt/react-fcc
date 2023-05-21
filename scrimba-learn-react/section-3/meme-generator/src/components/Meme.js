import React from 'react'
import memesData from '../memesData'

export default function Meme() {
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    
    const randomMemeUrl = () => {
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;

        return url;
    }

    const [meme, setMeme] = React.useState(
        {
            topText: "",
            bottomText: "",
            randomImage: randomMemeUrl()
        }
    );

    const getMemeImage = () => {        
        setMeme((prevState) => {
            return {
                ...prevState,
                randomImage: randomMemeUrl()
            }
        })
    }

    // set the first random meme

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
                src={meme.randomImage}
                width={477}
                alt="meme"
            />
        </div>
    )
}