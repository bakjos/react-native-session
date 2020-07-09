import React from "react";

const withClassComponent = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  class ComponentWithClassComponent extends React.Component<P> {
    constructor(props: P) {
      super(props);
    }

    public render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return ComponentWithClassComponent;
};

export default withClassComponent;
