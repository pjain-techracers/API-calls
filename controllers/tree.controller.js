const path = require('path')

const tree = require('../data/tree.json')
const APP_CONSTANTS = require('../constants.js')
const {
  insertNode,
  writeJSONFile
} = require('../utils/custom-utils.js')

const getAll = async (req, res) => {
  try {
    if (!tree.length) {
      return res.status(202).send(APP_CONSTANTS.ERRORS.NOT_FOUND)
    }
    return res.status(200).json({ tree })
  } catch (error) {
    console.error('Error fetching tree:', error)
    return res.status(500).send(APP_CONSTANTS.ERRORS.SOMETHING_WENT_WRONG)
  }
}

const create = async (req, res) => {
  try {
    const { parent, label } = req.body
    if(!parent || !label) {
      return res.status(400).send(APP_CONSTANTS.ERRORS.MISSING_REQUIRED_FIELDS)
    }
    insertNode(tree, parent, label)
    writeJSONFile(path.join(__dirname, '/../data/tree.json'), tree)
    res.status(200).send(tree)
  } catch (error) {
    console.log(error)
    return res.status(500).send(APP_CONSTANTS.ERRORS.SOMETHING_WENT_WRONG)
  }
}

module.exports = {
  create,
  getAll
}
