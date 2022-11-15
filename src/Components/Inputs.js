export default function Inputs() {
    return (
        <form className='inputs'>
            <div className='inputs--top'>
                <input type='text' placeholder='Top Text' className='inputs--top--writing'></input>
                <input type='text' placeholder='Bottom Text' className='inputs--bottom--writing'></input>
            </div>
            <div className='inputs--bottom'>
                <button className='inputs--button'>Generate new meme image 🖼️</button>
            </div>
        </form>
    )
}