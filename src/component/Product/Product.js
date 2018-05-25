import React, {Component} from 'react'



function Product(props){
    // console.log('this is props on PRODUCT ', this.props);
    
    return(
        <div>
            <p>Image: {props.imageURL}</p>
            <p>Name: {props.product}</p>
            <p>Price: {props.price}</p>
        </div> 
    )
}




export default Product;