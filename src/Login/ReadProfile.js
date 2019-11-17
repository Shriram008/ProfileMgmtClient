import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import axios from 'axios';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import { Form, Container } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import Moment from 'react-moment';

export default class ReadProfile extends Component {

    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        //this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            _id: '',
            FirstName: '',
            CreatedOn: '',
            UserName: '',
            LastName: '',
            Gender: '',
            Email: '',
            Password: ''
        }
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

    componentDidMount() {
        axios.get('http://localhost:4000/ids/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    _id: response.data._id,
                    FirstName: response.data.FirstName,
                    LastName: response.data.LastName,
                    UserName: response.data.UserName,
                    Gender: response.data.Gender,
                    Email: response.data.Email,
                    UserName: response.data.UserName,
                    CreatedOn: response.data.CreatedOn,
                   
                });
                
                console.log(this.state.CreatedOn); 
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    /* onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);

        console.log(`INC Priority: ${this.state.INC_Status}`);
        console.log(`INC Priority: ${this.state.INC_ImpactedApplications}`);
        console.log(`INC Priority: ${this.state.INC_AssignedTo}`);
        console.log(`INC Priority: ${this.state.INC_Priority}`);

        const INCs = {
            INC_Number: this.state.INC_Number,
            INC_Subject: this.state.INC_Subject,
            INC_RaisedOn: this.state.INC_RaisedOn,
            INC_ImpactedApplications: this.state.INC_ImpactedApplications,
            INC_Type: this.state.INC_Type,
            INC_Description: this.state.INC_Description,
            INC_AssignedTo: this.state.INC_AssignedTo,
            INC_Priority: this.state.INC_Priority,
            INC_Status: this.state.INC_Status,
            INC_ResolverGroup: this.state.INC_ResolverGroup,
            INC_RouteCause: this.state.INC_RouteCause
        }

        console.log(INCs);
        console.log('list of INC raised');
        axios.post('http://localhost:4000/incs/update/' + this.props.match.params.id, INCs)
            .then(res => console.log(res.data));

        this.props.history.push('/');




    } */

    render() {
        return (
           
            <div>
                   

                        <div style={{ marginTop: 10 }} class='scrollbar scrollbar-primary' style={{ 'max-height': 'calc(100vh - 210px)', 'overflow': 'auto' }}>
                <h3>Profile Details </h3>

                <Table striped bordered hover>
                    <tr>
                        <td>First Name </td>
                        <td><b>{this.state.FirstName}</b></td>
                    </tr>

                    <tr>
                        <td>Last Name: </td>
                        <td> {this.state.LastName}

                        </td>
                    </tr>

                    <tr>
                        <td>Gender:  </td>
                        <td> {this.state.Gender}

                        </td>
                    </tr>

                    <tr>
                        <td>Date of Birth:    </td>
                        <td> 
                        <Moment format='DD-MM-YYYY'>{this.state.CreatedOn}</Moment>
                        {}
                        </td>
                    </tr>


                    {/* <div className="form-group">
                        <label>Raised On: </label>
                        <input type="date"
                            className="form-control"
                            selected={this.state.INC_RaisedOn}
                            onChange={this.onChangeINCRaisedOn}
                            defaultValue={this.state.INC_RaisedOn} 
                        />
                    </div>  */}



                    {/* <div className="form-group">
                        <label>Impacted Application: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.INC_ImpactedApplications}
                            onChange={this.onChangeINCImpactedApplications}
                        />
                    </div> */}

                    <tr>
                        <td>Email Id:  </td>
                        <td>
                            {this.state.Email}
                        </td>
                    </tr>


                    <tr>
                        <td>User Name: </td>
                        <td>{this.state.UserName}

                        </td>
                    </tr>
                    
                    </Table>
                    </div>







                        




                    {/* <div className="form-group">
                        <label>Issue Current Status : </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.INC_Status}
                            onChange={this.onChangeINCStatus}
                        />
                    </div> */}

<Button variant="primary" href="/view">Go Back</Button>
</div>
               
        )
    }
}