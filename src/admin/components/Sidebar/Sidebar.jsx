import { NavLink, useNavigate } from "react-router-dom";
import navLinks from "../../dummy-data/navLinks";
import "./sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    setTimeout(() => {
      navigate("/");
      window.location.reload();
    }, 1000);
  };
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h2>Kalⁱco</h2>
      </div>

      <div className="sidebar__content">
        <div className="menuAdmin">
          <ul className="nav__list">
            {navLinks.map((item, index) => (
              <li className="nav__item" key={index}>
                <NavLink
                  to={item.path}
                  className={(navClass) =>
                    navClass.isActive ? "nav__active nav__link" : "nav__link"
                  }
                >
                  <i className={item.icon}></i>

                  {item.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar__bottom">
          <span onClick={handleLogout} style={{ cursor: "pointer" }}>
            <i className="ri-logout-circle-r-line"></i> Sortir
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
