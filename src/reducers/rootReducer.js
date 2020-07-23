
const initState = {
    CatsFacts: [{
        text:"meaaw",
        _id:"7"
    }]
} 

const rootReducer = (state = initState,action)=>{
   if(action.type === 'GET_FACTS'){
       console.log("facts",action.Facts);
       state= {CatsFacts:action.Facts};

   }
   return state;
  
}

export default rootReducer