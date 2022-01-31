import React from "react";
import { Resources } from "../../types/public-types";
import { TaskResource } from "./task-resource";

export type TaskResourcesListProps = {
  resources: Resources;
};

export const TaskResourcesList: React.FC<TaskResourcesListProps> = ({
  resources,
}) => {
  return (
    <ul className="resources-list">
      {resources.map((resource, i) => {
        return <TaskResource resource={resource} key={i} />;
      })}
    </ul>
  );
};
