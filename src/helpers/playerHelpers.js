export const preparePlayerData = (playerData) => {
  return Object.values(playerData);
};

export const addWinsToPlayers = (playerDataArray, matchData) => {
  return playerDataArray.map((player) => {
    const currentWins = matchData.reduce((acc, match) => {
      if (match.winner === player.gamerTag) {
        return acc++;
      } else {
        return acc;
      }
    }, 0);

    player.wins = currentWins;
    return player;
  });
};
