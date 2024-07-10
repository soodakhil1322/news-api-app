import React from 'react'
import './App.css';
import Entertainment from './components/Entertainment';
import Science from './components/Science'
import Politics from './components/Politics'
import Technology from './components/Technology'
import Health from './components/Health'
import Buisness from './components/Buisness';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

import ButtonGroup from './components/Buttongroup';
import { useState ,useEffect} from 'react';
import Footer from './components/Footer';
import Loader from './components/Loader';

const buttons = [
      "Entertainment","Science","Politics","Technology","Health","Buisness"
]

const RenderComponent=({index})=>{
     switch (index) {
      case 0:return <Entertainment/>
        break;
        
        case 1:return <Science/>
        break;
        case 2:return <Politics/>
        break;
        case 3:return <Technology/>
        break;
        case 4:return <Health/>
        break;
        case 5:return <Buisness/>
        break;
      default:
        break;
     }
}

function Home() {
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false); 
        }, 3000); 
    }, []);
    
       const [Isselected,Setisselected]=useState(0);
  return (
    <div>
        <Header />
    
         
    {isLoading ? (
           <Loader /> 
       ) : (
           <div>
           <ButtonGroup buttons={buttons} Isselected={Isselected} Setisselected={Setisselected}/>
           <RenderComponent index={Isselected}/>
           <Footer/>
             
           </div>
       )}
    </div>
  )
}

export default Home
