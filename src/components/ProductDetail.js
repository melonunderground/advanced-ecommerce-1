import React from 'react';

function ProductDetail(props) {
    let stars = [];

    for (let i=0; i < props.product.rating; i++) {
        let star = <span className="glyphicon glyphicon-star"></span>
        stars.push(star)
    }

    const product = props.product
    
    return (

    <div className="col-sm-4 col-lg-4 col-md-4">
    <div className="thumbnail">
        <img src="http://placehold.it/320x150" alt=""/>
        <div className="caption">
            <h4 className="pull-right">{product.price}</h4>
            <h4><a href="#">{product.name}</a>
            </h4>
            <p>{product.description}</p>
        </div>
        <div className="ratings">
            <p className="pull-right">{product.reviews}</p>
            <p>
                {stars}
            </p>

            <button onClick={props.handleClick.bind(this,product)}>Add To Cart</button>
        </div>
    </div>
</div>
    )
}

export default ProductDetail;