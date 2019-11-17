import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { Form, Container, Button } from 'react-bootstrap';
import Moment from 'react-moment';

export default class LoginPage extends Component {

    constructor(props) {
        super(props);
        var date = new Date();
        

        this.onChangeINCSubject = this.onChangeINCSubject.bind(this);
        this.onChangeINCRaisedOn = this.onChangeINCRaisedOn.bind(this);
        this.onChangeINCUpdatedOn = this.onChangeINCUpdatedOn.bind(this);
        this.onChangeINCImpactedApplications = this.onChangeINCImpactedApplications.bind(this);
        this.onChangeINCType = this.onChangeINCType.bind(this);
        this.onChangeINCDescription = this.onChangeINCDescription.bind(this);
        this.onChangeINCAssignedTo = this.onChangeINCAssignedTo.bind(this);
        this.onChangeINCPriority = this.onChangeINCPriority.bind(this);
        //this.onChangeINCStatus = this.onChangeINCStatus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            INC_Subject: '',
            INC_RaisedOn: new Date(),
            INC_ImpactedApplications: '',
            INC_Type: '',
            INC_Description: '',
            INC_AssignedTo: '',
            INC_Priority: '',
            INC_Status: 'Active',
            INC_Number: 'INCREF',
            count:'',
            INC_UpdatedOn: new Date()
        }
        
    }

    onChangeINCSubject(e) {
        this.setState({
            INC_Subject: e.target.value
        });
    }

    onChangeINCRaisedOn(e) {
        console.log(`INC Raised Date: ${this.state.INC_RaisedOn} `+ e.target.value);
        this.setState({
            INC_RaisedOn: e.target.value
        });
    }
    onChangeINCUpdatedOn(e) {
        console.log(`INC Raised Date: ${this.state.INC_UpdatedOn} `+ e.target.value);
        this.setState({
            INC_UpdatedOn: e.target.value
        });
    }

      /* onChangeINCRaisedOn = date => {
 
         console.log(`INC Raised Date: ${this.state.INC_RaisedOn} `+ 'e');
         this.setState({
             INC_RaisedOn: date
         });
     }  */
    onChangeINCImpactedApplications(e) {
        console.log('inside onchane impacted applications'+ e.target.value)
        this.setState({
            INC_ImpactedApplications: e.target.value
        });
    }
    onChangeINCType(e) {
        this.setState({
            INC_Type: e.target.value
        });
    }

    onChangeINCDescription(e) {
        this.setState({
            INC_Description: e.target.value
        });
    }
    onChangeINCAssignedTo(e) {
        this.setState({
            INC_AssignedTo: e.target.value
        });
    }
    /* onChangeINCStatus(e) {
        
        this.setState({
            INC_Status: 'Active'
        });
    } */

    onChangeINCPriority(e) {
        this.setState({
            INC_Priority: e.target.value
        });
    }

    componentDidMount() {
        axios.get('http://18.188.23.67:4000/incs/count')
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
        console.log(`INC Priority: ${this.state.INC_Status}`);
        console.log(`INC Priority: ${this.state.INC_ImpactedApplications}`);
        console.log(`INC Priority: ${this.state.INC_AssignedTo}`);
        console.log(`INC Priority: ${this.state.INC_Priority}`);

        const INCs = {
            INC_Number : this.state.INC_Number+this.state.count,
            INC_Subject: this.state.INC_Subject,
            INC_RaisedOn:  this.state.INC_RaisedOn ,
            INC_ImpactedApplications: this.state.INC_ImpactedApplications,
            INC_Type: this.state.INC_Type,
            INC_Description: this.state.INC_Description,
            INC_AssignedTo: this.state.INC_AssignedTo,
            INC_Priority: this.state.INC_Priority,
            INC_Status: this.state.INC_Status,
            INC_UpdatedOn: this.state.INC_UpdatedOn
        }


        axios.post('http://18.188.23.67:4000/incs/add', INCs)
            .then(res => console.log(res.data));

            this.props.history.push('/');
            
        this.setState({
            INC_Subject: '',
            INC_RaisedOn: new Date(),
            INC_ImpactedApplications: '',
            INC_Type: '',
            INC_Description: '',
            INC_AssignedTo: '',
            INC_Priority: '',
            INC_Status: 'Active',
            INC_Number: 'INCREF',
            INC_UpdatedOn: new Date()
        })


    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>New Incident Portal </h3>
                <form onSubmit={this.onSubmit}>

                

                    <div className="form-group">
                        <label>Username </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.FName}
                            onChange={this.onChangeFName} required
                        />
                    </div>

                    <div className="form-group">
                        <label>Password </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.LName}
                            onChange={this.onChangeLName} required
                        />
                    </div>

                    

                    <div className="form-group">
                        <input type="submit" value="Login" className="btn btn-success" />

                        <Button value="Sign Up" href="/Signup" className="btn btn-primary" >Sign Up</Button>
                    </div>
                </form>
            </div>
        )
    }
}

