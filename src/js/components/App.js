import React,{Component} from 'react';
import Form from '../components/Form';
import List from '../components/List';


const breakpoints = {
    desktop: 1040,
    tablet: 840,
    mobile: 540
  };


class App extends Component{
    render(){
        function responsiveHeading(){            
                if (window.innerWidth > breakpoints.tablet) {
                    return (
                            <h1 className="display-2 mt-5 text-center">WELCOME TO TODO APPLICATION</h1> 
                        )   
                  }            
            else {
                return (
                    <h1 style ={ {backgroundColor : '#ee6352'}} className="display-4 text-center text-white w-100"><strong>TODOS</strong></h1> 
                )
            }
        }
        return(
            <div>
                <div className="container-fluid">
                    <div className="row justify-content-center">        
                        { responsiveHeading() }   
                    </div>
                <div className="row mt-5 justify-content-center">                
                    <div className="col-sm-12 col-lg-7">
                        <div className="row">                        
                            <Form/>                        
                        </div>
    
                        <div className="row mt-5">
                            <List />
                        </div>                
                    </div>
                </div>
            </div>
        </div>        
        )
    }
}


export default App;