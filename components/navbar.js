import React from "react"
import {Input} from "antd"
import { SearchOutlined } from '@ant-design/icons';
export default function Navbar() {
    return (
        <><div className="background-banner">
            <div className="position-relative start-50 translate-middle-x" style={{width:'70%'}}>
             <Input prefix={<SearchOutlined className="site-form-item-icon" />} placeholder="Search" />

            </div>
        </div>
                {/* <img src="bg4.jpg" width={'100%'} height={'480'} style={{ objectFit: 'cover' }} /> */}
        </>
    )
}