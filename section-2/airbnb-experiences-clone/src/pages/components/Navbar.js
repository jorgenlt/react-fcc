import Image from 'next/image'
import logo from '../images/airbnb-logo.png';

export default function Navbar() {
    return (
        <nav id="nav">
            <Image 
                src={logo}
                height={25}
                id="nav--logo"
            />
        </nav>
    )
}