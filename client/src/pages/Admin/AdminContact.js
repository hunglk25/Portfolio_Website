import { Form, Input } from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function AdminContact() {
  const { portfolioData } = useSelector((state) => state.root);
  const [notification, setNotification] = useState(null);

  const onFinish = async (values) => {
    try {
      const response = await axios.post('/api/portfolio/update-contact', {
        ...values,
        _id: portfolioData.data.contacts[0]._id,
      });

      if (response.data.success) {
        setNotification({ type: 'success', message: response.data.message });
      } else {
        setNotification({ type: 'error', message: response.data.message });
      }
    } catch (error) {
      setNotification({ type: 'error', message: error.message });
    }
  };

  return (
    <div>
      <Form onFinish={onFinish} layout='vertical' initialValues={portfolioData.data.contacts[0]}>
        <Form.Item name='name' label='Name'>
          <Input placeholder='Name' />
        </Form.Item>
        <Form.Item name='email' label='Email'>
          <Input placeholder='Email' />
        </Form.Item>
        <Form.Item name='mobile' label='Mobile'>
          <Input placeholder='Mobile' />
        </Form.Item>
        <Form.Item name='address' label='Address'>
          <Input placeholder='Address' />
        </Form.Item>
        <Form.Item name='age' label='Age'>
          <Input placeholder='Age' />
        </Form.Item>
        <Form.Item name='gender' label='Gender'>
          <Input placeholder='Gender' />
        </Form.Item>

        {notification && (
          <div className={`text-lg font-bold mt-2 ${notification.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
            {notification.message}
          </div>
        )}

        <div className='flex justify-end w-full mt-4'>
          <button className='px-5 py-2 bg-primary text-white' type='submit'>
            SAVE
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AdminContact;
