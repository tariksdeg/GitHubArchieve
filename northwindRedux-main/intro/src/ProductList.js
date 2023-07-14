import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>
          {this.props.info.title}-{this.props.currentCategory}
        </h3>

        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Category Id</th>
              <th>Product Name</th>
              <th>quantity Per Unit</th>
              <th>Unit Price</th>
              <th>Units in Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>

                <td>{product.categoryId}</td>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <Button
                    onClick={() => {
                      this.props.addToCart(product);
                    }}
                    color="info"
                  >
                    Add
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
