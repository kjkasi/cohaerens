import React from 'react';

const withApiService = (mapMethodToProps) => (Wrapped) => {
  
  return (props) => {
    {
      (apiService) => {
        const serviceProps = mapMethodToProps(apiService);
        return (
          <Wrapped { ...props } { ...serviceProps } />
        );
      }
      
    }
  };
};

export default withApiService;