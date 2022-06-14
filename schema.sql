-- SELECT team_name FROM leagues;

-- CREATE TABLE leagues (
-- id SERIAL PRIMARY KEY,
-- name VARCHAR(30),
-- sport VARCHAR(30),
-- location VARCHAR(30),
-- teams INTEGER
-- );

-- CREATE TABLE teams (
-- id SERIAL PRIMARY KEY,
-- name VARCHAR(30),
-- players INTEGER,
-- FOREIGN KEY (league_id)
--  REFERENCES leagues (id)
-- );

-- CREATE TABLE players (
-- id SERIAL PRIMARY KEY,
-- first_name VARCHAR(30),
-- last_name VARCHAR(30),
-- age INTEGER,
-- FOREIGN KEY (team_id)
--  REFERENCES teams (id),
-- FOREIGN KEY (league_id)
--  REFERENCES leagues (id)
-- );

-- INSERT INTO players (first_name, last_name, age, team_id, league_id)
-- VALUES ('Eric','Wickham',29,3,1),
-- ('Garrett','Yaworski',31,13,4),
-- ('Ashley','Nguyen',26,20,3);

-- INSERT INTO leagues (name, sport, location, teams)
-- VALUES ('Football League', 'football', 'Dallas, TX', 5),
-- ('Soccer League', 'soccer', 'Austin, TX', 7),
-- ('Tennis League', 'tennis', 'Houston, TX', 8),
-- ('Kickball League', 'kickball', 'Atlanta, GA', 4),
-- ('Basketball League', 'basketball', 'Savannah, GA', 6);

-- INSERT INTO teams (name, players, league_id)
-- VALUES ('Longhorns',27,1),
-- ('Raiders',24,1),
-- ('Mustangs',27,1),
-- ('Cougars',23,1),
-- ('Wildcats',25,1),
-- ('Tigers',10,2),
-- ('Hokies',11,2),
-- ('Titans',12,2),
-- ('Bears',13,2),
-- ('Chiefs',13,2),
-- ('Kings', 12,2),
-- ('Valor',11,2),
-- ('Ground n Pound',9,4),
-- ('Heel Music', 9,4),
-- ('Foot Loose',9,4),
-- ('Big Toe Bombers',9,4),
-- ('Duet',2,3),
-- ('Twos a Pair',2,3),
-- ('Tandom Aces',2,3),
-- ('Seeing Double',2,3),
-- ('Han Solo',4,3),
-- ('Lone Ranger',4,3),
-- ('Ace',4,3),
-- ('3rd Williams Sister',4,3),
-- ('Hawks',7,5),
-- ('Bulldogs',9,5),
-- ('Jackets',8,5),
-- ('Pirates',8,5),
-- ('Eagles',7,5),
-- ('Raiders',7,5);


-- SELECT * FROM teams;

-- SELECT p.team_name, t.team_id
-- FROM players p
-- JOIN teams t ON p.team_id = t.team_id
-- WHERE p.team_name = t.team_name;

-- UPDATE players p
-- SET p.team_id = teams.team_id
-- FROM teams
-- WHERE teams.team_name = p.team_name;

-- CREATE TABLE users (
-- user_id SERIAL PRIMARY KEY,
-- username VARCHAR(100),
-- password VARCHAR(100)
-- );

-- INSERT INTO users (username, password)
-- VALUES ('wickwickyiii', 'p4ssw0rd');

-- DROP TABLE users;

-- CREATE TABLE adultusers (
-- adult_id SERIAL PRIMARY KEY,
-- adultusername VARCHAR(60),
-- adultpassword VARCHAR(60)
-- );

-- CREATE TABLE kidusers (
-- kid_id SERIAL PRIMARY KEY,
-- kidusername VARCHAR(60),
-- kidpassword VARCHAR(60)
-- );

-- CREATE TABLE kidsleagues (
-- league_id SERIAL PRIMARY KEY,
-- league_name VARCHAR(100),
-- sport_type VARCHAR(30),
-- location VARCHAR(100),
-- teams INTEGER,
-- age_range INTEGER,
-- gender VARCHAR(5)
-- );

-- CREATE TABLE adultleagues (
-- league_id SERIAL PRIMARY KEY,
-- league_name VARCHAR(100),
-- sport_type VARCHAR(30),
-- location VARCHAR(100),
-- teams INTEGER,
-- age_range INTEGER,
-- gender VARCHAR(5)
-- );

