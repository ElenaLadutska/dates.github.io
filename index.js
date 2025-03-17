document.addEventListener("DOMContentLoaded", function () {
  const DATES_OF_THE_BATTLES = [
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

  const enhancedDates = () =>
    DATES_OF_THE_BATTLES.map((battle) => {
      const [startDate, endDate] = battle.dateRange
        .split(" - ")
        .map((date) => new Date(date.trim()).getTime());

      return {
        ...battle,
        startDate,
        endDate,
      };
    });

  const root = document.getElementById("root");

  const dates = enhancedDates();

  dates.forEach((date) => {
    const div = document.createElement("div");

    div.innerText = `Start Date: ${new Date(date.startDate)} ${new Date(
      date.startDate
    ).getTime()}ms , End Date: ${new Date(date.endDate)}${new Date(
      date.endDate
    ).getTime()}ms`;

    root.appendChild(div);
  });
});
