import mylogo from '../assets/mylogo.png'
import ListGroup from './ListGroup'

interface NavBarProps {
  items: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const NavBar = ({ items, activeTab, setActiveTab }: NavBarProps) => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <span className="navbar-brand">
          <img
            src={mylogo}
            alt="Daniela Ojeda logo"
            className="brand-logo"
          />
          <span className="brand-name">Daniela Ojeda</span>
        </span>

        <ListGroup
          items={items}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
    </nav>
  )
}

export default NavBar