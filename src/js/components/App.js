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
        return(
            <div>
                <div className="container-fluid">
                    <div className="row justify-content-center">        
                        <h1 className="bg-dark text-center p-2 text-white w-100"><strong>TODOS</strong></h1> 
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