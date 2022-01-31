import React from "react";
import { Resource } from "../../types/public-types";
import styles from "./task-resources-list.module.css";

export type TaskResourceProps = {
  resource: Resource;
};

export const TaskResource: React.FC<TaskResourceProps> = ({ resource }) => {
  return (
    <span
      className={styles.avatar}
      style={{
        width: resource.styles?.width || "32" + "px",
        height: resource.styles?.height || "32" + "px",
        border: resource.styles?.border || "2px solid grey",
        borderRadius: "50%",
        backgroundColor: resource.styles?.backgroundColor || "none",
        color: resource.styles?.color || "#000",
      }}
    >
      {(resource.imgPath && (
        <img className={styles.avatarImg} src={resource.imgPath} />
      )) ||
        ((resource.name || [])[0] || "").toUpperCase()}
    </span>
  );
};
