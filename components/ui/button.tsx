import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const linkButtonVariants = cva(
    "inline-flex items-center justify-center font-semibold rounded-lg transition duration-300",
    {
        variants: {
            variant: {
                default:
                    "bg-sky-500 text-white shadow-lg hover:bg-sky-600 transform hover:scale-105",
                outline:
                    "border border-sky-500 text-sky-400 hover:bg-sky-500/10",
            },
            size: {
                default: "px-6 py-3",
                sm: "px-4 py-2 text-sm",
                lg: "px-8 py-4 text-lg",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

interface LinkButtonProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkButtonVariants> {
    href: string;
}

export function LinkButton({ href, variant, size, className, ...props }: LinkButtonProps) {
    return (
        <Link
            href={href}
            className={cn(linkButtonVariants({ variant, size }), className)}
            {...props}
        />
    );
}
