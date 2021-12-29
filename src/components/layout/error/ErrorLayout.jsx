import React from 'react'

const ErrorLayout = (props) => {
    
    return (
        <div >
          <div>Layout error</div>
                    {props.children}
        </div>
    )
}

export default ErrorLayout
