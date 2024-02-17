import '../styles/nav.css';
import { IoMenu } from "react-icons/io5";

function MainNav(props) {
    const { message, buttonText, onClick } = props; // Destructure props
  
    return (
        <nav className='main-nav'>
            <h3 className='nav-title'>Todo List</h3>
        </nav>
    );
  }
  
  export default MainNav;