-- DROP TABLE leagues;

-- CREATE TABLE kidsteams (
-- team_id SERIAL PRIMARY KEY,
-- team_name VARCHAR(100),
-- league_name VARCHAR(100),
-- sport_type VARCHAR(30),
-- players INTEGER,
-- gender_type VARCHAR(5),
-- location VARCHAR(100),
-- age_range VARCHAR(10),
-- record VARCHAR(6)
-- );

-- CREATE TABLE adultteams (
-- team_id SERIAL PRIMARY KEY,
-- team_name VARCHAR(100),
-- league_name VARCHAR(100),
-- sport_type VARCHAR(30),
-- players INTEGER,
-- gender_type VARCHAR(5),
-- location VARCHAR(100),
-- age_range VARCHAR(10),
-- record VARCHAR(6)
-- );

-- DROP TABLE teams;

-- CREATE TABLE kidplayers (
-- player_id SERIAL PRIMARY KEY,
-- player_name VARCHAR(100),
-- team_name VARCHAR(100),
-- sport_type VARCHAR(20),
-- position VARCHAR(20),
-- league_name VARCHAR(100),
-- gender VARCHAR(5),
-- age INTEGER,
-- hometown VARCHAR(100)
-- );

-- CREATE TABLE adultplayers (
-- player_id SERIAL PRIMARY KEY,
-- player_name VARCHAR(100),
-- team_name VARCHAR(100),
-- sport_type VARCHAR(20),
-- position VARCHAR(20),
-- league_name VARCHAR(100),
-- gender VARCHAR(5),
-- age INTEGER,
-- hometown VARCHAR(100)
-- );

-- DROP TABLE players;

-- INSERT INTO adultteams (team_name ,league_name,sport_type,players,gender_type,location,age_range,record)
-- VALUES ('Hawks','Premier','soccer',16,'co-ed','Atlanta, GA','18+', '3-3'); 

-- DELETE FROM adultusers WHERE adultusername IS NULL;

-- SELECT * FROM adultplayers;

-- DELETE FROM kidusers WHERE kidusername IS NULL;

-- DELETE FROM adultplayers WHERE age IS NULL;

-- COLUMNS IN TEAM TABLES
-- team_name, league_name, sport_type, players, gender_type, location, age_range, record


-- ************ JOINS THE USERS TABLE WITH THE PLAYERS TABLE ************
-- SELECT p.player_name, p.team_name, p.sport_type, p.league_name
-- FROM players p
-- JOIN users u ON p.player_name = u.username

-- ****** JOINS PLAYERS TABLE WITH LEAGUES TABLE *********
-- SELECT p.player_name, p.team_name, l.league_name, l.teams, l.sport_type, l.age_range, l.gender, l.location  
-- FROM leagues l
-- JOIN players p ON p.league_name = l.league_name;

-- INSERT INTO kidsleagues (league_name, sport_type, location, teams, age_range, gender)
-- VALUES ('BIG 10','flag football',  'Dallas, TX', 8, 10-12, 'co-ed'),
-- ('La Liga','soccer',  'Austin, TX', 12, 5-6,'girls'),
-- ('Eastern','basketball', 'Atlanta, GA', 9, 12-13, 'boys'),
-- ('US Open','tennis',  'San Antonio, TX', 15, 11-12, 'co-ed'),
-- ('Kicking and Screaming', 'kickball', 'Dallas, TX', 4, 18, 'co-ed'),
-- ('American', 'basketball', 'Savannah, GA', 7, 18, 'co-ed');

-- INSERT INTO adultplayers (player_name, team_name, sport_type, league_name, gender, age, hometown)
-- VALUES ('Eric Wickham','Raiders','football','Big 12','male', 25, 'Savannah, GA'),
-- ('Garrett Yaworski','Big Toe Bombers','kickball','Kicking And Screaming','male',26,'Fort Worth, TX'),
-- ('Ashley Nguyen','3rd Williams Sister','tennis','Wimbledon','fem',24,'Houston, TX');

-- UPDATE adultplayers
-- SET position = 'Ace Master'
-- WHERE player_name = 'Ashley Nguyen';

-- INSERT INTO kidplayers (player_name, team_name, sport_type, league_name, position, gender, age, hometown)
-- VALUES ('Christopher Cook','Bulldogs','flag football','Big 10','RB','male', 6, 'Savannah, GA'),
-- ('Danae Cook','Foot Loose','kickball','Kicking And Screaming','Clean-up','fem',5,'Hampton, VA'),
-- ('KJ Shouse','Tigers','basketball','Eastern','PG','male',13,'Charlotte, NC');

