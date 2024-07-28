import React from 'react';
import { useGetCarsQuery, useDeleteCarMutation } from '../../store/carApiSlice';
import { Table, Button } from 'antd';
import '../../App.css';
const CarList = () => {
  const { data: cars, error, isLoading } = useGetCarsQuery();
  const [deleteCar] = useDeleteCarMutation();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading cars</div>;

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Brand', dataIndex: 'brand', key: 'brand' },
    { title: 'Year', dataIndex: 'year', key: 'year' },
    { title: 'Actions', key: 'actions', render: (text, record) => (
        <div>
          <Button id='edit' onClick={() => handleEdit(record)}>Edit</Button>
          <Button id='delete' onClick={() => handleDelete(record.id)} danger>Delete</Button>
        </div>
      ),
    },
  ];

  const handleEdit = (car) => {
  };

  const handleDelete = async (id) => {
    await deleteCar(id);
  };

  return <Table dataSource={cars} columns={columns} rowKey="id" />;
};

export default CarList;
