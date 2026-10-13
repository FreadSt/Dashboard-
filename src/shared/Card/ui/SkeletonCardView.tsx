import { cn } from "@/utils/utils"

interface SkeletonProps {
  classname?: string
  withTitle?: boolean
  withButtons?: boolean
}

export const SekeletonCard = ({...props}: SkeletonProps) => {
  return (
    <div className={cn('border p-4 animate-pulse flex flex-col gap-3', props.classname)}>
      {props.withTitle && <div className="h-2.5 w-full animate-pulse bg-(--accent)"/>}
      <div className="h-15 w-full bg-(--accent) "/>
      {props.withButtons && <div className="h-2.5 w-1/3 animate-pulse bg-(--accent)"/>}
    </div>
  )
}