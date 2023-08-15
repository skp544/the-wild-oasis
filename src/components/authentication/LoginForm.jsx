import { useState } from "react";
import { Button, Form, FormRowVertical, Input, SpinnerMini } from "../";
import { useLogin } from "./useLogin";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail(""), setPassword("");
        },
      }
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical>
        <Button size="large" disabled={isLoading}>
          {!isLoading ? "Login" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
    </Form>
  );
};

export default LoginForm;
