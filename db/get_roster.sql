SELECT *
FROM players p
LEFT JOIN users u ON p.player_name = u.username
WHERE p.team_name = $1;
