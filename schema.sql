-- SELECT team_name FROM leagues;

-- CREATE TABLE leagues (
-- league_id SERIAL PRIMARY KEY,
-- sport_type VARCHAR(30),
-- league_name VARCHAR(50),
-- location VARCHAR(100),
-- teams INTEGER
-- );

-- CREATE TABLE teams (
-- team_id SERIAL PRIMARY KEY,
-- sport_type VARCHAR(30),
-- league_name VARCHAR(50),
-- team_name VARCHAR(100),
-- location VARCHAR(100),
-- players INTEGER
-- );

-- CREATE TABLE players (
-- player_id SERIAL PRIMARY KEY,
-- sports VARCHAR(100),
-- team_name VARCHAR(100),
-- team_id INTEGER,
-- location VARCHAR(100)
-- );

-- INSERT INTO leagues (sport_type, league_name, location, teams)
-- VALUES ('football', 'BIG 12', 'Dallas, TX', 8),
-- ('soccer', 'Premier', 'Austin, TX', 12),
-- ('basketball', 'ACC', 'Atlanta, GA', 9),
-- ('tennis', 'Wimbledon', 'Houston, TX', 15),
-- ('kickball', 'Kicking and Screaming', 'Dallas, TX', 4),
-- ('basketball', 'American', 'Savannah, GA', 7);

-- INSERT INTO teams (sport_type, league_name, team_name, location, players)
-- VALUES ('football','BIG 12','Longhorns','Dallas, TX', 18),
-- ('football','BIG 12','Raiders','Dallas, TX', 14),
-- ('football','BIG 12','Mustangs','Dallas, TX', 19),
-- ('football','BIG 12','Cougars','Dallas, TX', 12),
-- ('basketball','ACC','Wildcats','Alpharetta, GA', 8),
-- ('basketball','ACC','Tigers','Roswell, GA', 6),
-- ('basketball','ACC','Hokies','Suwanee, GA', 8),
-- ('soccer','Premier','Titans','Austin, TX', 12),
-- ('soccer','Premier','Bears','Austin, TX', 13),
-- ('soccer','Premier','Chiefs','Austin, TX', 13),
-- ('soccer','Premier','Kings','Austin, TX', 16),
-- ('soccer','Premier','Valor','Austin, TX', 11),
-- ('kickball','Kicking and Screaming','Ground n Pound','Allen, TX', 9),
-- ('kickball','Kicking and Screaming','Heel Music','Fort Worth, TX', 9),
-- ('kickball','Kicking and Screaming','Foot Loose','Irving, TX', 9),
-- ('kickball','Kicking and Screaming','Big Toe Bombers','Dallas, TX', 9),
-- ('tennis','Wimbledon','Duet','Houston, TX', 2),
-- ('tennis','Wimbledon','Twos a Pair','Houston, TX', 2),
-- ('tennis','Wimbledon','Tandom Aces','Houston, TX', 2),
-- ('tennis','Wimbledon','Seeing Double','Houston, TX', 2),
-- ('tennis','Wimbledon','Han Solo','Houston, TX', 1),
-- ('tennis','Wimbledon','Lone Ranger','Houston, TX', 1),
-- ('tennis','Wimbledon','Ace','Houston, TX', 1),
-- ('tennis','Wimbledon','3rd Williams Sister','Houston, TX', 1),
-- ('basketball', 'American','Hawks', 'Savannah, GA', 7),
-- ('basketball', 'American','Bulldogs', 'Pooler, GA', 9),
-- ('basketball', 'American','Jackets', 'Richmond Hill, GA', 6),
-- ('basketball', 'American','Pirates', 'Rincon, GA', 6),
-- ('basketball', 'American','Eagles', 'Port Wentworth, GA', 7),
-- ('basketball', 'American','Raiders', 'Whitemarsh Island, GA', 7);

-- DROP TABLE players;

-- CREATE TABLE players (
-- player_id SERIAL PRIMARY KEY,
-- player_name VARCHAR(100),
-- sports VARCHAR(100),
-- team_name VARCHAR(100),
-- team_id INTEGER,
-- location VARCHAR(100)
-- );

-- INSERT INTO players (player_name, sports, team_name, location)
-- VALUES ('Eric Wickham','football','Raiders','Dallas, TX'),
-- ('Garrett Yaworski','kickball','Big Toe Bombers','Dallas, TX'),
-- ('Ashley Nguyen','tennis','3rd Williams Sister','Houston, TX');

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
