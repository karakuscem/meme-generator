import React from "react"

export default function Inputs() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg",
    })

    const [allMemeImgs, setAllMemeImgs] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                setAllMemeImgs(response.data.memes)
            })
    }, [])

    function get_memes() {
        const randomNum = Math.floor(Math.random() * allMemeImgs.length)
        const randomMemeImg = allMemeImgs[randomNum].url
        setMeme({...meme, randomImg: randomMemeImg})
    }

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    return (
        <div className='inputs'>
            <div className='inputs--top'>
                <input type='text' placeholder='Top Text' className='inputs--top--writing' name="topText" value={meme.topText} onChange={handleChange}></input>
                <input type='text' placeholder='Bottom Text' className='inputs--bottom--writing' name="bottomText" value={meme.bottomText} onChange={handleChange}></input>
            </div>
            <div className='inputs--bottom'>
                <button className='inputs--button' onClick={get_memes}>Generate new meme image 🖼️</button>
            </div>
            <div className="meme">
                <img src={meme.randomImg} className='meme--image' alt=""></img>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}