/* // The data model for tour is as follows
{
    "model": "Corolla",
    "color": "Red",
    "age": 3
}
 */
let tourArray = [];

let nextId = 1;

function getAll() {
  return tourArray;
}

function addOne(tourData) {
  // Check if any parameter is empty or undefined
  const { model, color, age } = tourData;
  if (!model || !color || !age) {
    return false;
  }

  const newItem = {
    id: nextId++,
    ...tourData,
  };

  tourArray.push(newItem);
  return newItem;
}

function findById(id) {
  const numericId = Number(id);
  const item = tourArray.find((item) => item.id === numericId);
  return item || false;
}

function updateOneById(id, updatedData) {
  const tour = findById(id);
  if (tour) {
    Object.assign(tour, updatedData); // Update properties using Object.assign
    return tour;
  }
  return false;
}

function deleteOneById(id) {
  const item = findById(id);
  if (item) {
    const initialLength = tourArray.length;
    tourArray = tourArray.filter((item) => item.id !== Number(id));
    return tourArray.length < initialLength; // Indicate successful deletion if the length has decreased
  }
  return false; // Return false if the item was not found
}

if (require.main === module) {
  // Add tour
  let result = addOne({ model: "Corolla", color: "Red", age: 3 });
  console.log("result", result);
  console.assert(typeof result === 'object', 'Result should be an object');

  // Add another tour
  result = addOne({ model: "Civic", color: "Blue", age: 2 });
  console.log(result);
  console.assert(typeof result === 'object', 'Result should be an object');

  // Get all tours
  const alltours = getAll();
  console.log("getAll called:", alltours);
  console.assert(Array.isArray(alltours), 'getAll should return an array');
  console.assert(alltours.length === 2, 'getAll should return an array of length 2');

  // Find tour by ID
  const tour = findById(1);
  console.log("findById called:", tour);
  console.assert(typeof tour === 'object', 'findById should return an object');

  // Update tour by ID
  const updatedtour = updateOneById(1, { age: 4, color: "Black" });
  console.log("updateOneById called:", updatedtour);
  console.assert(typeof updatedtour === 'object', 'updateOneById should return an object');

  // Verify update
  const updatedtourCheck = findById(1);
  console.log("findById called after item updated:", updatedtourCheck);
  console.assert(updatedtourCheck.age === 4 && updatedtourCheck.color === "Black", 'tour should be updated');

  // Delete tour by ID
  const deletedtour = deleteOneById(1);
  console.log("deleteOneById called:", deletedtour);
  console.assert(deletedtour === true, 'deleteOneById should return true');

  // Verify deletion
  const deletedtourCheck = findById(1);
  console.log("findById called after item deleted:", deletedtourCheck);
  console.assert(deletedtourCheck === false, 'tour should be deleted');
}

const tour = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};

module.exports = tour;