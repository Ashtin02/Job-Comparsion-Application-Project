CREATE DATABASE jobCompDB;
USE jobCompDB;

-- Creating USER table
CREATE TABLE USERS(
	UserID INT PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE, -- Primary key
    Email VARCHAR(100) UNIQUE,				-- User Email used to sign up
	User_Password VARCHAR(100),				-- User Password
	RegistrationDate DATE,					-- Date Registered
    LastLogin DATE 							-- Last date logged in
);

-- Creating JobOffer table
CREATE TABLE JOBOFFERS (
    OfferID INT PRIMARY KEY AUTO_INCREMENT,  -- Primary key
    UserID INT NOT NULL,                     -- Foreign key referencing USERS
    OfferDate DATE NOT NULL,                 -- Date the offer was made
    JobType VARCHAR(20) CHECK (JobType IN ('Work Life Balance', 'Salary Focused', 'Mixed')),  -- What type of job is it more geared towards
    Salary DECIMAL(10, 2),					  -- Salary of job offer
    JobDescription TEXT,					  -- Description of job offer
    FOREIGN KEY (UserID) REFERENCES USERS(UserID) ON DELETE CASCADE
);

-- creating Result Table
CREATE TABLE RESULTS(
    ResultID INT PRIMARY KEY AUTO_INCREMENT,  -- Primary key
    OfferID INT NOT NULL,                     -- Foreign key referencing JOBOFFERS
    JobType VARCHAR(20) CHECK (JobType IN ('Work Life Balance', 'Salary Focused', 'Mixed')),	-- What type of job is it more geared towards
    Salary DECIMAL(10, 2),					  -- Salary of job offer
    JobDescription TEXT,					  -- Description of job offer
    FOREIGN KEY (OfferID) REFERENCES JOBOFFERS(OfferID) ON DELETE CASCADE  -- Reference to JOBOFFERS
);

-- Creating ResultHistory Table
CREATE TABLE RESULT_HISTORY (
    UserID INT NOT NULL,					-- Foreign key referencing USERS
    GeneratedDate DATE NOT NULL,			-- When the Results were generated
    ResultID INT NOT NULL,					-- Foreign key referencing RESULTS
    FOREIGN KEY (UserID) REFERENCES USERS(UserID) ON DELETE CASCADE,	  	-- Reference to USERS
    FOREIGN KEY (ResultID) REFERENCES RESULTS(ResultID) ON DELETE CASCADE 	-- Reference to RESULTS
);
