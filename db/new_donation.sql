UPDATE teams
SET donations = donations + $3
WHERE team_name = $4;

INSERT INTO funding (first_name, last_name, amount, team_name, email, city, state )
VALUES ($1, $2, $3, $4, $5, $6, $7);
