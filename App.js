import React from 'react';
import { TaskProvider } from './Components/TaskmodelContext';
import Navigation from "./Routing/homeStack"

export default function App() {
  return (
    <TaskProvider>
      <Navigation />
    </TaskProvider>
  );
}

