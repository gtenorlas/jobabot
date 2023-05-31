/*
All routes for skills are defined here
*/

const express = require('express')
const router = express.Router()
const dao = require('../db/dao/q_skills')

/**
 * Insert new skill
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
