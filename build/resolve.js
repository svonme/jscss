const path = require('path')

function resolve (dir) {
  let root = path.join(__dirname, '..')
  if (dir) {
    return path.join(root, dir)
  }
  return root
}

module.exports = resolve
