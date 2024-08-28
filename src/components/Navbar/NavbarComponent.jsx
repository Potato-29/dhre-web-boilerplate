import React from "react";
import styles from "../Navbar/Navbar.module.css";
import { Link } from "react-router-dom";

const NavbarComponent = ({ data }) => {
  const { links } = data;
  return (
    <div className={styles.navbar}>
      <div className={styles.navList}>
        {links.map((item, index) => (
          <Link key={`link-${index}`} to={item.path} className={styles.navItem}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavbarComponent;
