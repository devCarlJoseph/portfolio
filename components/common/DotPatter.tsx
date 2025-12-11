"use client"

import { cn } from "@/lib/utils"
import DotPattern from "@/components/ui/dot-pattern"

export default function DotPatter({ className = "" }: { className?: string }) {
    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <DotPattern
                glow={true}
                className={cn(
          "w-full mask-[radial-gradient(300px_circle_at_center,white)]"
        )}
            />
        </div>
    )
}
