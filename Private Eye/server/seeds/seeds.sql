-- Insert default users
INSERT INTO users (name, email, password_hash) VALUES
('John Doe', 'john.doe@example.com', 'hashedpassword1'),
('Jane Smith', 'jane.smith@example.com', 'hashedpassword2');

-- Insert default statuses
INSERT INTO statuses (name) VALUES 
('Applied'), 
('Interviewing'), 
('Offer'), 
('Rejected');

-- Insert default companies
INSERT INTO companies (name, website, industry, location) VALUES
('Tech Corp', 'https://techcorp.com', 'Technology', 'San Francisco, CA'),
('Health Inc', 'https://healthinc.com', 'Healthcare', 'New York, NY');

-- Insert job applications
INSERT INTO applications (user_id, company_id, job_title, job_description, job_link, status_id, applied_date) VALUES
(1, 1, 'Software Engineer', 'Develop and maintain software applications.', 'https://techcorp.com/jobs/1', 1, '2025-03-01'),
(2, 2, 'Data Analyst', 'Analyze and interpret complex data sets.', 'https://healthinc.com/jobs/2', 2, '2025-03-02');

-- Insert notes
INSERT INTO notes (application_id, user_id, note) VALUES
(1, 1, 'Followed up with recruiter.'),
(2, 2, 'Scheduled interview for next week.');

-- Insert interview records
INSERT INTO interviews (application_id, interview_date, interviewer, interview_notes, outcome) VALUES
(1, '2025-03-05 10:00:00', 'Alice Johnson', 'Technical interview went well.', 'Pending'),
(2, '2025-03-06 14:00:00', 'Bob Brown', 'Behavioral interview was challenging.', 'Pending');