import React from "react";

// eslint-disable-next-line import/prefer-default-export
export const mockComponent = componentName => {
  // eslint-disable-next-line react/prop-types
  return ({ children, ...props }) => {
    return (
      <mocked originalComponent={componentName} {...props}>
        {children}
      </mocked>
    );
  };
};
