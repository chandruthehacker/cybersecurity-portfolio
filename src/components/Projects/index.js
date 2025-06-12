import React, { useState } from 'react';
import {
  Container, Wrapper, Title, Desc, CardContainer,
  ToggleButtonGroup, ToggleButton, Divider
} from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a variety of cybersecurity-related projects, including threat detection, log analysis, phishing prevention, and hands-on labs.
        </Desc>
        <ToggleButtonGroup>
          {toggle === 'all' ?
            <ToggleButton active onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'detection' ?
            <ToggleButton active onClick={() => setToggle('detection')}>Detection</ToggleButton>
            :
            <ToggleButton onClick={() => setToggle('detection')}>Detection</ToggleButton>
          }
          <Divider />
          {toggle === 'automation' ?
            <ToggleButton active onClick={() => setToggle('automation')}>Automation</ToggleButton>
            :
            <ToggleButton onClick={() => setToggle('automation')}>Automation</ToggleButton>
          }
          <Divider />
          {toggle === 'awareness' ?
            <ToggleButton active onClick={() => setToggle('awareness')}>Awareness</ToggleButton>
            :
            <ToggleButton onClick={() => setToggle('awareness')}>Awareness</ToggleButton>
          }
          <Divider />
          {toggle === 'utilities' ?
            <ToggleButton active onClick={() => setToggle('utilities')}>Utilities</ToggleButton>
            :
            <ToggleButton onClick={() => setToggle('utilities')}>Utilities</ToggleButton>
          }
        </ToggleButtonGroup>

        <CardContainer>
          {(toggle === 'all' ? projects : projects.filter((item) => item.category === toggle))
            .map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
