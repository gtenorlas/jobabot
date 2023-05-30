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
