import memesData from '../memesData'

export default function Meme() {
    const getMemeImage = () => {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        console.log(url);

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
        </div>
    )
}