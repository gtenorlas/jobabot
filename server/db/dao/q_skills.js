const db = require('../connection')

/**
 * Get all skills by id that are still active in db
 * @param (number) id, the user id
 * @return (Promise<{}>) A promise of all the skills pertaining to the user
 */
export const getSkillsByUserId = id => {
  let query = `
  SELECT
  *
FROM
  skills
WHERE
  user_id = ?
  AND deleted_at IS NULL;
  `

  const params = [id]
  return db.query(query, params).then(data => data.rows)
}
