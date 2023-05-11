import React, { Component } from 'react'
import {Table,Button} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
export default class ProductList extends Component {
  render() {
    return (
      <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
         {this.props.products.map(product=>(<tr><th>{product.productName}</th>
         <th>{product.categoryId}</th>
         <th>{product.unitsInStock}</th>
         <th>{product.unitsInStock}</th>
         <th><Button onClick={()=>(this.props.addToCart(product))} color="info">Add To Cart</Button></th>
         </tr>))}
        </tbody>
      </Table></div>
    )
  }
}
