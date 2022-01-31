import React from "react";
import styles from "./task-resources-list.module.css";
import { Resources } from "../../types/public-types";
import { TaskResource } from "./task-resource";

export type TaskResourcesListProps = {
  resources: Resources;
};

export const TaskResourcesList: React.FC<TaskResourcesListProps> = ({
  resources,
}) => {
  return (
    <ul className={styles.resourcesList}>
      {resources.map((resource, i) => {
        return (
          <li key={i}>
            <TaskResource resource={resource} />
          </li>
        );
      })}
    </ul>
  );
};
