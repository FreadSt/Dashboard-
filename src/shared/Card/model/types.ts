export interface CardWidgetProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  isLoading?: boolean | null
  error?: string | null | Error
}