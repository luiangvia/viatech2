use viatech;

INSERT INTO users (name,password)
VALUES ("username","pass");


INSERT INTO projects (name,UserId)
VALUES ("project 1",1),("project 2",1);

INSERT INTO stages (name)
VALUES ("fd"),("md"),("mt"),("yt");

INSERT INTO projectstages (projectId,stageId)
VALUES (1,1),(1,2),(1,3),(1,4),
(2,1),(2,2),(2,3),(2,4);
      

INSERT INTO runs (name,analyst_initials,run_date,accept_or_reject,
qc_initials,qc_date,datapacket_reviewed,flags,comments)
VALUES ("run123","CAW","1/2/11","ACCEPT","ASZ","1/3/11","YES",4,"this is a comment"),
        ("run2cdcc","ASD","1/5/12","ACCEPT","JKZ","2/3/12","YES",4,"another comment");

INSERT INTO stageruns (stageId,runId)
VALUES (1,1),(2,2);


INSERT INTO reagents (name,lotNumber)
VALUES ("AD-12 1","Lot23"),("VC-CE1 1","GHO1"),
       ("AD2 1","SD3"),("VSS2-1 1","LAJ2");

--        INSERT INTO runreagents (runId,reagentId)
-- VALUES (1,1),(2,2);