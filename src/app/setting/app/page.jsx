import Link from "next/link"

const appSettings = () => {
    return (
        <div className="flex flex-col" >
            <h1 >App Settings</h1>
            <Link href={"/setting/user"} >User</Link>
            <Link href={"/setting/color"} >Color Checker</Link>
            <Link href={"/setting/function"} >Function Test Settings</Link>
        </div>
    )
}

export default appSettings