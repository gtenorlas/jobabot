const db = require('../connections')

/**
 * Get all educations by id that are still active in db
 * @param (number) id, the user id
 * @return (Promise<{}>) A promise of all the educations pertaining to the user
 */
export const getEducationsByUserId = id => {
  let query = `
  SELECT
  *
FROM
  educations
WHERE
  user_id = ?
  AND deleted_at IS NULL;
  `

  const params = [id]
  return db.query(query, params).then(data => data.rows)
}
