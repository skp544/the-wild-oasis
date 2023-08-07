import { Heading, Row, UpdateSettingsForm } from "../components";

const Settings = () => {
  return (
    <Row>
      <Heading as={"h1"}>Update Hotel Settings</Heading>
      <UpdateSettingsForm />
    </Row>
  );
};

export default Settings;
