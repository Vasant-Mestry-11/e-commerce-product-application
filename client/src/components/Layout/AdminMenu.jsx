import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group">
          <h4>Admin Panel</h4>
          <NavLink to="/dashboard/create-category" className="list-group-item">
            Create Category
          </NavLink>
          <NavLink to="/dashboard/create-product" className="list-group-item">
            Create Product
          </NavLink>
          <NavLink to="/dashboard/create-user" className="list-group-item">
            Users
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
