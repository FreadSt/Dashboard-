import React from 'react'

export const buttonVariants = {
  base: "global-btn-base inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  
  intent: {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500", 
    nav: "bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900",  
    outline: "border border-slate-300 bg-transparent hover:bg-slate-50 text-slate-900",
    danger: "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",
    ghost: 'bg-transparent text-primary'
  },
  
  size: {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4 py-2",
    lg: "h-11 px-8 text-lg",
    icon: "h-10 w-10",
  }
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  intent?: keyof typeof buttonVariants.intent;
  size?: keyof typeof buttonVariants.size;
}