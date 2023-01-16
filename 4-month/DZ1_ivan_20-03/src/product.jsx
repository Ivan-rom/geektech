function Product(props) {
    const product = props.props
    return (
        <li className="product" id={"product-" + product.id}>
            <img className="product-image" src={"./src/assets/" + product.image} alt={product.title}/>
            <div className="product-text">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-info">
                    <p className="product-price">${product.price}</p>
                    <a className="product-button button" href={"path-to-image/" + product.id}>Show more</a>
                </div>
            </div>
        </li>
    )
}

export default Product