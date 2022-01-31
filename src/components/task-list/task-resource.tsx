import React from "react";
import { Resource } from "../../types/public-types";

export type TaskResourceProps = {
  key: number;
  resource: Resource;
};

export const TaskResource: React.FC<TaskResourceProps> = ({
  key,
  resource,
}) => {
  return <li key={key}>{((resource.name || [])[0] || "").toUpperCase()}</li>;
};
