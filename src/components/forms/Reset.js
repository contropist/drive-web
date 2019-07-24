import React from 'react';
import { Container } from 'react-bootstrap';
import './Login.css';
import './Reset.css';
import { Form, Col, Button } from 'react-bootstrap';
import NavigationBar from './../navigationBar/NavigationBar'
import { encryptText, passToHash, decryptText, encryptTextWithKey } from './../../utils'
import history from '../../history'

class Reset extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            token: this.props.match.params.token,
            isValidToken: true,
            salt: null,

            currentPassword: '',
            newPassword: '',
            confirmNewPassword: ''
        };
    }

    IsValidToken = (token) => {
        return /^[a-z0-9]{512}$/.test(token) && this.state.isValidToken;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    isLoggedIn = () => {
        return !(!localStorage.xToken);
    }

    handleChangePassword = (e) => {
        e.preventDefault();

        if (!this.state.salt) {
            return alert('Internal server error. Please reload.');
        }

        if (!this.validateForm()) {
            return alert('Passwords do not match.');
        }

        // Encrypt the password
        var hashedCurrentPassword = passToHash({ password: this.state.currentPassword, salt: this.state.salt }).hash;
        var encryptedCurrentPassword = encryptText(hashedCurrentPassword);

        // Encrypt the new password
        var hashedNewPassword = passToHash({ password: this.state.newPassword });
        var encryptedNewPassword = encryptText(hashedNewPassword.hash);
        var encryptedNewSalt = encryptText(hashedNewPassword.salt);

        // Encrypt the mnemonic
        var encryptedMnemonic = encryptTextWithKey(localStorage.xMnemonic, this.state.newPassword);

        var headers = this.setHeaders();

        fetch('/api/user/password', {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify({
                currentPassword: encryptedCurrentPassword,
                newPassword: encryptedNewPassword,
                newSalt: encryptedNewSalt,
                mnemonic: encryptedMnemonic
            })
        })
            .then(async res => {
                var data = await res.json();
                return { res, data };
            })
            .then(res => {
                if (res.res.status !== 200) {
                    console.log(res);
                    throw res.data.error;
                } else {
                    alert("Password changed successfully.");
                }
            })
            .catch(err => {
                alert(err);
            });
    }

    componentDidMount() {
        if (!this.isLoggedIn()) {
            history.push('/login');
        }

        var headers = this.setHeaders();

        var localStg = JSON.parse(localStorage.xUser);

        fetch("/api/login", {
            method: "post",
            headers,
            body: JSON.stringify({ email: localStg.email })
        })
            .then(res => res.json())
            .then(res => {
                this.setState({ salt: decryptText(res.sKey) });
            }).catch(err => {
                alert('Error:\n' + (err.error ? err.error : 'Internal server error'));
            });
    }

    setHeaders = () => {
        let headers = {
            Authorization: `Bearer ${localStorage.getItem("xToken")}`,
            "content-type": "application/json; charset=utf-8",
            "internxt-mnemonic": localStorage.getItem("xMnemonic")
        }
        return headers;
    }


    validateForm = () => {
        return this.state.newPassword === this.state.confirmNewPassword;
    }

    render() {
        return <div>
            <NavigationBar navbarItems={<h5>Settings</h5>} />
            <Container className="login-main">
                <Container className="login-container-box edit-password-box">
                    <div className="container-register">
                        <p className="container-title edit-password">Change your password</p>

                        <Form className="form-register" onSubmit={this.handleChangePassword} >
                            <Form.Row>
                                <Form.Group as={Col} controlId="currentPassword">
                                    <Form.Control xs={12} placeholder="Current password" required type="password" name="current-password" value={this.state.currentPassword} onChange={this.handleChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="newPassword">
                                    <Form.Control xs={12} placeholder="New password" required type="password" name="new-password" value={this.state.newPassword} onChange={this.handleChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="confirmNewPassword">
                                    <Form.Control xs={12} placeholder="Confirm new password" required type="password" name="confirm-new-password" value={this.state.confirmNewPassword} onChange={this.handleChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row className="form-register-submit">
                                <Form.Group as={Col}>
                                    <Button className="on btn-block" xs={12} type="submit">Change password</Button>
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    </div>
                </Container>
            </Container>
        </div>;
    }
}

export default Reset;
