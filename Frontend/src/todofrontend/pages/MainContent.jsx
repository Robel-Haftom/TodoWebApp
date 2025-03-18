import React from "react";

const MainContent = () => {
  return (
    <div className="dashboard-content">
      <h2>Welcome back, Robiniho, </h2>
      <div className="dashboard-main-content">
        <div className="tasks"></div>
        <div className="taskStatus">
          <div className="taskanalytics"></div>
          <div className="completedTasks"></div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
