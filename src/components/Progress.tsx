import ToolTip from "./ToolTip"

interface ProgressProps {
  percentage: number
}

const Progress = ({ percentage }: ProgressProps) => {
  return (
    <ToolTip message={`${percentage}% completed`}>
      <div
        className="progress"
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          style={{ width: percentage + "%" }}
        ></div>
      </div>
    </ToolTip>
  )
}

export default Progress