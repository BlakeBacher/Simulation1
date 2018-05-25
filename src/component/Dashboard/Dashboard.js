import React, { Component } from 'react'
import Product from '../Product/Product'

class Dashboard extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            
        }
    }
    
    render(){
        // console.log("this is current props right now --- ",this.props);
        
        let mappedInventory = this.props.inventory.map((element, i) => {
            return (
                <div>
                    <hr />
                    {/* <div>
                        <div key = {i}></div>
                    </div>  */}
                         <Product   imageURL = {element.imageURL}
                                    product = {element.product}
                                    price = {element.price}/>
                    <hr />
                </div> 
            )})
        
        return(
        <div>Dashboard
             <div>
               <Product />
               {/* <div>{this.props.inventory[0].name}</div> */}
               <div>{mappedInventory}</div>  
            </div> 
        </div>
        )
    }
}

export default Dashboard;