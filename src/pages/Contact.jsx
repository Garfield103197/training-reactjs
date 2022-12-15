import avatar from "../assets/images/avatar.jpg";
import { useState } from "react";

const mystyle = {
    width: "300px",
    height: "300px",
    border: "1px solid",
    borderRadius: "10px",
    marginRight: "15px"
};


const myInfo = {
    fullName: "Bùi Thành",
    age: 26,
    gender: 'Nam',
    address: 'Hà Nội, Việt Nam',
    email: 'thanhbd@vissoft.vn',
    phone: "0961235100"
}




const Contact = () => {
    const [hide, setHide] = useState(false);
    const toggleHide = () => {
        setHide(!hide);
        console.log(hide)
    };
    return (
        <>
            <h1>Hello go to Contact</h1>
            <div style={{display: 'flex'}}>
                <img style={mystyle} src={avatar} alt=""/>
                <div>
                    <button onClick={() => toggleHide()}>Show/Hide Infomation</button>
                    <div style={{ display: hide ? "block" : "none" }} id="my-info">
                        <h2>Họ và tên: {myInfo.fullName}</h2>
                        <h2>Giới tính: {myInfo.gender}</h2>
                        <h2>Địa chỉ: {myInfo.address}</h2>
                        <h2>SĐT: {myInfo.phone}</h2>
                        <button>Call Me</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;