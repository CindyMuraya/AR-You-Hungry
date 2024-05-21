// Path: /mongodb/queries.js

// The current database to use.
use(database);

// Create a new collection.
db.createCollection(restaurants);

// The prototype form to create a collection:
/* db.createCollection( <name>,
  {
    capped: <boolean>,
    autoIndexId: <boolean>,
    size: <number>,
    max: <number>,
    storageEngine: <document>,
    validator: <document>,
    validationLevel: <string>,
    validationAction: <string>,
    indexOptionDefaults: <document>,
    viewOn: <string>,
    pipeline: <pipeline>,
    collation: <document>,
    writeConcern: <document>,
    timeseries: { // Added in MongoDB 5.0
      timeField: <string>, // required for time series collections
      metaField: <string>,
      granularity: <string>,
      bucketMaxSpanSeconds: <number>, // Added in MongoDB 6.3
      bucketRoundingSeconds: <number>, // Added in MongoDB 6.3
    },
    expireAfterSeconds: <number>,
    clusteredIndex: <document>, // Added in MongoDB 5.3
  }
)*/

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/
// Switch to the database.
use ('ARYouHungry')

// Create a new collection named "restaurants"
db.createCollection("restaurants")

// Insert the restaurant data into the restaurants collection.
db.restaurants.insertMany([
    {
        name: "Italian Bistro",
        location: "New York",
        cuisine: "Italian",
        rating: 4.5,
        tables: 10,
        reservations: []
    },
    {
        name: "Spice &amp; Smoke BBQ",
        location: "Seattle",
        cuisine: "BBQ",
        rating: 4.3,
        tables: 12,
        reservations: []
    },
    {
        name: "Szechuan Delight",
        location: "San Francisco",
        cuisine: "Chinese",
        rating: 4.7,
        tables: 15,
        reservations: []
    },
    {
        name: "Taco Palace",
        location: "Austin",
        cuisine: "Mexican",
        rating: 4.3,
        tables: 12,
        reservations: []
    },
    {
        name: "Spice Haven",
        location: "Chicago",
        cuisine: "Indian",
        rating: 4.6,
        tables: 8,
        reservations: []
    },
    {
        name: "Sushi World",
        location: "Los Angeles",
        cuisine: "Sushi",
        rating: 4.8,
        tables: 20,
        reservations: []
    },
    {
        name: "Sushi Zen",
        location: "Vancouver",
        cuisine: "Sushi",
        rating: 4.5,
        tables: 13,
        reservations: []
    },
    {
        name: "La Trattoria",
        location: "Hollywood",
        cuisine: "Italian",
        rating: 4.8,
        tables: 27,
        reservations: []
    },
    {
        name: "The Sizzling Grill",
        location: "Texas",
        cuisine: "Steakhouse",
        rating: 4.7,
        tables: 14,
        reservations: []
    },
    {
        name: "Sushi Paradise",
        location: "California",
        cuisine: "Sushi",
        rating: 4.7,
        tables: 15,
        reservations: []
    },
    {
        name: "Curry Kingdom",
        location: "New York",
        cuisine: "Indian",
        rating: 4.8,
        tables: 24,
        reservations: []
    },
    {
        name: "Mamma Mia Pizzeria",
        location: "Texas",
        cuisine: "Pizza",
        rating: 4.4,
        tables: 16,
        reservations: []
    },
    {
        name: "Burger Barn",
        location: "Texas",
        cuisine: "Burger",
        rating: 4.7,
        tables: 14,
        reservations: []
    },
    {
        name: "French Quarter",
        location: "New Orleans",
        cuisine: "Pizza",
        rating: 4.9,
        tables: 18,
        reservations: []
    },
    {
        name: "BBQ Central",
        location: "Dallas",
        cuisine: "Barbecue",
        rating: 4.6,
        tables: 25,
        reservations: []
    },
    {
        name: "Italian Delight",
        location: "Portland",
        cuisine: "Italian",
        rating: 4.4,
        tables: 10,
        reservations: []
    },
    {
        name: "The Taverna",
        location: "Miami",
        cuisine: "Steakhouse",
        rating: 4.5,
        tables: 15,
        reservations: []
    },
    {
        name: "Tapas Fiesta",
        location: "San Diego",
        cuisine: "Mexican",
        rating: 4.7,
        tables: 12,
        reservations: []
    },
    {
        name: "Urban Burger",
        location: "Nashville",
        cuisine: "Burger",
        rating: 4.2,
        tables: 30,
        reservations: []
    },
    {
        name: "Pho House",
        location: "Seattle",
        cuisine: "Chinese",
        rating: 4.6,
        tables: 10,
        reservations: []
    },
    {
        name: "Indian Spice",
        location: "Phoenix",
        cuisine: "Indian",
        rating: 4.7,
        tables: 15,
        reservations: []
    },
    {
        name: "Mexican Magic",
        location: "Las Vegas",
        cuisine: "Mexican",
        rating: 4.5,
        tables: 20,
        reservations: []
    },
    {
        name: "Korean BBQ Grill",
        location: "Atlanta",
        cuisine: "BBQ",
        rating: 4.8,
        tables: 18,
        reservations: []
    }
]);

// Create indexes on the fields to improve query performance.
db.restaurants.createIndex({ name: 1 });
db.restaurants.createIndex({ location: 1 });
db.restaurants.createIndex({ cuisine: 1 });

// Create an index on the "rating" field to improve query performance.
db.restaurants.createIndex({ rating: 1 });

// Create an index on the "tables" field to improve query performance.
db.restaurants.createIndex({ tables: 1 });

// Create an index on the "reservations" field to improve query performance.
db.restaurants.createIndex({ reservations: 1 });

// Create a compound index on the "location" and "cuisine" fields to improve query performance.
db.restaurants.createIndex({ location: 1, cuisine: 1 });

// Create a compound index on the "location" and "rating" fields to improve query performance.
db.restaurants.createIndex({ location: 1, rating: 1 });

// Create a compound index on the "cuisine" and "rating" fields to improve query performance.
db.restaurants.createIndex({ cuisine: 1, rating: 1 });

// Create a compound index on the "cuisine" and "tables" fields to improve query performance.
db.restaurants.createIndex({ cuisine: 1, tables: 1 });

// Create a compound index on the "rating" and "tables" fields to improve query performance.
db.restaurants.createIndex({ rating: 1, tables: 1 });

// Create a compound index on the "tables" and "reservations" fields to improve query performance.
db.restaurants.createIndex({ tables: 1, reservations: 1 });

// Create a compound index on the "location", "cuisine", and "rating" fields to improve query performance.
db.restaurants.createIndex({ location: 1, cuisine: 1, rating: 1 });

// Create a compound index on the "cuisine", "rating", and "tables" fields to improve query performance.
db.restaurants.createIndex({ cuisine: 1, rating: 1, tables: 1 });

// Create a compound index on the "rating", "tables", and "reservations" fields to improve query performance.
db.restaurants.createIndex({ rating: 1, tables: 1, reservations: 1 });

// Create a compound index on the "location", "cuisine", "rating", and "tables" fields to improve query performance.
db.restaurants.createIndex({ location: 1, cuisine: 1, rating: 1, tables: 1 });

// Create a compound index on the "cuisine", "rating", "tables", and "reservations" fields to improve query performance.
db.restaurants.createIndex({ cuisine: 1, rating: 1, tables: 1, reservations: 1 });

// Create a compound index on the "location", "cuisine", "rating", "tables", and "reservations" fields to improve query performance.
db.restaurants.createIndex({ location: 1, cuisine: 1, rating: 1, tables: 1, reservations: 1 });

// Query the restaurants collection to find all Italian restaurants in New York with a rating of 4.5 or higher.
db.restaurants.find({ cuisine: "Italian", location: "New York", rating: { $gte: 4.5 } });

// Query the restaurants collection to find all BBQ restaurants in Seattle with a rating of 4.3 or higher.
db.restaurants.find({ cuisine: "BBQ", location: "Seattle", rating: { $gte: 4.3 } });

// Query the restaurants collection to find all Chinese restaurants in San Francisco with a rating of 4.7 or higher.
db.restaurants.find({ cuisine: "Chinese", location: "San Francisco", rating: { $gte: 4.7 } });

// Query the restaurants collection to find all Mexican restaurants in Austin with a rating of 4.3 or higher.
db.restaurants.find({ cuisine: "Mexican", location: "Austin", rating: { $gte: 4.3 } });

// Query the restaurants collection to find all Indian restaurants in Chicago with a rating of 4.6 or higher.
db.restaurants.find({ cuisine: "Indian", location: "Chicago", rating: { $gte: 4.6 } });

// Query the restaurants collection to find all Sushi restaurants in Los Angeles with a rating of 4.8 or higher.
db.restaurants.find({ cuisine: "Sushi", location: "Los Angeles", rating: { $gte: 4.8 } });

// Query the restaurants collection to find all Sushi restaurants in Vancouver with a rating of 4.5 or higher.
db.restaurants.find({ cuisine: "Sushi", location: "Vancouver", rating: { $gte: 4.5 } });

// Query the restaurants collection to find all Italian restaurants in Hollywood with a rating of 4.8 or higher.
db.restaurants.find({ cuisine: "Italian", location: "Hollywood", rating: { $gte: 4.8 } });

// Query the restaurants collection to find all Steakhouse restaurants in Texas with a rating of 4.7 or higher.
db.restaurants.find({ cuisine: "Steakhouse", location: "Texas", rating: { $gte: 4.7 } });

// Query the restaurants collection to find all Sushi restaurants in California with a rating of 4.7 or higher.
db.restaurants.find({ cuisine: "Sushi", location: "California", rating: { $gte: 4.7 } });

// Query the restaurants collection to find all Indian restaurants in New York with a rating of 4.8 or higher.
db.restaurants.find({ cuisine: "Indian", location: "New York", rating: { $gte: 4.8 } });

// Query the restaurants collection to find all Pizza restaurants in Texas with a rating of 4.4 or higher.
db.restaurants.find({ cuisine: "Pizza", location: "Texas", rating: { $gte: 4.4 } });

// Query the restaurants collection to find all Burger restaurants in Texas with a rating of 4.7 or higher.
db.restaurants.find({ cuisine: "Burger", location: "Texas", rating: { $gte: 4.7 } });

// Query the restaurants collection to find all Pizza restaurants in New Orleans with a rating of 4.9 or higher.
db.restaurants.find({ cuisine: "Pizza", location: "New Orleans", rating: { $gte: 4.9 } });