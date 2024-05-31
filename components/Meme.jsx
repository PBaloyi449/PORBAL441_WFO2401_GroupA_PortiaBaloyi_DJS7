//import React from "react"
import memesData from "../memesData.js"

export default function Meme() {
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)
    }

    return (
        <main>
            <form className="form">
                <div>
                <label htmlFor="top-text">Top text </label>
                <input 
                id="top-text"
                type="text" 
                placeholder="Shut up"
                className="form--input"
                />
                </div>
                <div>
                <label htmlFor="bottom-text">Bottom text </label>
                <input 
                id="bottom-text"
                type="text" 
                placeholder="Top text"
                className="form--input"
                />
                </div>
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </form>
        </main>
    )
}