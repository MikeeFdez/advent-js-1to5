/**  
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */


function createFrame(names) {
  // Code here
  let longest = 0;

  names.forEach(name => {
    if (name.length >= longest) {
      longest = name.length;
    }
  })

  // Ahora creamos el cuadrado:
  const numFilas = names.length;
  const base = '*'.repeat(longest + 4);
  let result ='';

  for (let i = 0; i < numFilas; i++) {
    result += `* ${names[i]}${' '.repeat(longest - names[i].length)} *\n`
  }

  return base + '\n' + result + base
}
