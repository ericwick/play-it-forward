SELECT p.age, t.age_range, u.auth_id, p.gender, t.gender_type, p.hometown, l.league_name, t.location, l.location, p.player_name, t.players, p.position, t.wins, t.loses, t.ties, t.sport_type, t.team_name, l.teams, u.username, t.donations
FROM users u
LEFT JOIN players p ON p.player_name = u.username
LEFT JOIN teams t ON t.team_name = p.team_name
LEFT JOIN leagues l ON l.league_name = t.league_name
WHERE u.auth_id = $1;