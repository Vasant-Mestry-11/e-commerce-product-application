import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";

const AdminDashboard = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">Content</div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
