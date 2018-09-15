UPDATE players
SET player_name = $2
WHERE player_name = $1

UPDATE players 
SET sport_type = $4
WHERE player_name = $1

UPDATE players 
SET position = $6
WHERE player_name = $1

-- -- UPDATE players 
-- -- SET gender = $5
-- -- WHERE player_name = $1

UPDATE players 
SET age = $5
WHERE player_name = $1

UPDATE players 
SET hometown = $3
WHERE player_name = $1