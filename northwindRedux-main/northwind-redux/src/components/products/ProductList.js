import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge, Button,  Table } from "reactstrap";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions"
import alertify from "alertifyjs"
import { Link } from "react-router-dom";

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }
  addToCart=(product)=>{
this.props.actions.addToCart({quantity:1,product})
alertify.success(product.productName + " Sepete Eklendi",2)
  }
  render() {
    return (
      <div>
        <h2>
          <Badge color="warning">Products : </Badge>
          <Badge>{this.props.currentCategory.categoryName}</Badge>
        </h2>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>quantityPerUnit</th>
              <th>unitPrice</th>
              <th>unitsInStock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <td scope="row">{product.id}</td>    
                <td><Link to={"/saveproduct/"+product.id}>{product.productName}</Link></td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td><Button color="success" onClick={()=>this.addToCart(product)}>ADD</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart:bindActionCreators(cartActions.addToCart,dispatch)
    },
  };
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

