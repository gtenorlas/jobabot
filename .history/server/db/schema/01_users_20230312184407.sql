DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE
  users (
    id SERIAL PRIMARY KEY NOT NULL,
    user_level_id INT NOT NULL REFERENCES user_levels(id) ON DELETE CASCADE,
    email VARCHAR(250) NOT NULL,
    password VARCHAR(250) NOT NULL,
    first_name VARCHAR(250) NOT NULL,
    last_name VARCHAR(250) NOT NULL,
    gender VARCHAR(250) NOT NULL,
    line_id VARCHAR(250),
    fb_name VARCHAR(250),
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP
  );
