const express = require('express')

const router = express.Router()
const {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  getJob,
} = require('../controllers/jobs')

router.get('/', getAllJobs)
router.post('/', createJob)
router.get('/:id', getJob)
router.delete('/:id', deleteJob)
router.patch('/:id', updateJob)

module.exports = router
