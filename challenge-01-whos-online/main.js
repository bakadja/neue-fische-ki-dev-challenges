/*
Algorithm: Get Who is Online
Input: array of users
Output: object with user there online and offline
BuildsJs methode: reducer
*/

const users = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

function getUserByStatus(users) {
  // const usersStatus = users.reduce((acc, currentUser) => {
  //   if (currentUser.status === "online" && currentUser.lastActivity > 10)
  //     return { ...acc, ["away"]: [currentUser.username] };
  //   return { ...acc, [currentUser.status]: [currentUser.username] };
  // }, {});
  // return usersStatus;
  return users.reduce(
    (acc, currentUser) =>
      currentUser.status === "online" && currentUser.lastActivity > 10
        ? { ...acc, ["away"]: [currentUser.username] }
        : { ...acc, [currentUser.status]: [currentUser.username] },
    {},
  );
}

console.log(getUserByStatus(users));
