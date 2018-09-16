UPDATE players AS p
SET 
player_name = $2,
hometown = $3,
sport_type = $4,
age = $5,
position = $6
FROM users AS u
WHERE u.username = p.player_name 
AND u.auth_id = $1;

UPDATE users AS u
SET username = p.player_name
FROM players AS p
WHERE u.auth_id = $1

