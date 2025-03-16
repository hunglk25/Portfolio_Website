import { Form, Input } from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function AdminIntro() {
  const { portfolioData } = useSelector((state) => state.root);
  const [notification, setNotification] = useState(null);

  const onFinish = async (values) => {
    try {
      const response = await axios.post('/api/portfolio/update-intro', {
        ...values,
        _id: portfolioData.data.intros[0]._id,
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
      <Form onFinish={onFinish} layout='vertical' initialValues={portfolioData.data.intros[0]}>
        <Form.Item name='welcomeText' label='Welcome Text'>
          <Input placeholder='Welcome Text' />
        </Form.Item>
        <Form.Item name='firstName' label='First Name'>
          <Input placeholder='First Name' />
        </Form.Item>
        <Form.Item name='lastName' label='Last Name'>
          <Input placeholder='Last Name' />
        </Form.Item>
        <Form.Item name='caption' label='Caption'>
          <Input placeholder='Caption' />
        </Form.Item>
        <Form.Item name='description' label='Description'>
          <textarea placeholder='Description' className='w-full p-2 border rounded-md' />
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

export default AdminIntro;
