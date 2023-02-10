import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Table, Tag } from 'antd';
import { SpanElInActive } from './Customer.styled';

axios.defaults.baseURL = 'https://63c685094ebaa80285478ae8.mockapi.io';

async function fetchCustomers() {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default function Customer() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers().then(data => setCustomers(data));
  }, []);

  if (customers.length === 0) {
    return;
  }

  const columns = [
    { key: '1', title: 'Customer Name', dataIndex: 'name' },
    { key: '2', title: 'Company', dataIndex: 'company' },
    { key: '3', title: 'Phone Number', dataIndex: 'number' },
    { key: '4', title: 'Email', dataIndex: 'number' },
    { key: '5', title: 'Country', dataIndex: 'country' },
    {
      key: '6',
      title: 'Status',
      dataIndex: 'status',
      render: status => {
        return (
          <p>
            {status ? (
              <span>Active</span>
            ) : (
              <SpanElInActive>Inactive</SpanElInActive>
            )}
          </p>
        );
      },
    },
  ];
  console.log(customers);

  return (
    <div style={{ width: '968px', margin: '0 auto' }}>
      <Table
        columns={columns}
        dataSource={customers}
        pagination={{ pageSize: '8' }}
      ></Table>
    </div>
  );
}
