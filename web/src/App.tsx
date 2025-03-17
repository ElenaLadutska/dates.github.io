import React, { useMemo } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getDateByFormat } from "./dates";

export const DATES_OF_THE_BATTLES = [
  {
    dateRange: "2024-12-15 - 2024-12-22",
  },
  {
    dateRange: "2024-12-23 - 2024-12-30",
  },
  {
    dateRange: "2024-12-31 - 2025-01-06",
  },
  {
    dateRange: "2025-01-07 - 2025-01-14",
  },
];

function App() {
  const enhancedDates = useMemo(
    () =>
      DATES_OF_THE_BATTLES.map((battle) => {
        const [startDate, endDate] = battle.dateRange
          .split(" - ")
          .map((date) => new Date(date.trim()).getTime());

        return {
          ...battle,
          startDate,
          endDate,
        };
      }),
    []
  );

  return (
    <div>
      {enhancedDates.map((props, idx) => {
        const { startDate, endDate } = props;

        return (
          <div key={idx}>
            <div>
              {getDateByFormat("DD.MM.YYYY", startDate)} -{" "}
              {getDateByFormat("DD.MM.YYYY", endDate)}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
