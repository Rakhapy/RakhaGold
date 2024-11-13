"use client"
import React, { useState } from "react";


const functionSettings = () => {
    
    const [alert, setAlert] = useState("");
    const handleAlert = (e) => {
        setAlert(e.target.value);
    }
    
    const handleLogin = () => {
        confirm("Are you sure to login as " + alert + "?");
    }

    return (
        <div> 
            <header className="flex flex-col justify-center items-center" >
            <h1>Function Settings</h1>
            </header>

        <section className="my-[3rem] mx-6 rounded-xl shadow-xl h-auto p-4 w-auto bg-[--text] flex flex-col justify-center items-center " >
            <h2>Alert</h2>
            <br />
            <input maxLength={20} onChange={handleAlert} className="bg-[--background] rounded-md p-1 outline-none focus:outline-[var(--high)] duration-150 " type="text" />
            <h2>Login as: {alert}</h2>
            {
                alert ? 
                <>
                <button onClick={handleLogin}  className="my-4 px-2 ">login</button>
                </>
                :
                null
            }
        </section>

        </div>
    )
}

export default functionSettings