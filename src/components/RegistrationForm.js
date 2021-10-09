import React, { useState, useEffect } from 'react';
import { Form, InputGroup, Button, Col } from 'react-bootstrap';

function RegistrationForm() {
	
    const [validated, setValidated] = useState(false);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [gender, setGender] = useState("");
	const [dob, setDob] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [fatherName, setFatherName] = useState("");
	const [motherName, setMotherName] = useState("");
	const [emgContNo, setEmgContNo] = useState("");
	const [emgContRel, setEmgContRel] = useState("");
	const [isValidated, setIsValidated] = useState(false);
  
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
	  if (form.checkValidity() === false) {
		  event.preventDefault();
		  event.stopPropagation();
		  setIsValidated(false);
		  sessionStorage.removeItem('successMsg', "Registration successfull :)");
	  } else {
		  setIsValidated(true);
	  }
      setValidated(true);
    };
	
	const handleChange = (event) => {
		if (event.target.id === "firstName") {
			setFirstName(event.target.value);
		}
		if (event.target.id === "lastName") {
			setLastName(event.target.value);
		}
		if (event.target.name === "gender") {
			setGender(event.target.value);
		}
		if (event.target.id === "dob") {
			setDob(event.target.value);
		}
		if (event.target.id === "email") {
			setEmail(event.target.value);
		}
		if (event.target.id === "phone") {
			setPhone(event.target.value);
		}
		if (event.target.id === "fatherName") {
			setFatherName(event.target.value);
		}
		if (event.target.id === "motherName") {
			setMotherName(event.target.value);
		}
		if (event.target.id === "emgContNo") {
			setEmgContNo(event.target.value);
		}
		if (event.target.id === "emgContRel") {
			setEmgContRel(event.target.value);
		}
	}
	
	useEffect(() => {
		if (isValidated &&
			firstName &&
			lastName &&
			gender &&
			dob &&
			email &&
			phone &&
			fatherName &&
			motherName &&
			emgContNo &&
			emgContRel
		) {
			var formData = {};
			Object.assign(formData, {
				firstName: firstName.trim(),
				lastName: lastName.trim(),
				gender: gender.trim(),
				dob: dob.trim(),
				email: email.trim(),
				phone: phone.trim(),
				fatherName: fatherName.trim(),
				motherName: motherName.trim(),
				emgContNo: emgContNo.trim(),
				emgContRel: emgContRel.trim()
			});
			localStorage.setItem('employeeData', JSON.stringify(formData));
			sessionStorage.setItem('successMsg', "Registration successfull :)");
			clearForm();
		}
	}, 
	[ isValidated, firstName, lastName, gender, dob, email, phone, fatherName, motherName, emgContNo, emgContRel ]);
	
	useEffect(() => {
		if (firstName ||
			lastName ||
			gender ||
			dob ||
			email ||
			phone ||
			fatherName ||
			motherName ||
			emgContNo ||
			emgContRel
		) {
			sessionStorage.removeItem('successMsg');
		}
	}, 
	[ firstName, lastName, gender, dob, email, phone, fatherName, motherName, emgContNo, emgContRel ]);
	
	const clearForm = () => {
		setFirstName("");
		setLastName("");
		setGender("");
		setDob("");
		setEmail("");
		setPhone("");
		setFatherName("");
		setMotherName("");
		setEmgContNo("");
		setEmgContRel("");
		setIsValidated(false);
	}
	
	localStorage.getItem('employeeData') ? console.log(JSON.parse(localStorage.getItem('employeeData'))) : console.log("Data not available");
  
    return (
        <div className="row mt-3">
            <div className="col-9 mx-auto">
			<div className="w-50 d-flex justify-content-start mb-3">
                <h5>Personal Information</h5>
            </div>
			{sessionStorage.getItem('successMsg') &&
				<p className="text-success">{sessionStorage.getItem('successMsg')}</p>
			}
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" as={Col} md="12">
                <div className="row">
                    <div className="col-3 d-flex justify-content-start">
                        <Form.Label>First Name*</Form.Label>
                    </div>
                    <div className="col-9">
                    <InputGroup hasValidation>
                        <Form.Control
							required
							type="text"
							placeholder="First Name"
							id="firstName"
							defaultValue=""
							onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">Please enter your first name!</Form.Control.Feedback>
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </InputGroup>
                    </div>
                </div>
            </Form.Group>
            <Form.Group className="mb-3" as={Col} md="12">
            <div className="row">
                <div className="col-3 d-flex justify-content-start">
                    <Form.Label>Last Name*</Form.Label>
                </div>
                <div className="col-9">
                <InputGroup hasValidation>
                    <Form.Control
                    required
                    type="text"
                    placeholder="Last Name"
					id="lastName"
					defaultValue=""
					onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">Please enter your last name!</Form.Control.Feedback>
					<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </InputGroup>
                </div>
            </div>
            </Form.Group>
            <Form.Group className="mb-3" as={Col} md="12">
            <div className="row">
                <div className="col-3 d-flex justify-content-start">
                    <Form.Label>Gender*</Form.Label>
                </div>
                <div className="col-9 d-flex justify-content-start">
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`}>
                        <Form.Check
                            required
                            inline
                            label="Male"
                            name="gender"
                            type={type}
                            id={`inline-${type}-1`}
							value={'Male'}
							onChange={handleChange}
                        />
                        <Form.Check
                            required
                            inline
                            label="Female"
                            name="gender"
                            type={type}
                            id={`inline-${type}-2`}
							value={'Female'}
							onChange={handleChange}
                        />
                        </div>
                    ))}
                </div>
            </div>
            </Form.Group>
			<Form.Group className="mb-3" as={Col} md="12">
            <div className="row">
                <div className="col-3 d-flex justify-content-start">
                    <Form.Label>Date of Birth*</Form.Label>
                </div>
                <div className="col-9">
                <InputGroup hasValidation>
                    <Form.Control
                    required
                    type="date"
					id="dob"
					defaultValue=""
					onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">Please enter your date of birth!</Form.Control.Feedback>
					<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </InputGroup>
                </div>
            </div>
            </Form.Group>
			<Form.Group className="mb-3" as={Col} md="12">
            <div className="row">
                <div className="col-3 d-flex justify-content-start">
                    <Form.Label>Personal Email*</Form.Label>
                </div>
                <div className="col-9">
                <InputGroup hasValidation>
                    <Form.Control
                    required
                    type="email"
					placeholder="Personal Email"
					id="email"
					defaultValue=""
					onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">Please enter your personal email!</Form.Control.Feedback>
					<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </InputGroup>
                </div>
            </div>
            </Form.Group>
			<Form.Group className="mb-3" as={Col} md="12">
            <div className="row">
                <div className="col-3 d-flex justify-content-start">
                    <Form.Label>Personal Phone*</Form.Label>
                </div>
                <div className="col-9">
                <InputGroup hasValidation>
                    <Form.Control
                    required
                    type="text"
					placeholder="Personal Phone"
					id="phone"
					defaultValue=""
					onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">Please enter your personal phone number!</Form.Control.Feedback>
					<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </InputGroup>
                </div>
            </div>
            </Form.Group>
			<Form.Group className="mb-3" as={Col} md="12">
            <div className="row">
                <div className="col-3 d-flex justify-content-start">
                    <Form.Label>Father's Name*</Form.Label>
                </div>
                <div className="col-9">
                <InputGroup hasValidation>
                    <Form.Control
                    required
                    type="text"
					placeholder="Father's Name"
					id="fatherName"
					defaultValue=""
					onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">Please enter your father's name!</Form.Control.Feedback>
					<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </InputGroup>
                </div>
            </div>
            </Form.Group>
			<Form.Group className="mb-3" as={Col} md="12">
            <div className="row">
                <div className="col-3 d-flex justify-content-start">
                    <Form.Label>Mother's Name*</Form.Label>
                </div>
                <div className="col-9">
                <InputGroup hasValidation>
                    <Form.Control
                    required
                    type="text"
					placeholder="Mother's Name"
					id="motherName"
					defaultValue=""
					onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">Please enter your mother's name!</Form.Control.Feedback>
					<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </InputGroup>
                </div>
            </div>
            </Form.Group>
			<Form.Group className="mb-3" as={Col} md="12">
            <div className="row">
                <div className="col-3 d-flex justify-content-start">
                    <Form.Label>Emergency Contact No.*</Form.Label>
                </div>
                <div className="col-9">
                <InputGroup hasValidation>
                    <Form.Control
                    required
                    type="text"
					placeholder="Emergency Contact No."
					id="emgContNo"
					defaultValue=""
					onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">Please enter your emergency contact no.!</Form.Control.Feedback>
					<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </InputGroup>
                </div>
            </div>
            </Form.Group>
			<Form.Group className="mb-3" as={Col} md="12">
            <div className="row">
                <div className="col-3 d-flex justify-content-start">
                    <Form.Label>Emergency Contact Relation*</Form.Label>
                </div>
                <div className="col-9">
                <InputGroup hasValidation>
                    <Form.Control
                    required
                    type="text"
					placeholder="Emergency Contact Relation"
					id="emgContRel"
					defaultValue=""
					onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">Please enter your emergency contact relation.!</Form.Control.Feedback>
					<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </InputGroup>
                </div>
            </div>
            </Form.Group>
            <Button className="mb-3" type="submit">Register</Button>
            </Form>
            </div>
        </div>
    );
  }

  export default RegistrationForm;