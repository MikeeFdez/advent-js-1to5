/**  
 * @param {number[]} gifts - The array of gifts to prepare
 * @returns {number[]} An array with the prepared gifts
 */

 function prepareGifts(gifts) {
   // Code here
   const defArray = [...new Set(gifts)]
   return defArray.sort((a,b) => a - b);
 }
