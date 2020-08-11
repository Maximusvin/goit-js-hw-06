'use strict';
import users from './users.js';

// ====================== task-1 ==========================================
const getUserNames = users => {
  return users.map(user => user.name);
};

console.group('Task-1');
console.log(getUserNames(users));
console.groupEnd();
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// ======================= task-2 =========================================
const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
};

console.group('Task-2');
console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
console.groupEnd();

// ======================== task-3 =======================================
const getUsersWithGender = (users, gender) => {
  return users.filter(user => user.gender === gender).map(user => user.name);
};

console.group('Task-3');
console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
console.groupEnd();

// ======================== task-4 =======================================
const getInactiveUsers = users => {
  return users.filter(user => !user.isActive);
};

console.group('Task-4');
console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
console.groupEnd();

// ======================== task-5 =======================================
const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};

console.group('Task-5');
console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
console.groupEnd();

// ======================== task-6 =======================================
const getUsersWithAge = (users, min, max) => {
  return users.filter(user => user.age >= min && user.age <= max);
};

console.group('Task-6');
console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
console.log(getUsersWithAge(users, 30, 40));
console.groupEnd();
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// ======================== task-7 =======================================
const calculateTotalBalance = users => {
  return users.reduce((acc, users) => acc + users.balance, 0);
};

console.group('Task-7');
console.log(calculateTotalBalance(users)); // 20916
console.groupEnd();

// ======================== task-8 =======================================
const getUsersWithFriend = (users, friendName) => {
  return users.filter(user => user.friends.includes(friendName)).map(user => user.name);
};

console.group('Task-8');
console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
console.groupEnd();

// ======================== task-9 =======================================
const getNamesSortedByFriendsCount = users => {
  const userFriends = users.reduce((acc, users) => acc + users.friends.length, 0);
  return userFriends;
};

console.group('Task-9');
console.log(getNamesSortedByFriendsCount(users));
console.groupEnd();
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
