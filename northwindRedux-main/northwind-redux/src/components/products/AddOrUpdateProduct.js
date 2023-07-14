import React, { useEffect, useState } from "react";
import { connect,} from "react-redux";
import { getCategories } from "../../redux/actions/categoryActions";
import { saveProduct } from "../../redux/actions/productActions";
import ProductDetail from "./ProductDetail";
import { compose } from "redux";
import withRouter from "./withRouter";

const AddOrUpdateProduct=({
  products,
  categories,
  getProducts,
  getCategories,
  saveProduct,
  history,
  ...props
})=> {
  
  const [product, setProduct] = useState({ ...props.product });
  const [errors, setErrors]=useState({})
  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
    setProduct({ ...props.product });
  }, [props.product]);
  
  function handleChange(event) {
    const { name, value } = event.target;
    setProduct((previousProduct) => ({
      ...previousProduct,
      [name]: name === "categoryId" ? parseInt(value, 10) : value,
    }));
    validate(name,value)
     }

     function validate(name,value){
      if(name==="productName" && value===""){
      setErrors(previousErrors=>({...previousErrors,productName:"Ürün ismi olmalı"}))
    }
    else{
      setErrors(previousErrors=>({...previousErrors,productName:""}))
    }
  }

  function handleSave(event) {
    event.preventDefault();
    saveProduct(product).then(() => {
      history.push("/");
    });
  }

  return (
    <ProductDetail
      product={product}
      categories={categories}
      onChange={handleChange}
      onSave={handleSave}
      errors={errors}
    ></ProductDetail>
  );
}
export function getProductById(products, productId) {
  let product = products.find(product => product.id == productId) || null;
  return product;
}

function mapStateToProps(state,{params}) {

  const  {productId}  = params || {}
  console.log(productId)
  const product =
    productId && state.productListReducer.length > 0
      ? getProductById(state.productListReducer, productId)
      : {};
  return {
    product,
    products: state.productListReducer,
    categories: state.categoryListReducer,
  };
}

const mapDispatchToProps = {
  getCategories,
  saveProduct,
};

export default compose(withRouter,connect(mapStateToProps, mapDispatchToProps))(AddOrUpdateProduct);
