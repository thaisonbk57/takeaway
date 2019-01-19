// const updatedRestaurants = restaurants.map((restaurant, index) => {
//   const { distance, ratingAverage, popularity } = restaurant.sortingValues;
//   const topRestaurants = distance * popularity + ratingAverage;

//   return {
//     ...restaurant,
//     _id: index,
//     sortingValues: { ...restaurant.sortingValues, topRestaurants }
//   };
// });

// console.log(JSON.stringify(updatedRestaurants));

const DOMStrings = {
  searchKeyword: "#searchKeyword",
  sortOptions: "#sortOptions",
  submitBtn: "#submitBtn",
  sortOption: "#sortOption",
  restaurantList: "#restaurants"
};

const sortOptions = {
  bestMatch: "Best Match",
  newest: "Newest",
  ratingAverage: "Rating Average",
  distance: "Distance",
  popularity: "popularity",
  averageProductPrice: "Avg.Product Price",
  deliveryCosts: "Delivery Cost",
  minCost: "Min. Cost",
  topRestaurants: "Top Restaurants"
};

const restaurants = [
  {
    name: "Tanoshii Sushi",
    status: "open",
    sortingValues: {
      bestMatch: 0,
      newest: 96,
      ratingAverage: 4.5,
      distance: 1190,
      popularity: 17,
      averageProductPrice: 1536,
      deliveryCosts: 200,
      minCost: 1000,
      topRestaurants: 20234.5
    },
    _id: 0
  },
  {
    name: "Tandoori Express",
    status: "closed",
    sortingValues: {
      bestMatch: 1,
      newest: 266,
      ratingAverage: 4.5,
      distance: 2308,
      popularity: 123,
      averageProductPrice: 1146,
      deliveryCosts: 150,
      minCost: 1300,
      topRestaurants: 283888.5
    },
    _id: 1
  },
  {
    name: "Royal Thai",
    status: "order ahead",
    sortingValues: {
      bestMatch: 2,
      newest: 133,
      ratingAverage: 4.5,
      distance: 2639,
      popularity: 44,
      averageProductPrice: 1492,
      deliveryCosts: 150,
      minCost: 2500,
      topRestaurants: 116120.5
    },
    _id: 2
  },
  {
    name: "Sushi One",
    status: "open",
    sortingValues: {
      bestMatch: 3,
      newest: 238,
      ratingAverage: 4,
      distance: 1618,
      popularity: 23,
      averageProductPrice: 1285,
      deliveryCosts: 0,
      minCost: 1200,
      topRestaurants: 37218
    },
    _id: 3
  },
  {
    name: "Roti Shop",
    status: "open",
    sortingValues: {
      bestMatch: 4,
      newest: 247,
      ratingAverage: 4.5,
      distance: 2308,
      popularity: 81,
      averageProductPrice: 915,
      deliveryCosts: 0,
      minCost: 2000,
      topRestaurants: 186952.5
    },
    _id: 4
  },
  {
    name: "Aarti 2",
    status: "open",
    sortingValues: {
      bestMatch: 5,
      newest: 153,
      ratingAverage: 4.5,
      distance: 1605,
      popularity: 44,
      averageProductPrice: 922,
      deliveryCosts: 250,
      minCost: 500,
      topRestaurants: 70624.5
    },
    _id: 5
  },
  {
    name: "Pizza Heart",
    status: "order ahead",
    sortingValues: {
      bestMatch: 6,
      newest: 118,
      ratingAverage: 4,
      distance: 2453,
      popularity: 9,
      averageProductPrice: 1103,
      deliveryCosts: 150,
      minCost: 1500,
      topRestaurants: 22081
    },
    _id: 6
  },
  {
    name: "Mama Mia",
    status: "order ahead",
    sortingValues: {
      bestMatch: 7,
      newest: 250,
      ratingAverage: 4,
      distance: 1396,
      popularity: 6,
      averageProductPrice: 912,
      deliveryCosts: 0,
      minCost: 1000,
      topRestaurants: 8380
    },
    _id: 7
  },
  {
    name: "Feelfood",
    status: "order ahead",
    sortingValues: {
      bestMatch: 8,
      newest: 163,
      ratingAverage: 4.5,
      distance: 2732,
      popularity: 31,
      averageProductPrice: 902,
      deliveryCosts: 150,
      minCost: 1500,
      topRestaurants: 84696.5
    },
    _id: 8
  },
  {
    name: "Daily Sushi",
    status: "closed",
    sortingValues: {
      bestMatch: 9,
      newest: 221,
      ratingAverage: 4,
      distance: 1911,
      popularity: 6,
      averageProductPrice: 1327,
      deliveryCosts: 200,
      minCost: 1000,
      topRestaurants: 11470
    },
    _id: 9
  },
  {
    name: "Pamukkale",
    status: "closed",
    sortingValues: {
      bestMatch: 10,
      newest: 201,
      ratingAverage: 4,
      distance: 2353,
      popularity: 25,
      averageProductPrice: 968,
      deliveryCosts: 0,
      minCost: 2000,
      topRestaurants: 58829
    },
    _id: 10
  },
  {
    name: "Indian Kitchen",
    status: "open",
    sortingValues: {
      bestMatch: 11,
      newest: 272,
      ratingAverage: 4.5,
      distance: 2308,
      popularity: 5,
      averageProductPrice: 1189,
      deliveryCosts: 150,
      minCost: 1300,
      topRestaurants: 11544.5
    },
    _id: 11
  },
  {
    name: "CIRO 1939",
    status: "open",
    sortingValues: {
      bestMatch: 12,
      newest: 231,
      ratingAverage: 4.5,
      distance: 3957,
      popularity: 79,
      averageProductPrice: 1762,
      deliveryCosts: 99,
      minCost: 1300,
      topRestaurants: 312607.5
    },
    _id: 12
  },
  {
    name: "Zenzai Sushi",
    status: "closed",
    sortingValues: {
      bestMatch: 13,
      newest: 155,
      ratingAverage: 4,
      distance: 2911,
      popularity: 36,
      averageProductPrice: 1579,
      deliveryCosts: 0,
      minCost: 2000,
      topRestaurants: 104800
    },
    _id: 13
  },
  {
    name: "Fes Patisserie",
    status: "order ahead",
    sortingValues: {
      bestMatch: 14,
      newest: 77,
      ratingAverage: 4,
      distance: 2302,
      popularity: 3,
      averageProductPrice: 1214,
      deliveryCosts: 150,
      minCost: 1250,
      topRestaurants: 6910
    },
    _id: 14
  },
  {
    name: "Yvonne's Vispaleis",
    status: "order ahead",
    sortingValues: {
      bestMatch: 15,
      newest: 150,
      ratingAverage: 5,
      distance: 2909,
      popularity: 3,
      averageProductPrice: 2557,
      deliveryCosts: 150,
      minCost: 1750,
      topRestaurants: 8732
    },
    _id: 15
  },
  {
    name: "De Amsterdamsche Tram",
    status: "open",
    sortingValues: {
      bestMatch: 304,
      newest: 131,
      ratingAverage: 0,
      distance: 2792,
      popularity: 0,
      averageProductPrice: 892,
      deliveryCosts: 0,
      minCost: 0,
      topRestaurants: 0
    },
    _id: 16
  },
  {
    name: "Lale Restaurant & Snackbar",
    status: "order ahead",
    sortingValues: {
      bestMatch: 305,
      newest: 73,
      ratingAverage: 0,
      distance: 2880,
      popularity: 0,
      averageProductPrice: 838,
      deliveryCosts: 0,
      minCost: 0,
      topRestaurants: 0
    },
    _id: 17
  },
  {
    name: "Lunchpakketdienst",
    status: "open",
    sortingValues: {
      bestMatch: 306,
      newest: 259,
      ratingAverage: 3.5,
      distance: 14201,
      popularity: 0,
      averageProductPrice: 4465,
      deliveryCosts: 500,
      minCost: 5000,
      topRestaurants: 3.5
    },
    _id: 18
  }
];

