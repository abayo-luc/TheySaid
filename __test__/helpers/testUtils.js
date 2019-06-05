/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
import React from "react";

// eslint-disable-next-line import/prefer-default-export
// eslint-disable-next-line react/prop-types
export const mockComponent = componentName => ({ children, ...props }) => (
  <mocked originalComponent={componentName} {...props}>
    {children}
  </mocked>
);

export const findByTestID = (component, testID) => {
  if (component.props && component.props.testID === testID) {
    return component;
  }
  if (component.children && component.children.length > 0) {
    const { children } = component;
    for (const child of children) {
      const item = findByTestID(child, testID);
      if (typeof item !== `undefined`) {
        return item;
      }
    }
  }
  return null;
};
