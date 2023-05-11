import React, { Component } from 'react'
import {ListGroup,ListGroupItem} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
export default class CategoryList extends Component {
  render() {
    return (
      <div><ListGroup>
        <h1>{this.props.categories.map(category=>(<ListGroupItem active={category.id=== this.props.current ? true:false} onClick={()=>{this.props.changeproducts(category.id);this.props.currentCategory(category.id)}} >{category.categoryName}</ListGroupItem>))}</h1></ListGroup></div>

    )
  }
}