-- INSERT INTO adultteams (team_name, league_name, sport_type, players, gender_type, location, age_range, record)
-- VALUES ('Raiders', 'Big 12', 'football', 12, 'male', 'Savannah, GA', '18+', '7-0'),
-- ('Big Toe Bombers','Kicking And Screaming', 'kickball', 9, 'co','Dallas, TX', '18+', '8-2'),
-- ('3rd Williams Sister', 'Wimbledon', 'tennis', 1, 'fem', 'Houston, TX', '18+', '7-1');


-- UPDATE at.league_name
-- FROM adultteams at
-- JOIN adultleagues al ON at.league_name = al.league_name;

-- UPDATE adultteams at
-- SET at.league_id = al.league_id
-- JOIN adultleagues al ON at.league_name = al.league_name;

-- ALTER TABLE adultteams
-- ADD COLUMN league_id INTEGER;

-- ALTER TABLE kidsteams
-- ADD COLUMN league_id INTEGER;

-- ALTER TABLE adultplayers
-- ADD COLUMN team_id INTEGER;

-- ALTER TABLE kidplayers
-- ADD COLUMN team_id INTEGER;

-- ALTER TABLE adultteams
-- DROP COLUMN league_id;

-- ALTER TABLE adultteams
-- DROP COLUMN league_id;

-- ALTER TABLE adultteams
-- ADD COLUMN league_id INTEGER
-- REFERENCES adultleagues(league_id);

-- DELETE FROM adultusers
-- WHERE adultusername = 'n';

-- ALTER TABLE adultusers
-- ADD COLUMN auth_id INTEGER;

-- ALTER TABLE adultusers
-- DROP COLUMN adultpassword;

-- SELECT * FROM adultplayers;

-- UPDATE adultusers 
-- SET adultusername = 'Eric Wickham'
-- WHERE adult_id = 37;

-- SELECT p.player_name, p.team_name, p.sport_type, p.league_name
-- FROM players p
-- JOIN users u ON p.player_name = u.username

-- INSERT INTO kidplayers (player_name, team_name, sport_type, position, league_name, gender, age, hometown)
-- VALUES ('Eric Wickham', 'Raiders', 'football', 'QB', 'league_name', 'male', 25,'Savannah, GA'),
-- ('Garrett Yaworski', 'Big Toe Bombers', 'kickball', 'lead-off', 'Kicking and Screaming', 'male', 26, 'Fort Worth, TX'),
-- ('Ashley Nguyen', '3rd Williams Sister', 'tennis','Ace Master', 'Wimbledon', 'fem', 24, 'Houston, TX');

-- DROP TABLE adultplayers;

-- DELETE FROM players
-- WHERE player_id = 9;

-- SELECT * FROM kidsteams;

-- INSERT INTO adultteams (team_name, league_name, sport_type, players, gender_type, location, age_range, record)
-- VALUES ('Heel Music', 'Kicking and Screaming', 'kickball', 12, 'co-ed', 'Dallas, TX', '9-14', '5-0'),
-- ('Bulldogs', 'Big 10', 'flag football', 13, 'co-ed', 'Savannah, GA', '5-7','7-0'),
-- ('Foot Loose', 'Kicking and Screaming', 'kickball', 9, 'co-ed', 'Atlanta, GA', '4-6', '4-2'),
-- ('Tigers', 'Eastern', 'basketball', 8, 'male', 'Dallas, TX', '13-14', '7-1');

-- UPDATE adultteams
-- SET gender_type = 'co-ed'
-- WHERE team_id = 3;

-- SELECT * FROM adultusers;

-- SELECT * FROM kidusers;

-- INSERT INTO adultusers (adultusername)
-- VALUES ('newkid'),
-- ('ewickham42');

-- ALTER TABLE adultleagues
-- RENAME TO leagues;

-- SELECT * FROM adultleagues;

-- ALTER TABLE adultleagues
-- ALTER COLUMN age_range TYPE VARCHAR(10);

