DROP TABLE IF EXISTS educations CASCADE;

CREATE TABLE educations(
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INT NOT NULL REFERENCES Users (id) ON DELETE CASCADE,
  school VARCHAR(255) NOT NULL,
  field VARCHAR(255) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE,
  description VARCHAR(1000),
  index INT,
  alternative_name VARCHAR(255),
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  modified_at TIMESTAMP,
  deleted_at TIMESTAMP
);
