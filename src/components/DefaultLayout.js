import React from 'react'
import { Button } from 'antd';

const DefaultLayout = (props) => {
  return (
    <div>
        <div className="header box">
            <div className="d-flex justify-content-between">

                <h1>Richie Car Rentals</h1>
                <Button type="primary">Button</Button>

                
            </div>
        </div>
        <div className="content">
            {props.children}
        </div>

    </div>
  )
}

export default DefaultLayout