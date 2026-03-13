
interface AlertProps{
    tab: string
}

const Alert = ({tab}: AlertProps) => {
  return (
    <div className="alert alert-warning" role="alert">
        <div>
            The {tab} tab is not ready yet!
        </div>
    </div>
  )
}

export default Alert
