import React from 'react'
import { Container, Header, Placeholder, Content, Nav, Dropdown, Footer, Navbar, FlexboxGrid, Panel, Form, Button, ButtonToolbar, Divider } from 'rsuite';
import "./landing.css"
import { FaHome,FaHammer } from "react-icons/fa";
import { Icon } from '@rsuite/icons';
import { Link } from 'react-router-dom';

const LandingLayout = (props) => {
    const MyLink = React.forwardRef((props, ref) => {
        const { href, as, ...rest } = props;
        return (
          <Link href={href} as={as}>
            <a ref={ref} {...rest} />
          </Link>
        );
      });
      const { Paragraph } = Placeholder;
    return (
        <Container className="landing-container">
            <Header>
                <Navbar appearance="primary" className="landing-nav">
                   
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
                          <FlexboxGrid style={{margin:10}}>
                            <FlexboxGrid.Item >
                                <Button color="cyan" appearance="primary">
                                Login
                                </Button> 
                            </FlexboxGrid.Item>
                            <FlexboxGrid.Item >
                                 <div style={{width:5}} ></div>
                            </FlexboxGrid.Item>
                            <FlexboxGrid.Item >
                                <Button color="cyan" appearance="primary">
                                Signup
                                </Button> 
                            </FlexboxGrid.Item>
                          </FlexboxGrid>
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                    
                  
                </Navbar>
            </Header>
            <Content>
                {props.children}
            </Content>
            <Footer  className="landing-footer">
                <FlexboxGrid className='landing-footer-main' align="bottom" justify="space-around">
                    <FlexboxGrid.Item colspan={5}>
                    asdasdasdasd

                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item colspan={5}>
                    asdasdasdas<br/>
                    asdasdasdasd <br/>
                   
                        
                        
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item colspan={5}>
                    asdasdasdas<br/>
                    asdasdasdasd
                        
                    </FlexboxGrid.Item>
                   
                </FlexboxGrid>
            </Footer>
        </Container>
    )
}

export default LandingLayout
