import React, { Component } from "react";
import axios from 'axios';


class CatCard extends Component {
  state ={
      imageUrl:""
  }
  componentDidMount(){
    axios.get(
        "https://api.thecatapi.com/v1/images/search"
    ).then((response)=>{
        console.log("image Url",response.data[0].url)
        this.setState({
            imageUrl:response.data[0].url
        })
    }
    )   
    
   }
  render(){
    const {catFact} = this.props
    return (
        <div className="card mycard">
        <img className="card-img-top mycard" src={this.state.imageUrl}  alt="a lovely cat"/>
        <div className="card-body">
        <p className="card-text">
        {catFact}
        </p>
        </div>
    </div>
    );
  }
};

export default CatCard;
