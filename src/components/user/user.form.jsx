import { Button, Input } from "antd"
import { useState } from "react"
// import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const UserForm = () => {
    const [fullName, setFullName] = useState("Horashi Dev")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState('')

    console.log("Check form", fullName, email, password, phone);
    

    return (
        <div className="user-form" style={{margin: "20px 0"}}>
            <div style={{display: "flex", gap: "20px", flexDirection: "column"}}>
                <div>
                    <span>FullName</span>
                    <Input
                    value={fullName}
                    onChange={() => {setFullName(event.target.value)}}
                    />
                </div>
                <div>
                    <span>Email</span>
                    <Input
                    value={email}
                    onChange={() => {setEmail(event.target.value)}}
                    />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password
                        // placeholder="input password"
                        // iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        value={password}
                    onChange={() => {setPassword(event.target.value)}}
                    />
                </div>
                <div>
                    <span>Phone</span>
                    <Input
                    value={phone}
                    onChange={() => {setPhone(event.target.value)}}
                    />
                </div>
                <div>
                    <Button type="primary">Create User</Button>
                </div>
            </div>
        </div>
    )
}

export default UserForm