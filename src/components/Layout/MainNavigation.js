import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Super NPC QUESTS</div>
      <nav className={classes.nav}>
        <ul>
          
          <li>
            <NavLink to="/quests" activeClassName={classes.active}>
              Quests
            </NavLink>
          </li>
          <li>
            <NavLink to="/npcs" activeClassName={classes.active}>
              Npcs
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
