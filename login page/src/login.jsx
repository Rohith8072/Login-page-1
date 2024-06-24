import React from "react";

function LoginPage(){
    return (
    
             <div className="card col-8 col-md-5 mx-auto mt-5 border-0 shadow">
        <div className="card=body">
            <form  className="d-flex flex-column gap-2 gap-md-3">
                <h3 className="text-center">Login</h3>

                <div className="form-group">
                    <label className="form-label" htmlFor="email">
                        Email
                        </label>
                    <input 
                     type="email"
                     name="email"
                     id="eamil"
                     className="form-control" />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="password">
                        Password
                     </label>
                    <input 
                     type="password"
                     name="password"
                     id="password"
                     className="form-control" />
                </div>
                <div className="d-grid">
                    <button className="btn btn-primary mx-2">Login</button>
                </div>
                <div className="d-grid p-4 border-top border-3 border-dark">
                    <button className="btn btn-success mx-3">Create Account?</button>
                </div>
            </form>
        </div>
      </div>

    
     



    );
}


export default LoginPage;