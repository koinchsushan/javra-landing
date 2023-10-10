import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import RouteObj from "./routes";
interface Iprops {
  path: string;
  component: any;
}

function App() {
  return (
    <React.Fragment>
      <Suspense>
        <Routes>
          {RouteObj.map((e: Iprops, i: number) => (
            <Route path={e.path} key={i} element={<e.component />} />
          ))}
        </Routes>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
