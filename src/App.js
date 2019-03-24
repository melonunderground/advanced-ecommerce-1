import React, { Component } from 'react';
import './App.css';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductDetail from './components/ProductDetail';

class App extends Component {
    constructor() {
        super()
        this.state = {
            itemsInCart:[],
            products:''
        }
    }
componentDidMount() {
    this.setState({
        itemsInCart:this.props.data.itemsInCart,
        products:this.props.data.products
    
    })
}

// handleAddToCart = (product) => {
//     this.setState({itemsInCart: [...this.state.itemsInCart,product]})
// }

handleAddToCart = (product) => {
    this.setState(prevState => ({
        itemsInCart: [...prevState.itemsInCart, product]
    }))
}

handleClick = (product) => {
    this.handleAddToCart(product)
}

handleCheckOut = () => {
    
}

    render() {

    let products = this.props.data.products.map(product => <ProductDetail key={product.id} product={product} handleClick={this.handleClick} />)

    return (
      <div className="App">
     <Header itemsInCart={this.state.itemsInCart} />
        
    <div className="container">

        <div className="row">

            <div className="col-md-3">
                <p className="lead">Shop Name</p>
                <div className="list-group">
                    <a href="#" className="list-group-item">Category 1</a>
                    <a href="#" className="list-group-item">Category 2</a>
                    <a href="#" className="list-group-item">Category 3</a>
                </div>
            </div>

            <div className="col-md-9">
                <Carousel />

    
                <div className="row">
                
                    {products}
                    <button >checkout</button>
                </div>

            </div>

        </div>

    </div>
   
    <div className="container">

        <hr/>

      <Footer />

    </div>
      </div>
    );
}
}
export default App;
