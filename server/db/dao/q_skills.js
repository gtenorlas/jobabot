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

/**
 * Update existing skill
 * @param(json) skill data
 * @return(Promise<{}>) A promise of updated skill
 */
export const updateSkill = data => {
  let query = `
  update
    skills
  SET
    title = $1,
    category = $2,
    updated_at = NOW()
  WHERE
    id = $3
  RETURNING *;
  `

  const params = [data.title, data.category, data.id]
  return db.query(query, params).then(data => data.rows[0])
}

/**
 * Delete existing skill
 * @param(json) skill data
 * @return(Promise<{}>) A promise of updated skill
 */
export const deleteSkill = data => {
  let query = `
  update
    skills
  SET
    deleted_at = NOW()
  WHERE
    id = $1
  RETURNING *;
  `
  const params = [data.id]
  return db.query(query, params).then(data => data.rows[0])
}
