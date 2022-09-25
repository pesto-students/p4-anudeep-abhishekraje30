function getUser(userId) {
  const availableUserObjs = { 1: "Abhishek", 2: "Avinash", 3: "Subhash" };
  return new Promise((resolve, reject) => {
    console.log("Get user from the database.");
    if (userId in Object.keys(availableUserObjs)) {
      setTimeout(() => {
        resolve({
          userId: userId,
          username: availableUserObjs[userId],
        });
      }, 1000);
    } else {
      setTimeout(() => {
        reject(`The user Id: ${userId}, is not present in database`);
      }, 1000);
    }
  });
}

function getServices(user) {
  return new Promise((resolve, reject) => {
    console.log(`Get services of  ${user.username} from the API.`);
    setTimeout(() => {
      resolve(["Email", "VPN", "CDN"]);
    }, 2 * 1000);
  });
}

function getServiceCost(services) {
  return new Promise((resolve, reject) => {
    console.log(`Calculate service costs of ${services}.`);
    setTimeout(() => {
      resolve(services.length * 100);
    }, 3 * 1000);
  });
}

async function showServiceCostByAsyncAwait(userId) {
  try {
    let user = await getUser(userId);
    let services = await getServices(user);
    let cost = await getServiceCost(services);
    console.log(`The service cost is ${cost}`);
  } catch (error) {
    console.log(error);
  }
}

// showServiceCost(1); // It will resolve
// showServiceCost(10); // It will get rejected

const showServiceCostByGenerators = function* (userId) {
  // let user = yield getUser(userId).then(({ userId, username }) =>
  //   console.log(username)
  // );
  let user;
  let services;
  let cost;
  yield getUser(userId).then((val) => {
    user = val;
    // console.log(user);
  });
  yield getServices(user).then((val) => {
    services = val;
  });
  yield getServiceCost(services).then((val) => {
    cost = val;
  });
  console.log(`The service cost is ${cost}`);
};

const iter = showServiceCostByGenerators(1);
iter.next();
iter.next();
iter.next();
iter.next();
