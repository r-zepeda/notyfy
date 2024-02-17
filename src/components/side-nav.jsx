import '../styles/nav.css';
import { IoMenu } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";

var isCollapsed = true;

function CollapseSideNav() {
  const sideNav = document.querySelector(".sidenav");


  if (isCollapsed) {
    isCollapsed = false;
    sideNav.classList.remove("collapsed");
  }
  else {
    isCollapsed = true;
    sideNav.classList.add("collapsed");
  }
}

function CreateNewPage() {

}


function SideNav(props) {
    const { message, buttonText, onClick } = props; // Destructure props
  
    return (
        <nav className='sidenav'>
          <div className="nav-header">
            <button onClick={CollapseSideNav} className='nav-burger'>
              <IoMenu className='menu-icon'/>
            </button>
            <h3 className='nav-title'>Ralph's Notebook</h3>
          </div>

          <div className='sidenav-controls'>
            <button className='new-page' onClick={CreateNewPage}><FiPlus className='plus-icon'/><span className='new-page-text'>New Page</span></button>
            <div className='sidenav-pages'>
              <p className='pages-title'>Pages</p>
              <div className='pages'>
                <IoIosArrowForward /><p>Todo List</p>
              </div>
              <div className='pages'>
                <IoIosArrowForward />
                <p>Shopping</p>
              </div>
            </div>
          </div>
        </nav>
    );
  }
  
  export default SideNav;