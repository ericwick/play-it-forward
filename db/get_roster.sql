SELECT *
FROM players p
LEFT JOIN users u ON p.player_name = u.username
WHERE p.league_name = $1;
