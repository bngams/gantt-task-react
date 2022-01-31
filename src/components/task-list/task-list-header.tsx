import React from "react";
import styles from "./task-list-header.module.css";

export const TaskListHeaderDefault: React.FC<{
  headerHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
  showResources: boolean;
  showDuration: boolean;
  showTaskStatus: boolean;
  showTaskListDates: boolean;
}> = ({
  headerHeight,
  fontFamily,
  fontSize,
  rowWidth,
  showResources,
  showDuration,
  showTaskStatus,
  showTaskListDates,
}) => {
  return (
    <div
      className={styles.ganttTable}
      style={{
        fontFamily: fontFamily,
        fontSize: fontSize,
      }}
    >
      <div
        className={styles.ganttTable_Header}
        style={{
          height: headerHeight - 2,
        }}
      >
        <div
          className={styles.ganttTable_HeaderItem}
          style={{
            minWidth: rowWidth,
          }}
        >
          &nbsp;Name
        </div>
        <div
          className={styles.ganttTable_HeaderSeparator}
          style={{
            height: headerHeight * 0.5,
            marginTop: headerHeight * 0.2,
          }}
        />
        {showResources && (
          <div
            className={styles.ganttTable_HeaderItem}
            style={{
              minWidth: rowWidth,
            }}
          >
            &nbsp;Resources
          </div>
        )}
        {showResources && (
          <div
            className={styles.ganttTable_HeaderSeparator}
            style={{
              height: headerHeight * 0.5,
              marginTop: headerHeight * 0.2,
            }}
          />
        )}
        {showDuration && (
          <div
            className={styles.ganttTable_HeaderItem}
            style={{
              minWidth: rowWidth,
            }}
          >
            &nbsp;Duration
          </div>
        )}
        {showDuration && (
          <div
            className={styles.ganttTable_HeaderSeparator}
            style={{
              height: headerHeight * 0.5,
              marginTop: headerHeight * 0.2,
            }}
          />
        )}
        {showTaskListDates && (
          <div
            className={styles.ganttTable_HeaderItem}
            style={{
              minWidth: rowWidth,
            }}
          >
            &nbsp;From
          </div>
        )}
        {showTaskListDates && (
          <div
            className={styles.ganttTable_HeaderSeparator}
            style={{
              height: headerHeight * 0.5,
              marginTop: headerHeight * 0.25,
            }}
          />
        )}
        {showTaskListDates && (
          <div
            className={styles.ganttTable_HeaderItem}
            style={{
              minWidth: rowWidth,
            }}
          >
            &nbsp;To
          </div>
        )}
        {showTaskListDates && (
          <div
            className={styles.ganttTable_HeaderSeparator}
            style={{
              height: headerHeight * 0.5,
              marginTop: headerHeight * 0.25,
            }}
          />
        )}
        {showTaskStatus && (
          <div
            className={styles.ganttTable_HeaderItem}
            style={{
              minWidth: rowWidth,
            }}
          >
            &nbsp;Status
          </div>
        )}
      </div>
    </div>
  );
};
