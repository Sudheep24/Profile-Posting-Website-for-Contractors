import React from 'react';
import img1 from '../homecontractors/images/cont1.jpg'; // Replace 'path-to-your-image.jpg' with the actual image path

export default function Post_block() {
  return (
    <div className='detailshome'>
      <div className='container1'>
        <img src={img1} alt="Company Logo" /> {/* Provide a valid alt text */}
        <h2 className='conttitle'>Nanthan Promoters & Constructions</h2>
        <p className='no_of_projects'>No.Of.Projects
          <br />10
        </p>
        <p className='exp'>Years of Experience
          <br />3
        </p>
      </div>
    </div>
  );
}
