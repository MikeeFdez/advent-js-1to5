/**
 * @param {{ name: string, quantity: number, category: string }[]} inventory
 * @returns {object} The organized inventory
 */

function organizeInventory(inventory) {
  // Lo primero que hacemos es un groupBy para obtener las categorías
  const groupedInventory = Object.groupBy(inventory, item => item.category)
  const result = {};
  // console.log(Object.keys(groupedInventory))

  // Recorremos el array resultante para hacer la suma de cada una de las cantidades.
  Object.keys(groupedInventory).forEach(category => {
    result[category] = {};
    groupedInventory[category].forEach(item => {
      result[category][item.name] = (result[category][item.name] || 0) + item.quantity;
    })
  })

  return result
}
