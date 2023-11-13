import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter , faSpinner} from '@fortawesome/free-solid-svg-icons';

export const FilterIcon = ({ onClick }) => {
    return (
      <div className="cursor-pointer" onClick={onClick}>
        <FontAwesomeIcon icon={faFilter} size="lg" />
      </div>
    );
  };
  
  export const LoadingSpinner = () => {
    return (
      <div className="flex items-center justify-center">
        <FontAwesomeIcon icon={faSpinner} size="lg" spin />
        <span className="ml-2">Loading...</span>
      </div>
    );
  };
  