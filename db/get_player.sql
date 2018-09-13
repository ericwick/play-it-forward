SELECT *
FROM users u
INNER JOIN players p ON p.player_name = u.username
INNER JOIN teams t ON t.team_name = p.team_name
INNER JOIN leagues l ON l.league_name = t.league_name;