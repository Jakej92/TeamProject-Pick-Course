CREATE SEQUENCE SEQ_WRITE_EXCLUDE;
CREATE TABLE TBL_WRITE_EXCLUDE (
                             ID NUMBER CONSTRAINT PK_WRITE_EXCLUDE PRIMARY KEY,
                             EXCLUDE_CONTENT VARCHAR2(1000) DEFAULT '',
                             PLAN_ID NUMBER NOT NULL,
                             CONSTRAINT FK_EXCLUDE_PLAN FOREIGN KEY (PLAN_ID)
                             REFERENCES TBL_PLAN(ID) ON DELETE CASCADE
);
