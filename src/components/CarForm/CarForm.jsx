import React, { useState } from 'react';
import { useAddCarMutation, useUpdateCarMutation } from '../../store/carApiSlice';
import { Form, Input, Button } from 'antd';

const CarForm = () => {
  const [form] = Form.useForm();
  const [addCar] = useAddCarMutation();
  const [updateCar] = useUpdateCarMutation();
  const [currentCar, setCurrentCar] = useState(null);

  const onFinish = async (values) => {
    if (currentCar) {
      await updateCar({ id: currentCar.id, ...values });
      setCurrentCar(null);
    } else {
      await addCar(values);
    }
    form.resetFields();
  };

  return (
    <Form form={form} layout="inline" onFinish={onFinish}>
      <Form.Item name="name" rules={[{ required: true, message: 'Please input the car name!' }]}>
        <Input placeholder="Name" />
      </Form.Item>
      <Form.Item name="brand" rules={[{ required: true, message: 'Please input the car brand!' }]}>
        <Input placeholder="Brand" />
      </Form.Item>
      <Form.Item name="year" rules={[{ required: true, message: 'Please input the car year!' }]}>
        <Input placeholder="Year" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          {currentCar ? 'Update Car' : 'Add Car'}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CarForm;
