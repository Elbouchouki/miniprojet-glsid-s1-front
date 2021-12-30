import React from 'react'
import FooterLanding from './FooterLanding'
const LandingLayout = (props) => {
    


    return (
        <div >
          <div>Layout Landing</div>
                    {props.children}
            <FooterLanding/>
        </div>
    )
}

export default LandingLayout
