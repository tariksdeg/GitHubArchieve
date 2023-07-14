import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Container } from 'reactstrap'
import CartDetail from '../cart/CartDetail'
import NotFound from '../common/NotFound'
import Navi from '../navi/Navi'
import AddOrUpdateProduct from '../products/AddOrUpdateProduct'
import Dashboard from './Dashboard'

 class App extends Component {
  render() {
    return (
     <Container>
      <Navi/>
      <Routes>
        <Route path="/" exact element={<Dashboard/>}></Route>
        <Route path="/product" exact element={<Dashboard/>}></Route>
        <Route path="/cart" exact element={<CartDetail/>}></Route>
        <Route path="/saveproduct/:productId"  element={<AddOrUpdateProduct/>}></Route>
        <Route path="/saveproduct"  element={<AddOrUpdateProduct/>}></Route>
        <Route path="*"  element={<NotFound/>}></Route>
      </Routes>
      
      
     </Container> 
        
        
    
    )
  }
}

export default App