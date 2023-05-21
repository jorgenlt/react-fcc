export default function Card(props) {
    return (
        <div className="card">
            {props.soldOut && <div id="card--badge">SOLD OUT</div>}
            <img
                src={`/images/${props.coverImg}`}
                className='card--image'
                alt="some text"
            />
            <div className="card--stats">
                <img 
                    src="/images/star.png"
                    alt="star"
                    className='card--star'
                />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) •</span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
            <p></p>
        </div>
    )
}