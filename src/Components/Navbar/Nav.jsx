import logo from '../../Img/logo.svg'
import './Nav.css'

const Navbar = () => {

    return (
        <nav>
            <img className='Logo' src={logo} alt="" />
            <h2 className='Name-Header'>Kobe Edmond</h2>
        </nav>
    
    )
}

export default Navbar;