const favoriteRestaurants = [1, 2, 0]; //containing _id(s) of restaurants

/////////////////////////////////////////////

/**
 *
 * @param {string} sortOption
 * @param {Array} arr  an array of restaurants
 * function returns a sorted array based on the sortOption
 */
function sort(sortOption, arr) {
  const newArr = arr.sort((a, b) => {
    return b.sortingValues[sortOption] - a.sortingValues[sortOption];
  });
  return newArr;
}

/**
 *
 * @param {*} restaurant restaurant object
 * @param {boolean} liked  is this a favorite restaurant ?
 * @param {String} sortOption
 * function will return a HTML string represent the restaurant.
 */
function generateTemplate(restaurant, sortOption, liked = false) {
  const { _id, name, status } = restaurant;
  const sortValue = restaurant.sortingValues[sortOption];

  return `
  <div data-id=${_id} class="row restaurant pb-1 pt-2">
    <div class="restaurant--name col-6 text-left">
    <span class="favoriteIcon mr-2 ${liked ? "liked" : ""}">
    <i class="far fa-star"></i>
  </span><span>${name}</span>
    </div>
    <div style='color: ${
      status == "open" ? "green" : status == "order ahead" ? "orange" : "gray"
    } ' class="restaurant--opening-state text-center col-3">
      ${status}
    </div>
    <div class="restaurant--sortValue col-3 text-center">${sortValue}</div>
  </div>
  `;
}

/**
 *
 * @param {HTMLstring} HTMLString
 */
function renderRestaurantToDOM(HTMLString) {
  document
    .querySelector(DOMStrings.restaurantList)
    .insertAdjacentHTML("beforeend", HTMLString);
}

