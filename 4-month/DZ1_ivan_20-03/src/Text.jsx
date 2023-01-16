function Text(props) {
    return (
        <div className="text">
            <h1 className="text-title">{props.title}</h1>
            <p className="text-text">{props.description}</p>
            <button className="text-button button">Learn more</button>
        </div>
    )
}

export default Text