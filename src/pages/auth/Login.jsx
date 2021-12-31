import React from 'react'
import { FlexboxGrid,Panel,Form,Button,ButtonToolbar } from 'rsuite';
import "./login.css"
const Login = () => {
    return (
        <FlexboxGrid className="auth-main " align="middle" justify="center">
            <FlexboxGrid.Item className="auth-form "  >
                <Panel className="login-container" header={<h3>Login</h3>} bordered>
                    <Form fluid>
                    <Form.Group>
                        <Form.ControlLabel>Username or email address</Form.ControlLabel>
                        <Form.Control name="name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.ControlLabel>Password</Form.ControlLabel>
                        <Form.Control name="password" type="password" autoComplete="off" />
                    </Form.Group>
                    <Form.Group>
                        <ButtonToolbar>
                        <Button appearance="primary">Sign in</Button>
                        <Button appearance="link">Forgot password?</Button>
                        </ButtonToolbar>
                    </Form.Group>
                    </Form>
                </Panel>
            </FlexboxGrid.Item>
        </FlexboxGrid>
    )
}

export default Login
