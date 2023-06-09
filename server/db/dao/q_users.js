const db = require('../connection')

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise of the user.
 */
const getUserWithEmail = function (email) {
  return db
    .query(
      `
    SELECT u.*, p.id AS profile_id, p.* FROM
      users AS u
    LEFT JOIN profiles AS p ON u.id=p.user_id
    WHERE email=$1 AND u.deleted_at IS NULL AND p.deleted_at IS NULL;`,
      [email]
    )
    .then(result => result.rows)
}
exports.getUserWithEmail = getUserWithEmail

/**
 * Add a new user to the database.
 * @param {{email: string, password: string}} user
 * @return {Promise<{}>} A promise of the user.
 */
const addUser = function (user) {
  const queryValue = [user.email, user.password]
  return db
    .query(
      `INSERT INTO users (email, password) values ($1, $2) RETURNING *;`,
      queryValue
    )
    .then(result => result.rows[0])
}
exports.addUser = addUser

/**
 * Update a user.
 * @param {{id: string, updatedEmail: string, updatedPassword: string}} user
 * @return {Promise<{}>} A promise of the user.
 */
const updateUser = function (user) {
  const queryValue = [user.id, user.updatedEmail, user.updatedPassword]
  return db
    .query(
      `UPDATE users SET email=$2, password=$3, updated_at=NOW() WHERE id=$1 RETURNING *;`,
      queryValue
    )
    .then(result => result.rows[0])
}
exports.updateUser = updateUser

/**
 * Delete a user.
 * @param {id: string} user id
 * @return {Promise<{}>} A promise of the user.
 */
const deleteUserWithId = function (id) {
  return db
    .query(`UPDATE users SET deleted_at=NOW() WHERE id=$1 RETURNING *;`, [id])
    .then(result => result.rows[0])
}
exports.deleteUserWithId = deleteUserWithId
