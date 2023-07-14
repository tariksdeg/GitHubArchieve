import React, { Component } from "react";
import { Container } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Row, Col } from "reactstrap";
import alertify from "alertifyjs";
import { Route, Routes } from "react-router-dom";
import CartList from "./CartList";
import NotFound from "./NotFound";
import FormDemo1 from "./FormDemo1";
import FormDemo2 from "./FormDemo2";

class App extends Component {
  state = {
    currentCategory: "",
    products: [],
    cart: [],
  };
  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.getProducts(category.id);
    this.setState({ currentCategory: category.categoryName });
  };
  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    alertify.success(product.productName + " ADDED", 1);
  };

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
  };

  render() {
    let categoryInfo = { title: "Category List" };
    let productInfo = { title: "Product List" };

    return (
      <div>
        <Container>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />

          <Row>
            <Col xs="3">
              <CategoryList
                changeCategory={this.changeCategory}
                info={categoryInfo}
                currentCategory={this.state.currentCategory}
              ></CategoryList>
            </Col>
            <Col xs="9">
              <Routes>
                {" "}
                <Route
                  path="/"
                  element={
                    <ProductList
                      addToCart={this.addToCart}
                      products={this.state.products}
                      info={productInfo}
                      currentCategory={this.state.currentCategory}
                    />
                  }
                ></Route>
                <Route
                  exact
                  path="/cart"
                  element={
                    <CartList
                      cart={this.state.cart}
                      removeFromCart={this.removeFromCart}
                    />
                  }
                ></Route>
                <Route path="*" element={<NotFound />}></Route>
                <Route path="/form1" element={<FormDemo1 />}></Route>
                <Route path="/form2" element={<FormDemo2 />}></Route>
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
