import React from 'react';

const Loginform = (props) => {
    const [login, email, pass, error, isLoggedInCheck, isLoggedIn] = props.handleReg;

    return (
        <div className="container">
            <h1 className="text-primary">Please {isLoggedIn ? "log in" : "sign up"}</h1>
            <form onSubmit={login}>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={email} type="email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={pass} type="password" className="form-control" id="inputPassword3" required />
                        <div className="form-check mt-3">
                            <input onChange={isLoggedInCheck} className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Already Registered?
                            </label>
                        </div>
                    </div>
                </div>
                {(error !== "success" && error) &&
                    <div className="row mb-3">
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div></div>
                }
                {error === "success" &&
                    <div className="row mb-3">
                        <div className="alert alert-success" role="alert">
                            Successfully Registered!!
                        </div></div>
                }
                <button type="submit" className="btn btn-primary">{isLoggedIn ? "log in" : "sign up"}</button>
            </form>
        </div>
    );
};

export default Loginform;