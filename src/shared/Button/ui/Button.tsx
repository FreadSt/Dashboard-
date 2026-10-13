import React from "react";
import { cn } from "../../../utils/utils";
import { type ButtonProps, buttonVariants } from "../model/styles";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { 
      className, 
      intent = "primary", 
      size = "md", 
      type = "button",
      ...props 
    }, 
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          // Pass base styles
          buttonVariants.base,
          // Apply conditional palette styles via clsx logic inside cn
          buttonVariants.intent[intent],
          buttonVariants.size[size],
          // Ensure className prop overrides take final precedence 
          className
        )}
        {...props}
      />
    );
  }
);