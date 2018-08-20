import React from 'react';
import Form from '../components/Form';
import List from '../components/List';

const App = ()=>(
    <div>
        <div className="container-fluid">
            <div className="row mt-5 justify-content-center">
                <h1 className="display-2 text-center">WELCOME TO THE TODO APPLICATION</h1>    
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
);

export default App;