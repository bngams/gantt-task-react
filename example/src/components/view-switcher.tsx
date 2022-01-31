import React from "react";
import "gantt-task-react/dist/index.css";
import { ViewMode } from "gantt-task-react";
type ViewSwitcherProps = {
  isChecked: boolean;
  isCheckedDates: boolean;
  isCheckedStatus: boolean;
  isCheckedResources: boolean;
  isCheckedDuration: boolean;
  onViewModeChange: (viewMode: ViewMode) => void;
  onViewListChange: (isChecked: boolean) => void;
  onViewDateChange: (isCheckedDates: boolean) => void;
  onViewStatusChange: (isCheckedStatus: boolean) => void;
  onViewResourcesChange: (isCheckedResources: boolean) => void;
  onViewDurationChange: (isCheckedDuration: boolean) => void;
};
export const ViewSwitcher: React.SFC<ViewSwitcherProps> = ({
  onViewModeChange,
  onViewListChange,
  onViewDateChange,
  onViewStatusChange,
  onViewResourcesChange,
  onViewDurationChange,
  isChecked,
  isCheckedDates,
  isCheckedStatus,
  isCheckedResources,
  isCheckedDuration,
}) => {
  return (
    <div className="ViewContainer">
      <button
        className="Button"
        onClick={() => onViewModeChange(ViewMode.QuarterDay)}
      >
        Quarter of Day
      </button>
      <button
        className="Button"
        onClick={() => onViewModeChange(ViewMode.HalfDay)}
      >
        Half of Day
      </button>
      <button className="Button" onClick={() => onViewModeChange(ViewMode.Day)}>
        Day
      </button>
      <button
        className="Button"
        onClick={() => onViewModeChange(ViewMode.Week)}
      >
        Week
      </button>
      <button
        className="Button"
        onClick={() => onViewModeChange(ViewMode.Month)}
      >
        Month
      </button>

      <div className="Switch">
        <label className="Switch_Toggle">
          <input
            type="checkbox"
            defaultChecked={isChecked}
            onClick={() => onViewListChange(!isChecked)}
          />
          <span className="Slider" />
        </label>
        Show Task List
      </div>

      <div className="Switch">
        <label className="Switch_Toggle">
          <input
            type="checkbox"
            defaultChecked={isCheckedResources}
            onClick={() => onViewResourcesChange(!isCheckedResources)}
          />
          <span className="Slider" />
        </label>
        Show Resources List
      </div>

      <div className="Switch">
        <label className="Switch_Toggle">
          <input
            type="checkbox"
            defaultChecked={isCheckedDuration}
            onClick={() => onViewDurationChange(!isCheckedDuration)}
          />
          <span className="Slider" />
        </label>
        Show duration
      </div>

      <div className="Switch">
        <label className="Switch_Toggle">
          <input
            type="checkbox"
            defaultChecked={isCheckedDates}
            onClick={() => onViewDateChange(!isCheckedDates)}
          />
          <span className="Slider" />
        </label>
        Show dates on Task List
      </div>

      <div className="Switch">
        <label className="Switch_Toggle">
          <input
            type="checkbox"
            defaultChecked={isCheckedStatus}
            onClick={() => onViewStatusChange(!isCheckedStatus)}
          />
          <span className="Slider" />
        </label>
        Show status on Task List
      </div>
    </div>
  );
};
