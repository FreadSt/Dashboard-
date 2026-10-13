import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "../../utils/utils";
import { textVariants, type TextColor, type TextVariant } from "./styles";

type TextProps<T extends ElementType> = {
  as?: T;
  variant?: TextVariant;
  color?: TextColor;
  className?: string;
  align?: 'center' | 'left' | 'right'
} & Omit<ComponentPropsWithoutRef<T>, "as" | "color" | "className" | "align">;

/** Typography primitive; its semantic element and visual style can be chosen independently. */
export function Text<T extends ElementType = "span">({
  as,
  variant = "body",
  color = "default",
  align,
  className,
  ...props
}: TextProps<T>) {
  const Component = as ?? "span";

  return (
    <Component
      className={cn("app-text", align && `text-${align}`, textVariants.variant[variant], textVariants.color[color], className)}
      {...props}
    />
  );
}
