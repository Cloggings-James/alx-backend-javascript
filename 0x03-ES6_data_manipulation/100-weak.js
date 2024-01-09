// Export a const instance of WeakMap and name it weakMap
export const weakMap = new WeakMap();

// Export a new function named queryAPI
export function queryAPI(endpoint) {
  // Check if the endpoint is an object
  if (typeof endpoint !== "object") {
    throw new TypeError("Endpoint must be an object");
  }

  // Get the current count of queries for this endpoint
  let count = weakMap.get(endpoint) || 0;

  // If the count is >= 5, throw an error
  if (count >= 5) {
    throw new Error("Endpoint load is high");
  }

  // Increment the count and set it in the weakMap
  count++;
  weakMap.set(endpoint, count);

  // Simulate an API call
  console.log(`Calling ${endpoint.protocol}://${endpoint.name}`);
}

