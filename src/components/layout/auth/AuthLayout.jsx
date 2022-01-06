import React from 'react'
import { Container, Header, Content,Nav,Dropdown, Footer, Navbar,FlexboxGrid,Panel,Form,Button,ButtonToolbar } from 'rsuite';
import "./auth.css"
import { FaHome,FaHammer } from "react-icons/fa";
import { Icon } from '@rsuite/icons';
import { Link } from 'react-router-dom';

const AuthLayout = (props) => {
    const MyLink = React.forwardRef((props, ref) => {
        const { href, as, ...rest } = props;
        return (
          <Link href={href} as={as}>
            {<a ref={ref} {...rest} />}
          </Link>
        );
      });
    return (
        <Container className="auth-container">
            <Header>
                <Navbar appearance="primary" className="auth-nav">
                   
                    <FlexboxGrid justify='space-between'>
                    <FlexboxGrid.Item>
                    <Navbar.Brand href="#">
                        VACCINATION
                    </Navbar.Brand>
                    </FlexboxGrid.Item>
                        <FlexboxGrid.Item>
                        <Nav >
                            <Nav.Item icon={<Icon as={FaHome} size="1.25em"/>} as={MyLink} href="/">
                                {" "}Acceuil
                            </Nav.Item>
                            <Nav.Item as={MyLink} href="/guide/introduction">
                                {" "}About
                            </Nav.Item>
                            <Nav.Item as={MyLink} href="/components/overview">
                                {" "}Contact
                            </Nav.Item>
                            <Nav.Item as={MyLink} href="/components/overview">
                                {" "}Contact
                            </Nav.Item>
                            </Nav>
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item>
                        <Nav pullRight>
                    </Nav>
                    </FlexboxGrid.Item>
                        {/* <Nav.Item icon={<Icon as={FaHammer} size="1.25em" />}>{" "}Settings</Nav.Item> */}
                        <div></div>
                    </FlexboxGrid>
                </Navbar>
            </Header>
            <Content>
                <div style={{height:60}}/>
                {props.children}
                <div style={{height:30}}/>

            </Content>
            <Footer  className="auth-footer">
                <FlexboxGrid align="bottom" justify="space-around">
                    <FlexboxGrid.Item colspan={10}>Vaccination @ GLSID</FlexboxGrid.Item>
                    <FlexboxGrid.Item colspan={10}></FlexboxGrid.Item>
                </FlexboxGrid>
            </Footer>
        </Container>
    )
}

export default AuthLayout
