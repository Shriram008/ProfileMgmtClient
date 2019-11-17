import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { Form, Container } from 'react-bootstrap';
import Moment from 'react-moment';

export default class SignupDetails extends Component {

    constructor(props) {
        super(props);
        var date = new Date();
        

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeCreatedOn =  this.onChangeCreatedOn.bind(this);
       
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            FirstName: '',
            CreatedOn: '',
            UserName: '',
            LastName: '',
            Gender: '',
            Email: '',
            Password: ''
            
        }
        
    }

    onChangeCreatedOn(e){
        console.log(e.target.value);
        this.setState({
            CreatedOn: e.target.value
            
        });
    }

    onChangeFirstName(e) {
        this.setState({
            FirstName: e.target.value
        });
    }

    onChangeLastName(e) {
        this.setState({
            LastName: e.target.value
        });
    }
    onChangeGender(e) {
        this.setState({
            Gender: e.target.value
        });
    }

    
     onChangeEmail(e) {
        console.log('inside onchane email '+ e.target.value)
        this.setState({
            Email: e.target.value
        });
    }
    onChangeUserName(e) {
        this.setState({
            UserName: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            Password: e.target.value
        });
    }
    

    componentDidMount() {
        axios.get('http://localhost:4000/ids/count')
            .then(response => {
                
                this.setState({ 
                    count: response.data+1
                    
                });
                console.log(this.state.count)
            })
            .catch(function (error){
                console.log(error);
            })
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`INC Priority: ${this.state.FirstName}`);
        console.log(`INC Priority: ${this.state.CreatedDate}`);
        console.log(`INC Priority: ${this.state.Email}`);
        console.log(`INC Priority: ${this.state.Gender}`);

        const IDs = {
            FirstName : this.state.FirstName,
            LastName: this.state.LastName,
            Gender:  this.state.Gender ,
            Email: this.state.Email,
            UserName: this.state.UserName,
            Password: this.state.Password,
            CreatedOn: this.state.CreatedOn
        }


        axios.post('http://localhost:4000/ids/add', IDs)
            .then(res => console.log(res.data));

            this.props.history.push('/');
            
        this.setState({
            FirstName: '',
            CreatedOn: new Date(),
            UserName: '',
            LastName: '',
            Gender: '',
            Email: '',
            Password: ''
        })


    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Sign Up Portal  </h3>
                <form onSubmit={this.onSubmit}>

                

                    <div className="form-group">
                        <label>First Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.FirstName}
                            onChange={this.onChangeFirstName} required
                        />
                    </div>

                    <div className="form-group">
                        <label>Last Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.LastName}
                            onChange={this.onChangeLastName} required
                        />
                    </div>

                    <div className="form-group">
                        <label>Last Name: </label>
                        <input type="date"
                            className="form-control"
                            value={this.state.CreatedOn}
                            onChange={this.onChangeCreatedOn} required
                        />
                    </div>

                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <label>Gender : </label>

                        <div>
                            <input className="form-check-input"
                                type="radio"
                                name="Gender Options"
                                id="MaleGender"
                                value="Male"
                                checked={this.state.Gender === 'Male'}
                                onChange={this.onChangeGender}
                            />
                            <label className="form-check-label">Male   </label>
                        </div>
                        <div className="form-check form-check-inline">
                        <input className="form-check-input"
                                type="radio"
                                name="Gender Options"
                                id="MaleGender"
                                value="Female"
                                checked={this.state.Gender === 'Female'}
                                onChange={this.onChangeGender}
                            />
                            <label className="form-check-label">Female </label>
                        </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Email ID   </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Email}
                            onChange={this.onChangeEmail} required
                        />
                    </div>

                    <div className="form-group">
                        <label>UserName  </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.UserName}
                            onChange={this.onChangeUserName} required
                        />
                    </div>

                    <div className="form-group">
                        <label>Password  </label>
                        <input type="password"
                            className="form-control"
                            value={this.state.Password}
                            onChange={this.onChangePassword} required
                        />
                    </div>

                     

                    <div className="form-group">
                        <input type="submit" value="Create Profile" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

