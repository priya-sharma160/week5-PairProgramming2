/*
{
  "name": "Matti Seppänen",
  "email": "matti@example.com",
  "password": "M@45mtg$",
  "phone_number": "+358401234567",
  "gender": "Male",
  "date_of_birth": "2000-01-15",
  "membership_status": "Active",
  "account_verified": true,
  "country": "Finland"
}
  */
let userArray = [];

let nextId = 1;

function getAll() {
  return userArray;
}

function addOne(userData) {
  // Check if any parameter is empty or undefined
  const { name, email, password, phone_number, gender, date_of_birth,membership_status,account_verified,country } = userData;
  if (!name || !email|| !password || !phone_number || !gender || !date_of_birth ||!membership_status ||!account_verified ||!country) {
    return false;
  }

  const newItem = {
    id: nextId++,
    ...userData,
  };

  userArray.push(newItem);
  return newItem;
}

function findById(id) {
  const numericId = Number(id);
  const item = userArray.find((item) => item.id === numericId);
  return item || false;
}

function updateOneById(id, updatedData) {
  const user = findById(id);
  if (user) {
    Object.assign(user, updatedData); // Update properties using Object.assign
    return user;
  }
  return false;
}

function deleteOneById(id) {
  const item = findById(id);
  if (item) {
    const initialLength = userArray.length;
    userArray = userArray.filter((item) => item.id !== Number(id));
    return userArray.length < initialLength; // Indicate successful deletion if the length has decreased
  }
  return false; // Return false if the item was not found
}

if (require.main === module) {
  // Add user
  let result = addOne({
    name: "Matti Seppänen",
    email:"matti@example.com",
    password: "M@45mtg$",
    phone_number: +358401234567,
    gender: "Male",
    date_of_birth: "2000-01-15",
    membership_status:Active,
    account_verified:true,
    country:Finland
  });
  console.log("result", result);
  console.assert(typeof result === 'object', 'Result should be an object');

  // Add another user
  result = addOne({
    name: "Bipasa",
    email:"test@gmail.com",
    password: "pppppp33333",
    phone_number: "1234567890",
    gender: "female",
    date_of_birth: "2000-01-15",
    membership_status: Active,
    account_verified:True,
    country:Nepal
  });
  console.log(result);
  console.assert(typeof result === 'object', 'Result should be an object');

  // Get all users
  const allUsers = getAll();
  console.log("getAll called:", allUsers);
  console.assert(Array.isArray(allUsers), 'getAll should return an array');
  console.assert(allUsers.length === 2, 'getAll should return an array of length 2');

  // Find user by ID
  const user = findById(1);
  console.log("findById called:", user);
  console.assert(typeof user === 'object', 'findById should return an object');

  // Update user by ID
  const updatedUser = updateOneById(1, { date_of_birth: 31, gender: "789 Oak St" });
  console.log("updateOneById called:", updatedUser);
  console.assert(typeof updatedUser === 'object', 'updateOneById should return an object');

  // Verify update
  const updatedUserCheck = findById(1);
  console.log("findById called after item updated:", updatedUserCheck);
  console.assert(updatedUserCheck.date_of_birth === 31 && updatedUserCheck.gender === "789 Oak St", 'User should be updated');

  // Delete user by ID
  const deletedUser = deleteOneById(1);
  console.log("deleteOneById called:", deletedUser);
  console.assert(deletedUser === true, 'deleteOneById should return true');

  // Verify deletion
  const deletedUserCheck = findById(1);
  console.log("findById called after item deleted:", deletedUserCheck);
  console.assert(deletedUserCheck === false, 'User should be deleted');
}

const User = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};

module.exports = User;