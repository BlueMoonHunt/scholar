import React from "react";

const HomeLayout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="flex min-h-screen flex-1 flex-col">
            <div className="w-full">
                {children}
            </div>
        </section>
    )
}

export default HomeLayout;