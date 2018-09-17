DELETE FROM players AS p
USING users AS u
WHERE u.username = p.player_name
AND u.auth_id = $1;

DELETE FROM users AS u
WHERE u.auth_id = $1;



--********* IF YOU ACCIDENTALLY DELETE YOUR PROFILE ********

-- INSERT INTO players (player_name, team_name, sport_type, position, league_name, gender, age, hometown)
-- VALUES('Eric Wickham','Raiders','football','OLB','Big 12','male',25,'Savannah, GA');

-- INSERT INTO users (username, auth_id)
-- VALUES ('Eric Wickham',
-- 'google-oauth2|113997056257321595049');