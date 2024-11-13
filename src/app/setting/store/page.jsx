"use client "
import { useRouter } from "next/router"

const store = () => {
const router = useRouter();
console.log(router);

    return (
        <div>store</div>
    )
}

export default store