SELECT t.team_name, t.sport_type, t.gender_type, t.age_range, t.record, t.location, p.player_name
FROM teams t 
JOIN players p ON t.team_name = p.team_name;