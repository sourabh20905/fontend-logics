// in React

import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("./DashBoard"));

const LazyLoading = () => {
  return (
    <div>
      <h1>Home Page</h1>

      <Suspense fallback={<p>Loading Dashboard...</p>}>
        Add here component and susspense will automatically add follback if this
        will not loaded yet <Dashboard />
      </Suspense>
    </div>
  );
};

export default LazyLoading;

// React.lazy() → dynamically imports component

// Suspense → shows fallback UI while loading

// Component loads only when rendered
