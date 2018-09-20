SELECT t.team_name, t.league_name, t.sport_type, t.gender_type, t.age_range, t.wins, t.loses, t.ties, t.location, p.player_name, t.donations
FROM teams t 
JOIN players p ON t.team_name = p.team_name;