import React from "react";

const Child = React.memo(
  ({
    handleIncrement,
    count,
  }: {
    handleIncrement?: () => void;
    count?: number;
  }) => {
    console.log("childeren render again");

    //child render again if even if we dont want to render this child again because value of the parent changes so rerednder happen again
    return (
      <div>
        <h1>Child {count}</h1>
      </div>
    );
  }
);

Child.displayName = "Child";

export default Child;

// ye component jabhi rerender hoga jb prop ki value change hogi and one more thing iski limitation h if function sending in the prop this will not handle rerender , To
// iske liye aya h callback
