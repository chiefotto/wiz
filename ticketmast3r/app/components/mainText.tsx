export interface GameData {
  matchNumber: number;
  roundNumber: number;
  date: string;
  location: string;
  homeTeam: string;
  awayTeam: string;
  result: string;
}

export function getGameInfoForToday(games: GameData[]) {
  const now: Date = new Date();
  const currentDay: number = now.getDate();
  const currentMonth: number = now.getMonth() + 1;
  const currentYear: number = now.getFullYear();

  // Find matching game
  for (const game of games) {
    if (!game.date) continue;

    const [datePart, timePart] = game.date.split(" ");
    const [day, month, year] = datePart.split("/").map(Number);

    if (day === currentDay && month === currentMonth && year === currentYear) {
      // Only get day abbreviation when we find a match
      const dayAbbreviations: string[] = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
      ];
      const monthAbbreviations: string[] = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ];
      const dayAbbr: string = dayAbbreviations[now.getDay()];
      const monthAbbr: string = monthAbbreviations[now.getMonth()];
      const time: string = game.date.split(" ")[1];

      // return `${game.homeTeam} vs ${game.awayTeam}, ${dayAbbr} ${currentMonth}/${currentDay}/${currentYear}, ${time}, ${game.location}`;

      return {
        homeTeam: game.homeTeam,
        awayTeam: game.awayTeam,
        day: dayAbbr,
        month: monthAbbr,
        dayDate: currentDay,
        year: currentYear,
        time: time,
        loc: game.location,
      };
    }
  }
}

// const csvData: string = `ticketmast3r/public/nba-2025-washington-wizards-EasternStandardTime - Sheet1.csv`;
// const gamesJSON: GameData[] = parseCSVToJSON(csvData); // Do this once

// // Then call this whenever you need it
// const todayGame = getGameInfoForToday(gamesJSON);
// console.log(todayGame);
