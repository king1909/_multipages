import { useRef,useEffect } from 'react';
import { verifyUser } from '../../data/users';  // ตรวจสอบว่า verifyUser ทำงานถูกต้อง
import './Login.css';

import Form from 'react-bootstrap/Form';  // ใช้ react-bootstrap
import Button from 'react-bootstrap/Button';  // ใช้ Button จาก react-bootstrap

function Login({ setToken }) {

    const userRef = useRef();
    const passRef = useRef();

    const handleLogin = () => {
        const user = userRef.current.value.trim();
        const pass = passRef.current.value.trim();

        // ล้างค่าที่กรอก
        userRef.current.value = '';
        passRef.current.value = '';

        const userInfo = verifyUser(user, pass);

        if (userInfo === null) {
            alert('Wrong username or password');
            userRef.current.focus();
        } else {
            setToken(userInfo.token);
        }
    };


// ฟังก์ชันเช็คคีย์บอร์ด  
const checkKeyboard = (e) => {
    if (e.key === 'Enter'){
        handleLogin();
    }
}

useEffect(() => {
    window.addEventListener('keydown', checkKeyboard);
    return () => {
      window.removeEventListener('keydown', checkKeyboard);
    };
  }, []);

    return (
        <div className="login-container">
            <Form>
                <Form.Group controlId="username">
                    <Form.Label class="bi bi-person-vcard-fill" >&nbsp;Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Username"
                        ref={userRef}
                        style={{ textAlign: 'center' }}  // ใช้ textAlign ถูกต้อง
                    />
                </Form.Group>

                <Form.Group controlId="password" className="mt-2">
                    <Form.Label class="bi bi-key-fill" >&nbsp;Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter Password"
                        ref={passRef}
                        style={{ textAlign: 'center' }}
                    />
                </Form.Group>

                <Button
                    
                    className="btn btn-success mt-3"
                    type="button"  // เปลี่ยนจาก submit เป็น button เพราะเราไม่ใช้ form submit
                    onClick={handleLogin}
                >
                    <span class="bi bi-door-open">&nbsp;Login</span>
                    
                </Button>
                &nbsp;
                <Button
                    
                    className="btn btn-danger mt-3"
                    type="button"  // เปลี่ยนจาก submit เป็น button เพราะเราไม่ใช้ form submit
                    onClick={handleLogin}
                >
                    <span class="bi bi-x-square-fill">&nbsp;clear</span>
                    
                </Button>
            </Form>
        </div>
    );
}

export default Login;
