import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";

const Home = React.lazy(() => import("./Home"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading Page...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

// BrowserRouter is a component from react-router-dom that enables client-side routing in React applications using the HTML5 History API.
// It lets your React app change URLs and pages without reloading the browser.
//BrowserRouter is a React Router component that uses the HTML5 History API to manage client-side navigation without page reloads.
