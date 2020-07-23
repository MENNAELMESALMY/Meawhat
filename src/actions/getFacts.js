import axios from 'axios'

const getFacts = () =>{
    return(dispatch) =>{
        var facts=[];
        axios.get("https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=21")
        .then((res)=>{
            console.log("in resss", res.data)
            facts= res.data
            dispatch({type:'GET_FACTS',Facts:facts});
         }
        )
    }
}

export default getFacts