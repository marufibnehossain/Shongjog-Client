import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-colors outline-none select-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-3 focus-visible:ring-primary/20",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white hover:bg-primary-hover",

        outline:
          "border border-stroke bg-surface text-heading hover:bg-background",

        destructive:
          "bg-danger text-white hover:bg-danger/90",

        ghost:
          "text-text hover:bg-background hover:text-heading",
      },

      size: {
        default: "h-11 px-4",

        sm: "h-9 px-3 text-sm",

        lg: "h-12 px-6 text-base",

        icon: "size-10",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props &
  VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(
        buttonVariants({
          variant,
          size,
        }),
        className
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };