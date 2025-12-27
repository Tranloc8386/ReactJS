import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";

const Login = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const account = {
    email: "user@gmail.com",
    password: "password123",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === account.email && password === account.password) {
      navigate("/home");
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: email,
          password: password,
        })
      );
    } else {
      alert("Email hoac mat khau khong hop le!");
    }
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
        <h1>Dang nhap</h1>
      <Form
        onSubmitCapture={handleSubmit}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 500 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          type="email"
          placeholder="Nhap email..."
          required
          value={email}
          onChange={(e) => setemail(e.target.value)}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          type="password"
          placeholder="Nhap password..."
          required
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" label={null}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item label={null}>
          <Button onSubmit={handleSubmit} type="primary" htmlType="submit">
            Log In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
