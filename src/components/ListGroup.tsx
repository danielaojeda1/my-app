
interface ListGroupProps {
  items: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const ListGroup = ({items, activeTab, setActiveTab}: ListGroupProps) => {
  return (
    <div className="list-group">
        {items.map((item) => (
        <button
        type="button"
        className={`list-group-item list-group-item-action${activeTab === item ? " active" : ""}`}
        key={item}
        onClick={() => setActiveTab(item)}>
        {item}
        </button>
    ))}
    </div>
  )
}

export default ListGroup
