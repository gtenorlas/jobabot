DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE
  users (
    id SERIAL PRIMARY KEY NOT NULL,
    user_level_id INT NOT NULL REFERENCES user_levels(id) ON DELETE CASCADE,
    email VARCHAR(250) NOT NULL,
    password VARCHAR(250) NOT NULL,
  );
