/* eslint-disable import/prefer-default-export */
import React from "react";

// eslint-disable-next-line import/prefer-default-export
// eslint-disable-next-line react/prop-types
export const mockComponent = componentName => ({ children, ...props }) => (
  <mocked originalComponent={componentName} {...props}>
    {children}
  </mocked>
);
