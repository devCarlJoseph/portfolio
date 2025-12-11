"use client"

import { LightRays } from "@/components/ui/light-rays"

export default function FullPageLightRays() {
    return (
        <>
            <LightRays
                className="fixed inset-0 -z-10"
                theme="coolBlue"
                blur={40}
                speed={16}
                length="100vh"
            />

            <div className="fixed inset-0 -z-5 bg-black/10 pointer-events-none" />
        </>
    )
}
