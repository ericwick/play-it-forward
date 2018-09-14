SELECT DISTINCT t.team_name, t.league_name, t.record, t.players, t.sport_type, t.gender_type, t.age_range
FROM teams t
LEFT JOIN players p ON p.team_name = t.team_name
WHERE t.league_name = $1;


