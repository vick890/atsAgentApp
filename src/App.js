import React, {useState, useEffect} from 'react';
import Route from './navigation/route';
import ThirdScreen from './screens/thirdscreen'
import Spalsh from './screens/splashscreen';

const App = () =>{

  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(function(){
      setLoading(false);
    },2000);
  })

  if(loading){
    return(
      <Spalsh/>
    )
  }
  else{
    return(
      <Route/>
    )  
  }
}

export default App;