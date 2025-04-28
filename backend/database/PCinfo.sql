DROP DATABASE IF EXISTS PC;
CREATE DATABASE PC;
USE PC;
CREATE TABLE PCinfo (
owner_of_pc VARCHAR(50),
login_password VARCHAR(50),
links VARCHAR(100),
app VARCHAR(50),
terminal_location VARCHAR(50),
paths VARCHAR(50),
lsHome VARCHAR(50)
);
INSERT INTO PCinfo (owner_of_pc, login_password, links, app, terminal_location, paths, lsHome) VALUES 
("Lee Cash", "open", "https://github.com/LeeFCash", "terminal", "~", "~", "Downloads"),
(null, null, "https://youtube.com/playlist?list=PL7vr_kFNXDB7JnTKGR6ZX_kqQGjUqeBQ7&si=Jvgb-39VlKnwH0JQ", "browser", null, "/home/leecash", "Videos"),
(null, null, "https://youtube.com/playlist?list=PL7vr_kFNXDB5Lk_Ag8mthtbyt5WadyrRD&si=0r05mrQW_Hk7Yazf", "aboutMeApp", null, "/home", "Pictures"),
(null, null, null, "aboutApp", null, "/", "Music"),
(null, null, null, "music app", null, "/etc", null),
(null, null, null, null, null, "/etc/settings", null);
-- SELECT * from PCinfo;