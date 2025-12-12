import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const linkButtonVariants = cva(
    "inline-flex items-center justify-center font-semibold rounded-lg transition duration-300",
    {
        variants: {
            variant: {
                default:
                    "bg-black dark:bg-sky-500 text-white shadow-lg hover:bg-gray-900 dark:hover:bg-sky-600 transform hover:scale-105",
                outline:
                    "border border-black text-black hover:bg-gray-100 dark:border-sky-500 dark:text-sky-400 dark:hover:bg-sky-500/10",
            },
            size: {
                default: "px-6 py-3",
                sm: "px-4 py-2 text-sm",
                lg: "px-8 py-4 text-md",
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
    href?: string;
}

export function LinkButton({ href = "#", variant, size, className, ...props }: LinkButtonProps) {
    return (
        <Link
            href={href}
            className={cn(linkButtonVariants({ variant, size }), className)}
            {...props}
        />
    );
}
