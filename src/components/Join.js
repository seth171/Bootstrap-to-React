import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

class Join extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="join-body">
                    <div className="container">
                        <div className="row">
                            <h5>Welcome, if you would like to join please fill out the form below. We also want to know more about you.</h5>
                            <div className="col-md-10">
                                <Form>
                                    <FormGroup>
                                        <Label for="firstName">First Name</Label>
                                        <Input type="text" id="firstName" name="firstName" placeholder="First Name"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="lastName">Last Name</Label>
                                        <Input type="text" id="lastName" name="lastName" placeholder="Last Name"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <h6>Gender:</h6>
                                    </FormGroup>
                                    <FormGroup>
                                        <div className="form-check form-check-inline">
                                            <Label for="male" className="genderRadio">Male</Label>
                                            <Input type="radio" id="male" name="genderRadios" value="male" />
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <Label for="female" className="genderRadio">Female</Label>
                                            <Input type="radio" id="female" name="genderRadios" value="female" />
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <Label for="other" className="genderRadio">Other</Label>
                                            <Input type="radio" id="other" name="genderRadios" value="other" />
                                        </div>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="dob">Date of Birth</Label>
                                        <Input type="date" id="dob" name="dob" placeholder="date"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="phone">Contact Tel.</Label>
                                        <Input type="tel" id="phone" name="phone" placeholder="Tel. number"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input type="email" id="email" name="femail" placeholder="Email"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <h6>May We Contact You?</h6>
                                    </FormGroup>
                                    <FormGroup>
                                        <div className="form-check form-check-inline">
                                            <Label for="yes" className="contactRadio">Yes</Label>
                                            <Input type="radio" id="yes" name="genderRadios" value="yes" />
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <Label for="no" className="contactRadio">No</Label>
                                            <Input type="radio" id="no" name="genderRadios" value="no" />
                                        </div>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="feedback">A little about yourself...</Label>
                                        <Input type="textarea" id="feedback" name="feedback" rows="12"></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <button type="submit" className="btn btn-primary">Join Us</button>
                                    </FormGroup>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Join;