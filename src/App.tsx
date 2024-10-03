import { useState } from 'react'
import './styles/style.scss'
import Input from "./components/input.tsx";
import Button from "./components/button.tsx";


function App() {
    return (
        <div className="min-h-full flex flex-col items-center justify-center overflow-clip h-screen">
            <div className="flex flex-col items-center gap-[20px]">
                <img src="src/assets/card.svg" alt="" className="mb-[51px]"/>
                <Input input={{id: 'user-name',placeholder: 'UserName', imgSrc: './src/assets/User.svg'}}/>
                <Input input={{id: 'user-password',placeholder: 'UserPassword', imgSrc: './src/assets/lock.svg'}}/>
                <Button customClass={`font-semibold text-blue  mt-[23px] hover:text-white hover:bg-blue hover:shadow-button w-full bg-white shadow-button rounded-[4px] h-[45px] flex items-center justify-center transition duration-300`}>Login</Button>
                <Button customClass={`font-medium text-white -mt-[9px] hover:underline w-full h-[20px] text-right`}>Forgot password?</Button>
            </div>
        </div>
    )
}
export default App
