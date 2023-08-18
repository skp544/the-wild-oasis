import { DashboardFilter, DashboardLayout, Heading, Row } from "../components";

const Dashboard = () => {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>

      <DashboardLayout />
    </>
  );
};

export default Dashboard;
