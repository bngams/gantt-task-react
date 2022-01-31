import React, { useMemo } from "react";
import styles from "./task-list-table.module.css";
import { Task } from "../../types/public-types";
import { TaskResourcesList } from "./task-resources-list";

const localeDateStringCache = {};
const toLocaleDateStringFactory =
  (locale: string) =>
  (date: Date, dateTimeOptions: Intl.DateTimeFormatOptions) => {
    const key = date.toString();
    let lds = localeDateStringCache[key];
    if (!lds) {
      lds = date.toLocaleDateString(locale, dateTimeOptions);
      localeDateStringCache[key] = lds;
    }
    return lds;
  };

export const TaskListTableDefault: React.FC<{
  rowHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
  locale: string;
  dateTimeOptions: Intl.DateTimeFormatOptions;
  showTaskListDates: boolean;
  showTaskStatus: boolean;
  showResources: boolean;
  showDuration: boolean;
  tasks: Task[];
  selectedTaskId: string;
  setSelectedTask: (taskId: string) => void;
  onExpanderClick: (task: Task) => void;
}> = ({
  rowHeight,
  rowWidth,
  tasks,
  fontFamily,
  fontSize,
  locale,
  dateTimeOptions,
  showTaskListDates,
  showTaskStatus,
  showResources,
  showDuration,
  onExpanderClick,
}) => {
  const toLocaleDateString = useMemo(
    () => toLocaleDateStringFactory(locale),
    [locale]
  );

  return (
    <div
      className={styles.taskListWrapper}
      style={{
        fontFamily: fontFamily,
        fontSize: fontSize,
      }}
    >
      {tasks.map(t => {
        let expanderSymbol = "";
        if (t.hideChildren === false) {
          expanderSymbol = "▼";
        } else if (t.hideChildren === true) {
          expanderSymbol = "▶";
        }

        return (
          <div
            className={styles.taskListTableRow}
            style={{ height: rowHeight }}
            key={`${t.id}row`}
          >
            <div
              className={styles.taskListCell}
              style={{
                minWidth: rowWidth,
                maxWidth: rowWidth,
              }}
              title={t.name}
            >
              <div className={styles.taskListNameWrapper}>
                <div
                  className={
                    expanderSymbol
                      ? styles.taskListExpander
                      : styles.taskListEmptyExpander
                  }
                  onClick={() => onExpanderClick(t)}
                >
                  {expanderSymbol}
                </div>
                <div>
                  {!t.project && (
                    <span className={styles.projectTaskLabel}>{t.name}</span>
                  )}
                  {t.project && (
                    <span className={styles.simpleTaskLabel}>{t.name}</span>
                  )}
                </div>
                {t.alerts &&
                  t.alerts.map((alert, i) => {
                    return (
                      <img
                        className={styles.taksAlert}
                        style={{
                          width: alert.iconStyles?.width + "px" || "auto",
                          height: alert.iconStyles?.height + "px" || "auto",
                        }}
                        key={i}
                        src={alert.iconPath}
                        title={alert.iconTitle}
                      />
                    );
                  })}
              </div>
            </div>
            {showResources && (
              <div
                className={styles.taskListCell}
                style={{
                  minWidth: rowWidth,
                  maxWidth: rowWidth,
                }}
              >
                {t.resources ? (
                  <TaskResourcesList resources={t.resources} />
                ) : (
                  ""
                )}
              </div>
            )}
            {showDuration && (
              <div
                className={styles.taskListCell}
                style={{
                  minWidth: rowWidth,
                  maxWidth: rowWidth,
                }}
              >
                {t.duration || ""}
              </div>
            )}
            {showTaskListDates && (
              <div
                className={styles.taskListCell}
                style={{
                  minWidth: rowWidth,
                  maxWidth: rowWidth,
                }}
              >
                &nbsp;{toLocaleDateString(t.start, dateTimeOptions)}
              </div>
            )}
            {showTaskListDates && (
              <div
                className={styles.taskListCell}
                style={{
                  minWidth: rowWidth,
                  maxWidth: rowWidth,
                }}
              >
                &nbsp;{toLocaleDateString(t.end, dateTimeOptions)}
              </div>
            )}
            {showTaskStatus && (
              <div
                className={styles.taskListCell}
                style={{
                  minWidth: rowWidth,
                  maxWidth: rowWidth,
                  backgroundColor: t.styles?.backgroundColor || "inherit",
                  color: "white",
                }}
              >
                &nbsp;{t.status}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
