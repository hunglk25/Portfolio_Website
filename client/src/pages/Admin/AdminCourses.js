import { Form, Input, Button, Card } from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function AdminCourses() {
  const { portfolioData } = useSelector((state) => state.root);
  const [notification, setNotification] = useState(null);
  const [courses, setCourses] = useState(portfolioData?.data?.courses || []);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const onFinish = async () => {
    try {
      const response = await axios.post('/api/portfolio/update-courses', { courses });
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
    setCourses((prevCourses) =>
      prevCourses.map((course, i) =>
        i === index ? { ...course, [field]: value } : course
      )
    );
  };

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const addCourse = () => {
    setCourses([
      ...courses,
      { _id: new Date().getTime().toString(), title: '', description: '', link: '' },
    ]);
  };

  const removeCourse = (index, e) => {
    e.stopPropagation();
    setCourses(courses.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Form onFinish={onFinish} layout="vertical">
        {courses.map((course, index) => (
          <Card
            key={course._id}
            className="mb-4 border rounded-md cursor-pointer"
            onClick={() => toggleExpand(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold">{course.title || "New Course"}</h3>
              <Button danger onClick={(e) => removeCourse(index, e)}>Remove</Button>
            </div>

            {expandedIndex === index && (
              <div className="mt-4" onClick={(e) => e.stopPropagation()}>
                <Form.Item label="Title">
                  <Input
                    value={course.title}
                    onChange={(e) => handleChange(index, 'title', e.target.value)}
                    placeholder="Course Title"
                  />
                </Form.Item>
                <Form.Item label="Description">
                  <Input.TextArea
                    value={course.description}
                    onChange={(e) => handleChange(index, 'description', e.target.value)}
                    placeholder="Course Description"
                  />
                </Form.Item>
                <Form.Item label="Link">
                  <Input
                    value={course.link}
                    onChange={(e) => handleChange(index, 'link', e.target.value)}
                    placeholder="Course URL"
                  />
                </Form.Item>
              </div>
            )}
          </Card>
        ))}

        <Button type="dashed" onClick={addCourse} className="mb-4">
          + Add Course
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

export default AdminCourses;