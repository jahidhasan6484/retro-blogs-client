import React from 'react';

const SignUp = () => {

    const handleBlur = (e) => {
        console.log(e.target.name, e.target.value);
    }

    const handleSubmit = () => {

    }
    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit}>
                <div>
                    <input onBlur={handleBlur} type="text" name="email" placeholder="Your email" required/>
                </div>
                <div>
                    <input onBlur={handleBlur} type="text" name="password" placeholder="Password" required/>
                </div>
               <input type="submit" value="Submit"/>
            </form>
        </div>

    );
};

export default SignUp;