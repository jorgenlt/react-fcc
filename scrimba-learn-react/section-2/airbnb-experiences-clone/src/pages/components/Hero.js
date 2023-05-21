import Image from 'next/image'
import photoGrid from '../images/photo-grid.png';

export default function Hero() {
    return (
        <div id="hero">
            <div id="hero--photo-grid">
                <Image 
                    src={photoGrid}
                    height={232}
                />
            </div>
            <h1>Online Experiences</h1>
            <div id="hero--text">
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    )
}