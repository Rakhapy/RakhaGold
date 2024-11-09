"use client"
import React, { useState } from "react";
const userSettings = () => {
    const [nama, setNama] = useState("Namamu");
    const [age, setAge] = useState(0);
    const val = localStorage.getItem("name");
    const handleName = (e) => {
        setNama(e.target.value);
    }

    const handleAge = (e) => {
        setAge(e.target.value);
    }

    return (
        <div className="flex w-[30%] flex-col gap-3" > 
            <h1>Users Settings</h1>
            {val ? 
            <>
            <h2>Your Name is {val}</h2>
            <button onClick={() => localStorage.clear()} >Log out</button>
            </>
            :
            <>
            <input onChange={handleName} type="text" placeholder="Your Name? " />
            <input onChange={handleAge} type="text" inputMode="numeric" placeholder="Your Age?" />
            <button onClick={() => {
                localStorage.setItem("name", nama);
                localStorage.setItem("age", age);
            }
            } className="bg-green-500 text-white px-2" >Save</button>
            </>}
        </div>
    )
}

export default userSettings