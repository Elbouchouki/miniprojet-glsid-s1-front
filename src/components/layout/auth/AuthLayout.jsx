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
            <a ref={ref} {...rest} />
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
                             {" "}Home
                        </Nav.Item>
                        <Nav.Item as={MyLink} href="/guide/introduction">
                            {" "}Guide
                        </Nav.Item>
                        <Nav.Item as={MyLink} href="/components/overview">
                        {" "}Components
                        </Nav.Item>
                        <Nav.Item as={MyLink} href="/resources/palette">
                        {" "}Resources
                        </Nav.Item>
                        <Nav.Item as={MyLink} href="/resources/palette">
                        {" "}Resources
                        </Nav.Item>
                    </Nav>
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item>
                        <Nav pullRight>
                        <Nav.Item icon={<Icon as={FaHammer} size="1.25em" />}>{" "}Settings</Nav.Item>
                    </Nav>
                    </FlexboxGrid.Item>
                    </FlexboxGrid>
                    
                  
                </Navbar>
            </Header>
            <Content>
                {props.children}
            </Content>
            <Footer  className="auth-footer">
                <FlexboxGrid align="bottom" justify="space-around">
                    <FlexboxGrid.Item colspan={5}>Vaccination</FlexboxGrid.Item>
                    <FlexboxGrid.Item colspan={5}>colspan={6}</FlexboxGrid.Item>
                    <FlexboxGrid.Item colspan={5}>colspan={6}</FlexboxGrid.Item>
                    <FlexboxGrid.Item colspan={5}>colspan={6}</FlexboxGrid.Item>
                </FlexboxGrid>
            </Footer>
        </Container>
    )
}

export default AuthLayout
