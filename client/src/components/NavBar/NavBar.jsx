import { NavLink } from "react-router-dom";
import styles from './NavBar.module.scss';

const navLinkClasses = ({ isActive }) => {
    return isActive ? `${styles.link} ${styles.active_link}` : styles.link;
  };

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <NavLink className={navLinkClasses} to="/">
                Employee List
            </NavLink>
            <NavLink className={navLinkClasses} to="/add-employee">
                Add Employee
            </NavLink>
        </nav>
    );
}

