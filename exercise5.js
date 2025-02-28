/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */


function organizeShoes(shoes) {
  let result = [];

  for (let i = 0; i < shoes.length; i++) {
    for (let j = i + 1; j < shoes.length; j++) {
      if (shoes[i]["type"] !== shoes[j]["type"] && shoes[i]["size"] === shoes[j]["size"]) {
        result.push(shoes[j]["size"]);
        console.log(shoes)
        shoes.splice(j,1);
        console.log(shoes)
        j--;
        console.log(j)
        shoes.splice(i,1);
        console.log(shoes)
      }
    }
  }

  return result;
}
