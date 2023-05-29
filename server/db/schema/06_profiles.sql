DROP TABLE IF EXISTS profiles CASCADE;

CREATE TABLE profiles(
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INT REFERENCES users(id) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  phone_number VARCHAR(255) NOT NULL,
  linkedin VARCHAR(255),
  github VARCHAR(255),
  website VARCHAR(255),
  city VARCHAR(255),
  province VARCHAR(255),
  country VARCHAR(255),
  avatar VARCHAR(255),
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP,
  deleted_at TIMESTAMP
);

