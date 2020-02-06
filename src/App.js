import React from "react";

import { ThemeProvider } from "./context/ThemeContext";

// Base Layout holds all theme information
import Layout from "./components/Layout";

import Opening from "./components/Opening";

const App = () => {
  return (
    <ThemeProvider>
      <Layout>
        <div>
          <Opening />
        </div>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
