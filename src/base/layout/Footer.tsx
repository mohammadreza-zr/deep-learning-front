import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer>
      <hr className="border-mainGray" />
      <div className="text-center my-2">
        Copyright 2022{' '}
        <Link to={'/'} className="text-mainBlue">
          SpatialCommand
        </Link>{' '}
        All Right Reserved.
      </div>
    </footer>
  );
};

export default Footer;
