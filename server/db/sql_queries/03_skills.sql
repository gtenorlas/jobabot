/*
 Retrieve all skills for a give user id
 */
SELECT
  *
FROM
  skills
WHERE
  user_id = 1
  AND deleted_at IS NULL;

/*
 Update a skill record by id
 */
update
  skills
SET
  title = '',
  category = '',
  updated_at = NOW()
WHERE
  id = 1;

/*
 Add a new skill record
 */
INSERT INTO
  skills (user_id, title, category)
VALUES
(1, '', '') RETURNING *;
