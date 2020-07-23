import React, { Component } from  'react';
import {connect} from 'react-redux';
import CatCard from '../ui/CatCard';
import axios from "axios";
import getFacts from '../../actions/getFacts'

class Home extends Component {
    state={
        loading:true
    }
    loadFacts = () =>{
        this.props.getFacts();
        console.log("props",this.props)
    }
    toggleLoading = () =>{
        setTimeout(()=>{
            this.setState({
                loading:false
            })
        },1000)
    }
    componentDidMount(){
        this.loadFacts();  
        this.toggleLoading();
      
    }
    render(){
    const { CatsFacts } = this.props;
    console.log(this.props)
    const catList = CatsFacts.map(cat=>{
        return(
            <CatCard catFact={cat.text} key={cat._id}/>
        )
    })
    const facts = this.props.CatsFacts.length ?(
        <div>
        <div className="card-columns">
        {catList}
        </div>
        <div className="row justify-content-center">
        <button
        className="col-sm-4 waves-effect waves-light btn-large white-text orange darken-4" 
        onClick={this.loadFacts}>New Meaw Facts</button>
        </div>
        </div>
        )
    :(
        <div>
        <div className="btn-floating btn-large pulse orange darken-4" style={{margin: 45 +"%", marginTop: 40 +"px"}}>
         <i className="fa fa-paw"></i></div>
         </div>

    )
    return(
        this.state.loading?
         (
        <div className="container">
        <div className="btn-floating btn-large pulse orange darken-4" style={{margin: 45 +"%", marginTop: 40 +"px"}}>
         <i className="fa fa-paw"></i></div>
         </div>
        )
     : 
     <div className="container">
        { facts }
     </div>
    )
 }
}

const mapStateToProps = (state) =>{
    return {
        CatsFacts: state.CatsFacts
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
    getFacts: () => {
        dispatch(getFacts())
    }
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)