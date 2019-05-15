use viatech;

INSERT INTO users (name,password)
VALUES ("username","pass");


INSERT INTO projects (name,UserId)
VALUES ("project name",1);

INSERT INTO stages (name)
VALUES ("fd"),("md"),("mt"),("yt");

INSERT INTO runs (name,analyst_initials,run_date,accept_or_reject,
qc_initials,qc_date,datapacket_reviewed,flags,comments)
VALUES ("run123","CAW","1/2/11","ACCEPT","ASZ","1/3/11","YES",4,"this is a comment");