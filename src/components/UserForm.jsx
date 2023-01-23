import React, {useState} from 'react';

//  Component Function
const UserForm = (props) => {
    // Set initial state for user
    const [user, setUser] = useState({
        fName: '',
        lName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    // set initial state for submission status
    const [submitStatus, setSubmitStatus] = useState(false)

    // update user state based on input values
    const handleUserChange = (e) => {
        // console.log(e);
        setUser(prevState => {return {...prevState, [e.target.name]: e.target.value}});
    };

    // Validate all form inputs
    const validateForm = () => {
        let formIsValid = true;

        if (user.fName.length < 2) {
            formIsValid = false;
        }
        if (user.lName.length < 2) {
            formIsValid = false;
        }
        if (user.email.length < 5) {
            formIsValid = false;
        }
        if (user.password.length < 8) {
            formIsValid = false;
        }
        if (user.confirmPassword !== user.password) {
            formIsValid = false
        }
        return formIsValid;
    };

    // if form data is valid, create an object from the user state variable and return the object
    const createUser = (e) =>{
        e.preventDefault();
        if (validateForm()) {
            console.log(`${JSON.stringify(user)}`);
            setSubmitStatus(true)
            return user;
        } else {
            alert("Please make sure form data is valid")
        }
    };
    //  Sensei bonus: if event.target.value.length < 1 [don't show validations]

    // render message based on submission status
    const formMessage = () => {
        if (submitStatus) {
            return "Registration successful. You can now log in.";
        }
        return "Please register to continue";
    };

    // return component
    return (
        <div>
            <form onSubmit={createUser}>

                <h2>Register for free!</h2>
                <h3>{formMessage()}</h3>
                <div className="form-group">
                    <label htmlFor="fName">First Name: </label>
                    <input type="text" name="fName" onChange = {handleUserChange} />
                </div>

                {
                    user.fName.length < 2 ?
                    <p>First name must be 3 or more characters</p>
                    :null
                }

                <div className="form-group">
                    <label htmlFor="lName">Last Name: </label>
                    <input type="text" name="lName" onChange = {handleUserChange} />
                </div>

                {
                    user.lName.length < 2 ?
                    <p>Last name must be 3 or more characters</p>
                    :null
                }

                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" onChange = {handleUserChange} />
                </div>

                {
                    user.email.length < 5 ?
                    <p>Email must be 7 or more characters</p>
                    :null
                }

                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" onChange = {handleUserChange} />
                </div>

                {
                    user.password.length < 8 ?
                    <p>Password must be at least 8 characters</p>
                    :null
                }

                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password: </label>
                    <input type="password" name="confirmPassword" onChange = {handleUserChange} />
                </div>

                {
                    user.confirmPassword !== user.password ?
                    <p>Passwords must match</p>
                    :null
                }
                
            <button>Submit</button>
            </form>
            
            { 
                user.fName.length > 2 ?
                <>
                    <h2>First Name:</h2>
                    <p>{user.fName}</p>
                </>
                :null
            }
            
            {
                user.lName.length > 2 ?
                <>
                    <h2>Last Name:</h2>
                    <p>{user.lName}</p>
                </>
                :null
            }

            {
                user.email.length > 6 ?
                <>
                    <h2>Email:</h2>
                    <p>{user.email}</p>
                </>
                :null
            }

            {
                user.password.length > 7 ?
                <>
                    <h2>Password:</h2>
                    <p>{user.password}</p>
                </>
                :null
            }

            {
                user.confirmPassword.length > 7 ?
                <>
                    <h2>Confirm Password:</h2>
                    <p>{user.confirmPassword}</p>
                </>
                :null
                    
            }
        </div>
    );
};

export default UserForm;