-- INSERT INTO adultleagues (league_name, sport_type, location, teams, age_range, gender)
-- VALUES ('Big 10', 'flag football', 'Dallas, TX', 8, '11-12', 'co-ed'),
-- ('La Liga', 'soccer', 'Austin, TX', 12, '10-11', 'girls'),
-- ('Eastern', 'basketball', 'Atlanta, GA', 9, '13-14', 'boys'),
-- ('US Open', 'tennis', 'San Antonio, TX', 15, '10-12', 'co-ed'),
-- ('Kicking and Screaming', 'kickball', 'Dallas, TX', 4, '18+', 'co-ed'),
-- ('American', 'basketball', 'Savannah, GA', 7, '18+', 'co-ed');

-- UPDATE adultleagues
-- SET age_range = '18+'
-- WHERE age_range = '18';

-- SELECT * FROM users;

-- ALTER TABLE users
-- RENAME COLUMN adult_id TO user_id;

-- SELECT * FROM players;

-- UPDATE players
-- SET league_name = 'ACC'
-- WHERE league_name = 'league_name';

-- SELECT u.username, p.player_name, p.team_name, p.sport_type, p.position, p.league_name, p.gender, p.age, p.hometown 
-- FROM users u 
-- JOIN players p ON p.player_name = u.username
-- WHERE auth_id = $1

-- DELETE FROM users
-- WHERE username = 'Eric Wickham';

-- INSERT INTO users (username)
-- VALUES ('Eric Wickham');

-- SELECT * FROM leagues;

-- UPDATE players
-- SET league_name = 'BIG 12'
-- WHERE player_name = 'Eric Wickham';

-- SELECT p.player_name, p.team_name, l.league_name, l.teams, l.sport_type, l.age_range, l.gender, l.location  
-- FROM leagues l
-- JOIN players p ON p.league_name = l.league_name;

-- SELECT l.league_name, l.sport_type, l.location, l.teams, l.age_range, l.gender, t.team_name 
-- FROM leagues l
-- JOIN teams t ON t.league_name = l.league_name;

-- SELECT * FROM leagues;

-- UPDATE teams t
-- JOIN leagues l ON t.league_name = l.league_name
-- SET t.league_id = l.league_id;

-- UPDATE teams t
-- SET t.league_id = l.league_id
-- FROM leagues l
-- WHERE t.league_name = l.league_name;

-- SELECT l.league_name, t.team_name, l.sport_type, l.location, l.teams, l.age_range, l.gender
-- FROM leagues l
-- LEFT JOIN teams t ON t.league_name = l.league_name;

-- DELETE FROM users
-- WHERE user_id = 47;

-- SELECT *
-- FROM users u
-- INNER JOIN players p ON p.player_name = u.username
-- INNER JOIN teams t ON t.team_name = p.team_name
-- INNER JOIN leagues l ON l.league_name = t.league_name;

-- UPDATE leagues 
-- SET league_name = 'Big 12'
-- WHERE league_name = 'BIG 12';

-- SELECT * 
-- FROM users u, players p, teams t
-- WHERE u.username = p.player_name 
-- AND p.team_name = t.team_name
-- OUTER JOIN leagues l
-- ON l.league_name = t.league_name;

-- SELECT * 
-- FROM users u, players p, teams t
-- WHERE u.username = p.player_name
-- AND p.team_name = t.team_name;

-- ALTER TABLE teams 
-- DROP COLUMN league_ref_id;

-- ALTER TABLE players
-- ADD COLUMN images VARCHAR(500);

-- SELECT * FROM players;

-- INSERT INTO players (player_name, team_name, sport_type, position, league_name, gender, age, hometown)
-- VALUES ('Frank', 'Raiders', 'football','DE', 'Big 12', 'male', 23, 'Seattle, WA'),
-- ('Vic', 'Raiders', 'football','WR', 'Big 12', 'male', 24, 'Muskogee, OK'),
-- ('Justin', 'Raiders', 'football','LB', 'Big 12', 'male', 22, 'Atlanta, GA'),
-- ('Zut', 'Raiders', 'football','NT', 'Big 12', 'male', 24, 'Princeton, NJ'),
-- ('Coop', 'Raiders', 'football','DE', 'Big 12', 'male', 23, 'Dallas, TX'),
-- ('Dubbs', 'Raiders', 'football','RB', 'Big 12', 'male', 25, 'Savannah, GA'),
-- ('Dazz', 'Raiders', 'football','S', 'Big 12', 'male', 26, 'Chicago, IL'),
-- ('Chai', 'Raiders', 'football','CB', 'Big 12', 'male', 27, 'Los Angeles, CA'),
-- ('Vern', 'Raiders', 'football','SS', 'Big 12', 'male', 25, 'Fort Lauderdale, FL'),
-- ('Buster', 'Raiders', 'football','LT', 'Big 12', 'male', 26, 'Trenton, NJ'),
-- ('AJ', 'Raiders', 'football','C', 'Big 12', 'male', 26, 'Westchester, PA');

