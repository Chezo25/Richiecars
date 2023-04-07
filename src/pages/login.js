import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';

const Login = () => {
  return (
    <Row>
      <Col span={12}>
        <img src="https://cdn.discordapp.com/attachments/1083998895270535178/1093726855812616292/ea185169-6751-498a-9dbf-c5a611548769.jpg" 
        alt="placeholder" className='carimg1' />
      </Col>
      <Col lg={12}>
        <div style={{ padding: '50px' }}>
          <Form layout='vertical'>
            <Form.Item label="Username" rules={[(required =>true)]}>
              <Input />
            </Form.Item>
            <Form.Item label="Password" rules={[(required =>true)]}>
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className='btn1'>
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
