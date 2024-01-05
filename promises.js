let stocks = {
  fruits: ["strawberry", "mango", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

isShopOpen = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("our shop is closed"));
    }
  });
};

order(2000, () => {
  console.log(`${stocks.fruits[0]} was selected`);
})
  .then(() => {
    return order(0, () => {
      console.log("Production has started");
    });
  })
  .then(() => {
    return order(2000, () => {
      console.log("the fruit has been chopped");
    });
  })
  .then(() => {
    return order(1000, () => {
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added`);
    });
  })
  .then(() => {
    return order(1000, () => {
      console.log("machine was started");
    });
  })
  .then(() => {
    return order(2000, () => {
      console.log(`ice cream was placed on ${stocks.holder[0]}`);
    });
  })
  .then(() => {
    return order(3000, () => {
      console.log(`${stocks.toppings[0]} was added as toppings`);
    });
  })
  .then(() => {
    return order(2000, () => {
      console.log("served icecream");
    });
  })
  .catch(() => {
    console.log("customer left");
  })
  .finally(() => {
    console.log("day ended, shop is closed");
  });
