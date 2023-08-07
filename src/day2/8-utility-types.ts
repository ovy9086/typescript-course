type Game = {
  id: string;
  date: Date;
  players: { id: string; name: string }[];
};

function sortGames(games: Omit<Game, "players">[]) {}

function sortPlayers(players: Omit<Game, "id" | "date">) {}
