import { useState } from 'react'
import './styles/style.scss'
import Input from "./components/input.tsx";
import Button from "./components/button.tsx";
import MyButton from "./components/UI/button/MyButton.tsx";
import MyInput from "./components/UI/input/MyInput.tsx";

function App() {
    return (
        <div className="wrapper">
            <div className="login__container">
                <MyInput input={{id: 'user-name',placeholder: 'UserName', imgSrc: 'src/assets/User.svg'}}/>
                <MyInput input={{id: 'user-password',placeholder: 'UserPassword', imgSrc: 'src/assets/lock.svg'}}/>
                <MyButton disabled>Login</MyButton>
            </div>
        </div>
    )
}
export default App
