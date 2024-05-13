import React from 'react';
import star from '../images/star.png';
import producthunt from '../images/producthunt.png';

const CompanyRating = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center  gap-4 sm:gap-10 mt-20">
      <div className="flex flex-col items-center">
        <img src={star} alt="star rating" />
        <div className="text-sm text-center mt-1">Seamless user experience</div>
        <div className="text-sm text-center mt-1">Customer rating: <span className="font-semibold">4.7 out of 5</span></div>
      </div>
      <div>
        <img src={producthunt} alt="product hunt" />
      </div>
    </div>
  );
};

export default CompanyRating;
