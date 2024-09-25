import React, { Component } from 'react';
import "./App.css";


class Smth extends Component{

    constructor(props){
        super(props);
        this.state = {
            product : []
        }
    }

    componentDidMount(){

        fetch("https://66f4644d77b5e88970995f31.mockapi.io/smth")
        .then(res => res.json())
      .then(data => this.setState({product: this.state.product = data}))

    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
        
    }

    render() {

        return(
            <div>
                {
                    this.state.product.map((item, index) => {

                        return(
                            <div key={index} id='products'>

                                <h1>{item.name}</h1>
                                <img src="${item.avatar}" alt="" />

                            </div>
                        )
                })
            }
            </div>
        )
    }
}
 
export default Smth;
