import type { ReactNode } from "react"

interface ToolTipProps{
    message: string
    children: ReactNode
}

const ToolTip = ({message, children}: ToolTipProps) => {
  return (
    <div className="tooltip-wrapper" title={message}>
      {children}
    </div>
  )
}

export default ToolTip
