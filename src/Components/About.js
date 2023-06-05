import React, { useContext, useEffect } from 'react';
import Notecontext from '../Context/Notes/Notecontext';

const About = () => {
  const a = useContext(Notecontext);
  useEffect(() => {
    a.update()
  }, [a]);

  return (
    <div>
      <h1>
        My Name Is {a.State.name} And I am Study in {a.State.Stream}
      </h1>
    </div>
  );
};
export default About;
