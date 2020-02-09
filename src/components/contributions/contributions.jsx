import React, { useEffect, useState  } from 'react';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';

const GithubContributions = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <div id="projects">
      <Container>
      <Title title="Github Contributions" />
        {isDesktop ? (
          <img
            className="project-wrapper"
            alt="Github contributions"
            src="https://ghchart.rshah.org/OloruntobiAwoderu"
          />
        ) : (
         null
        )}
      </Container>
    </div>
  );
};

export default GithubContributions;
