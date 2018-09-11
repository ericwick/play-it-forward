SELECT u.username, p.player_name, p.team_name, p.sport_type, p.position, p.league_name, p.gender, p.age, p.hometown 
FROM users u 
JOIN players p ON p.player_name = u.username
WHERE auth_id = $1;

