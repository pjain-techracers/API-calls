const fs = require('fs')

const getNewId = (array) => {
  return Math.floor(Math.random() * 1000000)
}

function writeJSONFile (filename, content) {
  fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => {
    if (err) {
      console.log(err)
    }
  })
}

function insertNode (obj, parentId, label) {
  // Recursive function to find the parent item by id
  function findParentInChild (childrens, targetId) {
    for (let i = 0; i < childrens.length; i++) {
      for (const childkey in childrens[i]) {
        if (childkey === targetId) {
          return childrens[i][childkey]
        } else if (childrens[i][childkey].children && childrens[i][childkey].children.length > 0) {
          const result = findParentInChild(childrens[i][childkey].children, targetId)
          if (result) {
            return result
          }
        }
      }
    }
  }
  // Find the parent item
  const parentItem = findParentInChild(obj, parentId)

  if (parentItem) {
    const newItemId = getNewId() // Generate a random numeric key for the new item
    const newItem = {
      [newItemId]: {
        label: label,
        children: []
      }
    }

    // Add the new item to the parent's children
    parentItem.children.push(newItem)

    // Return the new item
    return newItem
  }
  // if not found, then add as new object
  obj.push({
    [parentId]: {
      label: label,
      children: []
    }
  })
  return obj
}

module.exports = {
  getNewId,
  writeJSONFile,
  insertNode
}
