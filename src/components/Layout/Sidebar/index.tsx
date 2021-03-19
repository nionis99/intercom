import React from 'react';
import Container from 'react-bootstrap/Container';
import { Location } from '@styled-icons/entypo/Location';
import SidebarItem from './SidebarItem';

const routes = ['profile', 'members', 'equipment'];

const Sidebar = () => (
  <div className={`border-right border-light-99 bg-light content`}>
    <Container className="d-flex flex-column align-items-center justify-content-center py-4 border-bottom">
      <Location size={24} className="text-primary" />
      <small className="mt-2 text-center">Fake Address, 333-N</small>
      <small className="font-weight-bold">Ivan</small>
    </Container>
    <div className="scroll">
      <ul className="list-group list-group-flush h-100">
        {routes.map((route, index) => (
          <SidebarItem route={route} key={index} />
        ))}
        <SidebarItem route="error" />
      </ul>
    </div>
  </div>
);

export default Sidebar;
