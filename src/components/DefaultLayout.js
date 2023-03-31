import React from 'react'

const DefaultLayout = (props) => {
  return (
    <div>
        <div className="header box">
            <div className="d-flex justify-content-between">

                <h1>Richie Car Rentals</h1>

                {/* <button>user</button> */}
            </div>
        </div>
        <div className="content">
            {props.children}
        </div>

    </div>
  )
}

export default DefaultLayout