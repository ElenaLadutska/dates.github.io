import React, { useMemo } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getDateByFormat } from "./dates";

export const DATES_OF_THE_BATTLES = [
  {
    dateRange: "12.15.2024 - 12.22.2024",
  },
  {
    dateRange: "12.23.2024 - 12.30.2024",
  },
  {
    dateRange: "12.31.2024 - 01.06.2025",
  },
  {
    dateRange: "01.07.2025 - 01.14.2025",
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
