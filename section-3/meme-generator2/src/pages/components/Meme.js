import React from 'react'
import exportAsImage from '../../utils/exportAsImage'

export default function Meme() {
    const [allMemeImages, setAllMemeImages] = React.useState()
    
    const randomMemeUrl = () => {
        if(allMemeImages) {
            const memesArray = allMemeImages.data.memes;
            const randomNumber = Math.floor(Math.random() * memesArray.length);
            const url = memesArray[randomNumber].url;
            
            return url;
        } else {
            return 'https://i.imgflip.com/26am.jpg'
        }
    }

    const [meme, setMeme] = React.useState(
        {
            topText: "",
            bottomText: "",
            randomImage: randomMemeUrl()
        }
    );

    const getMemeImage = () => {        
        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                randomImage: randomMemeUrl()
            }
        })
    }

    const handleOnChange = event => {
        const {name, value} = event.target

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    React.useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://api.imgflip.com/get_memes');
            const jsonData = await response.json();
            setAllMemeImages(() => jsonData);
        }

        fetchData();
    }, [])

    const exportRef = React.useRef();
    
    return (
        <div id="meme">
            <form>
                <div id="meme--inputs">
                    <input 
                        type="text" 
                        className="form--input"
                        placeholder="Top text"
                        name="topText"
                        value={meme.topText}
                        onChange={handleOnChange}
                        />
                    <input 
                        type="text" 
                        className="form--input"
                        placeholder="Bottom text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleOnChange}
                        />
                </div>
            </form>
            <button onClick={getMemeImage} >Get a new meme image</button>
            <div className='meme-img' ref={exportRef}>
                <img 
                    src={meme.randomImage}
                    alt="meme"
                />
                <h2 className='meme--text top-text'>{meme.topText}</h2>
                <h2 className='meme--text bottom-text'>{meme.bottomText}</h2>
            </div>
            <button onClick={() => exportAsImage(exportRef.current, "test")}>shot</button>
        </div>
    )
}