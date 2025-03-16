import { Tabs } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import AdminAbout from './AdminAbout';
import AdminIntro from './AdminIntro';
import AdminExperiences from './AdminExperiences';
import AdminProjects from './AdminProjects'
import AdminCourses from './AdminCourses';
import AdminContact from './AdminContact';

function Admin() {
  const items = [
    {
      key: '1',
      label: 'Intro',
      children: <AdminIntro/>,
    },
    {
      key: '2',
      label: 'About',
      children: <AdminAbout/>,
    },
    {
      key: '3',
      label: 'Experiences',
      children: <AdminExperiences/>,
    },
    {
      key: '4',
      label: 'Project',
      children: <AdminProjects/>,
    },
    {
      key: '5',
      label: 'Course',
      children: <AdminCourses/>,
    },
    {
      key: '6',
      label: 'Contact',
      children: <AdminContact/>,
    },
  ];
  const {portfolioData} = useSelector((state) => state.root)
  console.log(portfolioData)
  
  return (
    <div>
      <Header />
      {portfolioData && <div className="p-5 m-5">
        <Tabs defaultActiveKey="1" items={items} />
      </div>}
    </div>
  );
}

export default Admin;
