interface ErrorMessageProp {
  message: string
}

export function ErrorMessage({ message }: ErrorMessageProp) {
  return (
    <div className="error_message">
      <p>{message}</p>
    </div>
  )
}