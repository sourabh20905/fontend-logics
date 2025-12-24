// higher order component is nothing but a function that takes a component and returns a new component with some additional functionality
// take component as an argument and return a new component with some additional functionality

import { ComponentProps, ComponentType } from "react";

const withAuth = (Component: ComponentType) => {
  const isAuthenticated = false;
  const WrappedComponent = (props: ComponentProps<typeof Component>) => {
    return isAuthenticated ? <Component {...props} /> : <div>Unauthorized</div>;
  };

  WrappedComponent.displayName = `withAuth(${
    Component.displayName || Component.name || "Component"
  })`;

  return WrappedComponent;
};

export default withAuth;
