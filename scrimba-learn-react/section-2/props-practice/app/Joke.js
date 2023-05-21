export default function Joke(props) {
    return (
        <div className="joke">
            <p><strong>{props.setup}</strong></p>
            <p>{props.punchline}</p>
        </div>
    )
}