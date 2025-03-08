USE privateeye_db;

-- Insert default users
INSERT INTO users (name, email, password_hash) VALUES
('John Doe', 'john.doe@example.com', 'hashedpassword1'),
('Jane Smith', 'jane.smith@example.com', 'hashedpassword2');

-- Insert default statuses
INSERT INTO statuses (name) VALUES 
('Applied'), 
('Phone Screen'), 
('Interviewing'), 
('Offer'), 
('Rejected');

-- Insert default companies
INSERT INTO companies (name, website, industry, location) VALUES
('Google', 'https://www.google.com', 'Technology', 'Mountain View, CA'),
('Amazon', 'https://www.amazon.com', 'E-commerce', 'Seattle, WA'),
('Microsoft', 'https://www.microsoft.com', 'Technology', 'Redmond, WA');

-- Insert job applications
INSERT INTO applications (user_id, company_id, job_title, job_description, job_link, status_id, applied_date) VALUES
(1, 1, 'Software Engineer', 'Develop web applications using JavaScript and Python.', 'https://careers.google.com', 1, '2024-02-01'),
(1, 2, 'Data Analyst', 'Analyze and interpret complex data to help decision-making.', 'https://www.amazon.jobs', 2, '2024-02-05'),
(2, 3, 'Product Manager', 'Lead the development of innovative software solutions.', 'https://careers.microsoft.com', 1, '2024-02-10');

-- Insert notes
INSERT INTO notes (application_id, user_id, note) VALUES
(1, 1, 'Sent follow-up email after applying.'),
(2, 1, 'Had a phone screen, waiting for next round.'),
(3, 2, 'Need to prepare a case study for the interview.');

-- Insert interview records
INSERT INTO interviews (application_id, interview_date, interviewer, interview_notes, outcome) VALUES
(2, '2024-02-12 10:00:00', 'Alice Johnson', 'Discussed SQL and data visualization techniques.', 'Pending'),
(3, '2024-02-15 14:30:00', 'Bob Smith', 'Behavioral questions and leadership scenarios.', 'Pending');

