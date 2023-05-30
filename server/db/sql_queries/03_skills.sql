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
