import Header from "@/components/Header";
import { SignIn } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import React from "react";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
    const user = await currentUser();
    if (!user)
        return (
            <main className="flex flex-col items-center p-5 gap-10">
                <section className="flex items-center">
                    <Image src="/Scholar.png" height={100} width={100} alt='logo' className='rounded-full' fetchPriority="auto" />
                </section>
                <div className="mt-3">
                    <SignIn routing="hash" />
                </div>
            </main>
        )
    return (
        <>
            <Header />
            <main className="flex flex-1 flex-col px-4 pt-10 xl:px-8 animate-fade-in">
                {children}
            </main>
        </>
    )
}

export default MainLayout;