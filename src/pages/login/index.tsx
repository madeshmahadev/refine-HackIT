import React from "react";
import {
  Row,
  Col,
  AntdLayout,
  Card,
  Typography,
  Form,
  Input,
  Button,
  Checkbox,
} from "@pankod/refine";

import { useLogin } from "@pankod/refine";

const { Text, Title } = Typography;

export interface ILoginForm {
  username: string;
  password: string;
  remember: boolean;
}

export const Login: React.FC = () => {
  const [form] = Form.useForm<ILoginForm>();

  const { mutate: login } = useLogin<ILoginForm>();

  const CardTitle = (
    <Title level={3} className="title">
      Sign in your account
    </Title>
  );

  return (
    <AntdLayout className="layout">
      <Row
        justify="center"
        align="middle"
        style={{
          height: "100vh",
        }}
      >
        <Col xs={8}>
          <div className="container">
            <div className="imageContainer" style={{ textAlign: "center", marginBottom: "2rem"}}>
              <img src="./refine.svg" alt="Refine Logo" style={{ width: "100px"}} />
            </div>
            <Card title={CardTitle} headStyle={{ borderBottom: 0 }}>
              <Form<ILoginForm>
                layout="vertical"
                form={form}
                onFinish={(values) => {
                  login(values);
                }}
                requiredMark={false}
                initialValues={{
                  remember: false
                }}
              >
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[{ required: true, type: "email" }]}
                >
                  <Input size="large" placeholder="EC Mail Address" />
                </Form.Item>
                <Form.Item
                  name="password"
                  label="Password"
                  rules={[{ required: true }]}
                  style={{ marginBottom: "12px" }}
                >
                  <Input type="password" placeholder="●●●●●●●●" size="large" />
                </Form.Item>
                <div style={{ marginBottom: "12px" }}>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      Remember me
                    </Checkbox>
                  </Form.Item>

                  <a
                    style={{
                      float: "right",
                      fontSize: "12px",
                    }}
                    href="#"
                  >
                    Forgot password?
                  </a>
                </div>
                <Button type="primary" size="large" htmlType="submit" block>
                  Sign in
                </Button>
              </Form>
            </Card>
          </div>
        </Col>
      </Row>
    </AntdLayout>
  );
};