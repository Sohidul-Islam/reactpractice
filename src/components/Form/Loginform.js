import React from 'react';

const Loginform = (props) => {
    const [login, email, pass] = props.handleReg;

    return (
        <div className="container">
            <form onSubmit={login}>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={email} type="email" className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={pass} type="password" className="form-control" id="inputPassword3" />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        </div>
    );
};

export default Loginform;