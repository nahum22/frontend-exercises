// 1. Calculate Total Travel Time
const destinations1 = [
    { name: 'Paris', distance: 500, speed: 50 },
    { name: 'London', distance: 200, speed: 70 },
    {
      name: 'New York',
      distance: 3000,
      speed: 500,
    },
  ];
  
  // 2. Find Longest Travel Route
  const destinations2 = [
    {
      name: 'Paris',
      routes: [
        { name: 'Route 1', distance: 300 },
        { name: 'Route 2', distance: 250 },
      ],
    },
    {
      name: 'London',
      routes: [
        { name: 'Route 1', distance: 200 },
        { name: 'Route 2', distance: 280 },
      ],
    },
  ];
  
  // 3. Sort Destinations by Distance
  const destinations3 = [
    {
      name: 'Paris',
      routes: [
        { distance: 300 },
        { distance: 250 },
      ],
    },
    {
      name: 'London',
      routes: [
        { distance: 200 },
        { distance: 280 },
      ],
    },
  ];
  
  // 4. Travel Itinerary
  const destinations4 = [
    { name: 'Paris', connections: ['London'] },
    { name: 'London', connections: ['New York'] },
    { name: 'New York', connections: [] },
  ];
  const start4 = 'Paris';
  
  // 5. Least Number of Connections
  const destinations5 = [
    {
      name: 'Paris',
      connections: ['London', 'New York'],
    },
    { name: 'London', connections: ['New York'] },
    { name: 'New York', connections: [] },
  ];
  