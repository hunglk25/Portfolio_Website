import { Form, Input, Button, Card } from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function AdminExperiences() {
  const { portfolioData } = useSelector((state) => state.root);
  const [notification, setNotification] = useState(null);
  const [experiences, setExperiences] = useState(portfolioData?.data?.experiences || []);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const onFinish = async () => {
    try {
      const response = await axios.post('/api/portfolio/update-experiences', { experiences });

      if (response.data.success) {
        setNotification({ type: 'success', message: response.data.message });
      } else {
        setNotification({ type: 'error', message: response.data.message });
      }
    } catch (error) {
      setNotification({ type: 'error', message: error.message });
    }
  };

  const handleChange = (index, field, value) => {
    setExperiences((prevExperiences) => 
      prevExperiences.map((experience, i) => 
        i === index ? { ...experience, [field]: value } : experience
      )
    );
  };

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const addExperience = () => {
    setExperiences([
      ...experiences,
      { _id: new Date().getTime().toString(), title: '', company: '', period: '', description: '' },
    ]);
  };

  const removeExperience = (index, e) => {
    e.stopPropagation();
    setExperiences(experiences.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Form onFinish={onFinish} layout="vertical">
        {experiences.map((experience, index) => (
          <Card
            key={experience._id}
            className="mb-4 border rounded-md cursor-pointer"
            onClick={() => toggleExpand(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold">{experience.title || "New Experience"}</h3>
              <Button danger onClick={(e) => removeExperience(index, e)}>Remove</Button>
            </div>

            {expandedIndex === index && (
              <div className="mt-4" onClick={(e) => e.stopPropagation()}>
                <Form.Item label="Title">
                  <Input
                    value={experience.title}
                    onChange={(e) => handleChange(index, 'title', e.target.value)}
                    placeholder="Job Title"
                  />
                </Form.Item>
                <Form.Item label="Company">
                  <Input
                    value={experience.company}
                    onChange={(e) => handleChange(index, 'company', e.target.value)}
                    placeholder="Company Name"
                  />
                </Form.Item>
                <Form.Item label="Period">
                  <Input
                    value={experience.period}
                    onChange={(e) => handleChange(index, 'period', e.target.value)}
                    placeholder="2022 - Present"
                  />
                </Form.Item>
                <Form.Item label="Description">
                  <textarea
                    value={experience.description}
                    onChange={(e) => handleChange(index, 'description', e.target.value)}
                    className="w-full p-2 border rounded-md"
                    placeholder="Job responsibilities and achievements"
                  />
                </Form.Item>
              </div>
            )}
          </Card>
        ))}

        <Button type="dashed" onClick={addExperience} className="mb-4">
          + Add Experience
        </Button>

        {notification && (
          <div className={`text-lg font-bold mt-2 ${notification.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
            {notification.message}
          </div>
        )}

        <div className="flex justify-end w-full mt-4">
          <button className="px-5 py-2 bg-primary text-white" type="submit">
            SAVE
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AdminExperiences;
