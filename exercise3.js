/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTree(height, ornament) {
  /* Code here */
  let result = '';
  const tronco = '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1);

  for (let i = 1; i <= height; i++) {
    result += '_'.repeat(height - i) + ornament.repeat(2*i - 1) + '_'.repeat(height - i) +'\n'
  }

  let tree = result + tronco + '\n' + tronco

  return tree 
}
