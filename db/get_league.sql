SELECT l.league_name, t.team_name, l.sport_type, l.location, l.teams, l.age_range, l.gender
FROM leagues l
LEFT JOIN teams t ON t.league_name = l.league_name;

