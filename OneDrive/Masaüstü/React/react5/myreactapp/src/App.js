import React, { Component } from 'react'
import Navi from './components/Navi'
import ProductList from './components/ProductList'
import CategoryList from './components/CategoryList'
import { Col, Row } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
export default class App extends Component {
  state = {
    categories: [],
    products: [],
    cart: [],
    currentCategory: '',
  };
  componentDidMount() {
    this.getCategories();
  };
  addToCart = (product) => {
    let newCart = this.state.cart;
    newCart.push({ product: product, quantity:1 })
    this.setState({ cart: newCart })
  };
  getCategories = () => { fetch("http://localhost:3000/categories").then(document => document.json()).then(data => this.setState({ categories: data })) };
  changeproducts = (categoryId) => {
    var url = 'http://localhost:3000/products';
    url = url + '?categoryId=' + categoryId;
    fetch(url).then(document => document.json()).then(data => this.setState({ products: data }))
  };
  currentCategory = (category) => this.setState({ currentCategory: category })
  render() {
    return (
      <div>
        <Navi cart={this.state.cart} />
        <Row>
          <Col><CategoryList current={this.state.currentCategory} currentCategory={this.currentCategory} changeproducts={this.changeproducts} categories={this.state.categories} /></Col>
          <Col><ProductList addToCart={this.addToCart} products={this.state.products} /></Col>
        </Row>
      </div>
    )
  }
}

