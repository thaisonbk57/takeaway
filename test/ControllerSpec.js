describe("sort the list of restaurants", function() {
  beforeEach(function() {
    // 1. create a list of 3 restaurants
    this.restaurants = [
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
      }
    ];

    // 2. create a list of a favorites
    this.favorites = [];
  });

  it("sort an array", function() {
    expect(sort("minCost", this.restaurants)).toEqual([
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
      }
    ]);
  });

  it("get restaurants with a specific status", function() {
    expect(getRestaurantsWithStatus(this.restaurants, "open")).toEqual([
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
      }
    ]);
  });
});
