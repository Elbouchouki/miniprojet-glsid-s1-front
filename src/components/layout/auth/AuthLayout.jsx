import React from 'react'
import AuthNavbar from "./AuthNavbar"
import AuthFooter from './AuthFooter'
import BgImage from "../../../assets/images/login_bg.png"

// import "./auth.css"
const AuthLayout = (props) => {
    
    return (
                
        <>
            <AuthNavbar transparent />
            <main>
            <section className="relative w-full h-full py-40 min-h-screen">
                <div
                className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
                style={{
                    backgroundImage: `url(${BgImage})`,
                }}
                ></div>
                {props.children}
                <AuthFooter absolute />
            </section>
            </main>
        </>
    )
}

export default AuthLayout
