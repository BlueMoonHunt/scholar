import { SignUp } from "@clerk/nextjs";
import Image from "next/image";


const SignupPage = () => {
    return (
        <main className="flex flex-col items-center p-5 gap-10">
            <section className="flex items-center">
                <Image src="/Scholar.png" height={100} width={100} alt='logo' className='rounded-full' fetchPriority="auto" />
            </section>
            <div className="mt-3">
                <SignUp />
            </div>
        </main>
    )
}

export default SignupPage;