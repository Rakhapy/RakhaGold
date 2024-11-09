"use client"
const About = () => {
    const nama = localStorage.getItem("name");
    const umur = localStorage.getItem("age");
    return (
        <>
            <h1>About you</h1>
            {nama ? 
            <>
            <h2>Aloo {nama}</h2>
            <h2>Your age is {umur}</h2>
            </>
            :
            <h2>You Should <a href="/setting/user">Login!</a></h2>}
            
        </>
    );
}

export default About