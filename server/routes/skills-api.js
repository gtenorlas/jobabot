/*
All routes for skills are defined here
*/

const express = require('express')
const router = express.Router()
const dao = require('../db/dao/q_skills')

/**
 * Retrieve all skilles by user id
 * @param(String) id
 * @return(json) all skills by user id
 */
router.get('/:id', (req, res) => {
  const id = req.params.id
  dao
    .getSkillsByUserId(id)
    .then(skills => res.json(skills))
    .catch(error => res.status(500).json({ error: error.message }))
})

/**
 * Save new skill
 * @returns(json) skill that is saved
 */
router.post('/', (req, res) => {
  skill = req.body
  dao
    .createSkill(skill)
    .then(data => res.json(data))
    .catch(error => res.status(500).json({ error: error.message }))
})

/**
 * Update an existing skill
 * @returns(json) skill that is updated
 */
router.put('/:id', (req, res) => {
  id = req.params.id
  dao
    .updateSkill(id)
    .then(data => res.json(data))
    .catch(error => res.status(500).json({ error: error.message }))
})

/**
 * Delete an existing skill
 * @returns(json) skill that is deleted
 */
router.delete('/:id', (req, res) => {
  id = req.params.id
  dao
    .deleteSkill(id)
    .then(data => res.json(data))
    .catch(error => res.status(500).json({ error: error.message }))
})
