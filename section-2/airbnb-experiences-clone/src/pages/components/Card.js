import Image from 'next/image'
import katie from '../images/katie-zaferes.png'
import star from '../images/star.png';

export default function Card() {
    return (
        <div className="card">
            <Image 
                src={katie}
                className='card--image'
                height={235}
            />
            <div className="card--stats">
                <Image 
                    src={star}
                    className='card--star'
                />
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}