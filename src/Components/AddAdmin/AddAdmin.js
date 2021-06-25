import React, { useState } from "react";

const AddAdmin = () => {
    const [info, setInfo] = useState({});

    const handleBlur = (e) => {
      const newInfo = { ...info };
      newInfo[e.target.name] = e.target.value;
      setInfo(newInfo);
    };
  
    const handleSubmit = () => {
      const admin = { ...info };
      fetch("http://localhost:5000/addAdmin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(admin),
      });
    };
    return (
        <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="container addAdmin">
              <div className="row">
                <div
                  className="col-md-10 p-4 pr-5"
                  style={{
                    position: "absolute",
                    right: 0
                  }}
                >
                  <h3>Make Admin</h3>
                  <br></br>
                  <form>
                  <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input
                        onBlur={handleBlur}
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Password</label>
                      <input
                        onBlur={handleBlur}
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Enter password"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn__primary"
                      onClick={() => handleSubmit()}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddAdmin;