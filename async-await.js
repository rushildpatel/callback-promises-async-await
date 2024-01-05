let stocks = {
  fruits: ["strawberry", "mango", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

isShopOpen = false;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("shop is closed"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.fruits[0]} was selected`);

    await time(0);
    console.log("Production has started");

    await time(2000);
    console.log("the fruit has been chopped");

    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added`);

    await time(1000);
    console.log("machine was started");

    await time(2000);
    console.log(`ice cream was placed on ${stocks.holder[0]}`);

    await time(3000);
    console.log(`${stocks.toppings[0]} was added as toppings`);

    await time(2000);
    console.log("served icecream");
  } catch (err) {
    console.log("customer left", err);
  } finally {
    console.log("day ended shop closed");
  }
}

kitchen();
