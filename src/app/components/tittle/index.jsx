const Tittle = () => {
return(
    <>
    
        <header className="flex flex-col justify-center items-center min-h-screen gap-1" >
        <h1 className="text-5xl select-none drop-shadow-lg font-bold">How About <a href="#title" className="text-[var(--high)] cursor-pointer hover:text-[var(--highligt)] duration-300 " >You?</a></h1>
        <h2>Nayla Jasmine</h2>
        </header>

        <section className="flex flex-col justify-center items-center">
            <div id="title" className="title">
            <h1>About You</h1>
            </div>
        </section>

    </>
)}

export default Tittle