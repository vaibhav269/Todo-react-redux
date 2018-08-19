import React from 'react';
import Form from '../components/Form';
import List from '../components/List';

const App = ()=>(
    <div>
        <div className="container">        
            <div className="row mt-5 justify-content-center">
                <h1>Welcome to the initial phase of todo application</h1>    
            </div>
            <div className="row mt-1 justify-content-center">                
                <div className="col-sm-12 col-md-5">                 
                    <div className="row mt-5">
                        <Form/>                        
                    </div>

                    <div className="row mt-2">
                        <List />
                    </div>                
                </div>
            </div>
        </div>
    </div>
);

export default App;