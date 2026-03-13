import type { ReactNode } from "react"

interface CardProps{
    title: string
    text: ReactNode

}
const Card = ({title, text}: CardProps) => {
  return (
    <div className="card">
    <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="card-text">{text}</div>
    </div>
    </div>
  )
}

export default Card
