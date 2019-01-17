document.addEventListener("DOMContentLoaded", function() {
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
    }
  ];

  const updatedRestaurants = restaurants.map((restaurant, index) => {
    const { distance, ratingAverage, popularity } = restaurant.sortingValues;
    const topRestaurants = distance * popularity + ratingAverage;

    return {
      ...restaurant,
      sortingValues: { ...restaurant.sortingValues, topRestaurants }
    };
  });

  console.log(JSON.stringify(updatedRestaurants));
});
