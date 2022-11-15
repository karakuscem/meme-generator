import logo from '../Assets/logo.svg';

export default function Header() {
    return (
        <div className='header'>
            <div className='header--left'>
                <img src={logo} alt='' className='header--logo'></img>
                <h1 className='header--title'>Meme Generator</h1>
            </div>
            <div className='header--right'>
                <h3 className='header--right--title'>React Course - Project 3</h3>
            </div>
        </div>
    )
}