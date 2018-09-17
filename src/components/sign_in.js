import React, {Component} from 'react';

class SignIn extends Component{
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        console.log('Form Submitted:', this.state);

        this.setState({
            email:"",
            password:"",
            name:""
        })
    }

    handleChange = (event)=>{
        console.log('Input value: ',event.target.value);
        console.log('Input name: ',event.target.name);
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>Demo Form</h1>
                <div>
                    <label>Email</label>
                    <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    />
                </div>
                <button>Submit</button>
            </form>
        )
    }
}

export default SignIn;
