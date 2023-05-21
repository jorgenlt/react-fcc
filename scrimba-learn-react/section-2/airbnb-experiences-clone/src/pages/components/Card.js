import Image from 'next/image'
import star from '../images/star.png';

const imgSrc = "../images/"

export default function Card(props) {
    console.log(imgSrc + props.img);
    return (
        <div className="card">
            <Image 
                className='card--image'
                src={props.img}
                alt="some text"
                height="fill"
                width="fill"
            />
            <div className="card--stats">
                <Image 
                    src={star}
                    alt="star"
                    className='card--star'
                />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount})•</span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}