-- SELECT * 
-- FROM players;

-- SELECT *
-- FROM players p
-- INNER JOIN users u ON p.player_name = u.username
-- WHERE team_name = p.team_name AND u.auth_id = 'google-oauth2|113997056257321595049';

-- SELECT DISTINCT t.team_name, t.league_name, t.record, t.players, t.sport_type, t.gender_type, t.age_range
-- FROM teams t
-- LEFT JOIN players p ON p.team_name = t.team_name
-- WHERE t.league_name = 'Big 12';

-- INSERT INTO teams (team_name, league_name, players, record)
-- VALUES ('Bears', 'Big 12', 15, '5-3'),
-- ('Vikings', 'Big 12', 12, '6-2'),
-- ('Falcons', 'Big 12', 13, '4-4'),
-- ('Eagles', 'Big 12', 15, '2-6');

-- SELECT *
-- FROM players p
-- LEFT JOIN users u ON p.player_name = u.username
-- WHERE p.team_name = 'Raiders';

-- UPDATE players
-- SET player_name = 'CJ Cook'
-- WHERE player_id = 1;

-- UPDATE players
-- SET age = 26
-- WHERE player_name = 'Eric Wickham';

-- UPDATE players p
-- JOIN user u ON u.username = p.player_name
-- SET p.player_name = 'Drew' AND u.username = 'Drew'
-- WHERE u.auth_id = 'google-oauth2|113997056257321595049';

-- UPDATE players
-- SET hometown = 'Cumming'
-- FROM users
-- WHERE users.username = players.player_name;

-- UPDATE players
-- SET (players.player_name, users.username) = 'Drew'
-- FROM 
-- WHERE u.auth_id = 'google-oauth2|113997056257321595049';

-- DELETE FROM players 
-- WHERE player_id = 45;

-- UPDATE players
-- SET player_name = 'CJ Cook'
-- WHERE player_id = 1;

-- UPDATE players
-- SET player_name = 'Drew'
-- FROM users
-- WHERE auth_id = 'google-oauth2|113997056257321595049';

-- UPDATE players AS p
-- SET player_name = 'Drew'
-- FROM users AS u
-- WHERE u.username = p.player_name AND u.auth_id = 'google-oauth2|113997056257321595049';

-- UPDATE users AS u
-- SET username = p.player_name
-- FROM players AS p
-- WHERE u.auth_id = 'google-oauth2|113997056257321595049';

-- UPDATE players AS p
-- SET sport_type = 'basketball'
-- FROM users AS u
-- WHERE u.username = p.player_name 
-- AND u.auth_id = 'google-oauth2|113997056257321595049';

-- UPDATE players AS p
-- SET 
-- player_name = 'Eric Wickham',
-- hometown = 'Savannah, GA',
-- sport_type = 'football',
-- age = 25,
-- position = 'OLB'
-- FROM users AS u
-- WHERE u.username = p.player_name 
-- AND u.auth_id = 'google-oauth2|113997056257321595049';

-- UPDATE users AS u
-- SET username = p.player_name
-- FROM players AS p
-- WHERE u.auth_id = 'google-oauth2|113997056257321595049';

-- UPDATE players 
-- SET league_name = 'Big 12'
-- WHERE player_name = 'Eric Wickham';

-- DELETE FROM players AS p
-- USING users AS u
-- WHERE u.username = p.player_name
-- AND u.auth_id = 'google-oauth2|113997056257321595049';

-- DELETE FROM users AS u
-- WHERE u.auth_id = 'google-oauth2|113997056257321595049';


-- INSERT INTO players (player_name, team_name, sport_type, position, league_name, gender, age, hometown)
-- VALUES (
-- 'Eric Wickham',
-- 'Raiders',
-- 'football',
-- 'OLB',
-- 'Big 12',
-- 'male',
-- 25,
-- 'Savannah, GA');

-- INSERT INTO users (username, auth_id)
-- VALUES ('Eric Wickham',
-- 'google-oauth2|113997056257321595049');

-- CREATE TABLE teamchat (
-- team_name VARCHAR(50),
-- chatMessage VARCHAR(500),
-- date VARCHAR(15)
-- );