/**
 *
 * @param {event Object} e
 */
function toggleFavoriteRestaurant(e, cb) {
  // 1. get _id of the restaurant
  const _id =
    e.target.parentElement.parentElement.parentElement.dataset.id ||
    e.target.parentElement.parentElement.dataset.id;

  // 2. check if the _id is included in favoriteRestaurant
  if (favoriteRestaurants.indexOf(parseInt(_id)) !== -1) {
    // 2.1 if YES: remove from favorites

    let index = favoriteRestaurants.indexOf(parseInt(_id));
    favoriteRestaurants.splice(index, 1);
  } else {
    // 2.2 if NO: add to favorites
    favoriteRestaurants.push(parseInt(_id));
  }

  // 3. re-render the list
  cb();
}

/**
 *
 * @param {Array of restaurants} arr
 * @param {'open' || 'closed' || 'order ahead'} status
 * return a new Array of restaurants
 */
function getRestaurantsWithStatus(arr, status) {
  return arr.filter(restaurant => {
    return restaurant.status === status;
  });
}

function sortAndRender(e) {
  // 0. clear the list of restaurant first
  document.querySelector(DOMStrings.restaurantList).innerHTML = "";

  // 1. get sortOption and get searchKeyword
  const sortOpt = document.querySelector(DOMStrings.sortOptions).value;
  const searchKeyword = document.querySelector(DOMStrings.searchKeyword).value;

  // 1.1 get restaurants that match the searchKey
  const matchingRestaurants = restaurants.filter(restaurant => {
    return restaurant.name
      .toLowerCase()
      .includes(searchKeyword.toLowerCase().trim());
  });

  // 2. display sortOption to the 3rd. column in resutls table
  document.querySelector(DOMStrings.sortOption).innerHTML =
    sortOptions[sortOpt];

  // 3. get favorites and normal restaurants
  const favorites = matchingRestaurants.filter(restaurant => {
    return favoriteRestaurants.indexOf(restaurant._id) !== -1;
  });

  const normals = matchingRestaurants.filter(restaurant => {
    return favoriteRestaurants.indexOf(restaurant._id) === -1;
  });

  // 4. get restaurants that is favorited & open, then sort them
  const sortedFavoriteAndOpen = sort(
    sortOpt,
    getRestaurantsWithStatus(favorites, "open")
  );

  const sortedFavoriteAndOrderAhead = sort(
    sortOpt,
    getRestaurantsWithStatus(favorites, "order ahead")
  );

  const sortedFavoriteAndClosed = sort(
    sortOpt,
    getRestaurantsWithStatus(favorites, "closed")
  );

  // 4.1. get restaurants that is normal and open
  const sortedNormalAndOpen = sort(
    sortOpt,
    getRestaurantsWithStatus(normals, "open")
  );
  const sortedNormalAndOrderAhead = sort(
    sortOpt,
    getRestaurantsWithStatus(normals, "order ahead")
  );

  const sortedNormalAndClosed = sort(
    sortOpt,
    getRestaurantsWithStatus(normals, "closed")
  );

  // 5. loop through them and then add render them to the DOM
  sortedFavoriteAndOpen.forEach(restaurant => {
    renderRestaurantToDOM(generateTemplate(restaurant, sortOpt, true));
  });
  sortedFavoriteAndOrderAhead.forEach(restaurant => {
    renderRestaurantToDOM(generateTemplate(restaurant, sortOpt, true));
  });
  sortedFavoriteAndClosed.forEach(restaurant => {
    renderRestaurantToDOM(generateTemplate(restaurant, sortOpt, true));
  });
  sortedNormalAndOpen.forEach(restaurant => {
    renderRestaurantToDOM(generateTemplate(restaurant, sortOpt));
  });
  sortedNormalAndOrderAhead.forEach(restaurant => {
    renderRestaurantToDOM(generateTemplate(restaurant, sortOpt));
  });
  sortedNormalAndClosed.forEach(restaurant => {
    renderRestaurantToDOM(generateTemplate(restaurant, sortOpt));
  });
}

document.addEventListener("DOMContentLoaded", function() {
  // trigger the sortAndRender function when user change sortOption
  document
    .querySelector(DOMStrings.sortOptions)
    .addEventListener("change", sortAndRender);

  // trigger the sortAndRender funciton when user enter a searchKey
  document
    .querySelector(DOMStrings.searchKeyword)
    .addEventListener("input", sortAndRender);

  // run the sortAndRender func on start of the app
  sortAndRender();

  document.getElementById("restaurants").addEventListener("click", function(e) {
    toggleFavoriteRestaurant(e, sortAndRender);
  });

  // toggle searchBar on the small screens
  document.querySelector("#toggleFormBtn").addEventListener("click", () => {
    document.querySelector("#searchForm").classList.toggle("show");
  });
});
