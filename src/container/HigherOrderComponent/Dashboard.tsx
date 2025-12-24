import withAuth from "./utils/withAuth";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

const AuthDashboard = withAuth(Dashboard);

export default AuthDashboard;
