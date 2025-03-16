import { Form, Input, Button, Card } from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function AdminProjects() {
  const { portfolioData } = useSelector((state) => state.root);
  const [notification, setNotification] = useState(null);
  const [projects, setProjects] = useState(portfolioData?.data?.projects || []);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const onFinish = async () => {
    try {
      const response = await axios.post('/api/portfolio/update-projects', { projects });

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
    setProjects((prevProjects) => 
      prevProjects.map((project, i) => 
        i === index ? { ...project, [field]: value } : project
      )
    );
  };

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const addProject = () => {
    setProjects([
      ...projects,
      { _id: new Date().getTime().toString(), title: '', description: '', link: '', technologies: '' },
    ]);
  };

  const removeProject = (index, e) => {
    e.stopPropagation();
    setProjects(projects.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Form onFinish={onFinish} layout="vertical">
        {projects.map((project, index) => (
          <Card
            key={project._id}
            className="mb-4 border rounded-md cursor-pointer"
            onClick={() => toggleExpand(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold">{project.title || "New Project"}</h3>
              <Button danger onClick={(e) => removeProject(index, e)}>Remove</Button>
            </div>

            {expandedIndex === index && (
              <div className="mt-4" onClick={(e) => e.stopPropagation()}>
                <Form.Item label="Title">
                  <Input
                    value={project.title}
                    onChange={(e) => handleChange(index, 'title', e.target.value)}
                    placeholder="Project Title"
                  />
                </Form.Item>
                <Form.Item label="Description">
                  <textarea
                    value={project.description}
                    onChange={(e) => handleChange(index, 'description', e.target.value)}
                    className="w-full p-2 border rounded-md"
                    placeholder="Project Description"
                  />
                </Form.Item>
                <Form.Item label="Technologies">
                  <Input
                    value={project.technologies}
                    onChange={(e) => handleChange(index, 'technologies', e.target.value)}
                    placeholder="React, Node.js, MongoDB..."
                  />
                </Form.Item>
                <Form.Item label="Project Link">
                  <Input
                    value={project.link}
                    onChange={(e) => handleChange(index, 'link', e.target.value)}
                    placeholder="https://github.com/example/project"
                  />
                </Form.Item>
              </div>
            )}
          </Card>
        ))}

        <Button type="dashed" onClick={addProject} className="mb-4">
          + Add Project
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

export default AdminProjects;
