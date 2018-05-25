import React, { Component } from 'react'
import Product from '../Product/Product'

class Dashboard extends Component{
    render(){
           
        return(
        <div>Dashboard
             <div>
               <Product/>
            </div> 
        </div>
        )
    }
}

export default Dashboard;