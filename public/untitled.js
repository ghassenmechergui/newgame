// إحداثيات المواقع
const locations = [
  { x: 3, y: 4 },
  { x: 5, y: 2 },
  { x: 1, y: 7 },
  { x: 8, y: 1 }
];

// موقعك الحالي
const currentLocation = { x: 4, y: 3 };

// دالة لحساب المسافة الإقليدية
function calculateDistance(loc1, loc2) {
  return Math.sqrt(Math.pow(loc1.x - loc2.x, 2) + Math.pow(loc1.y - loc2.y, 2));
}

// البحث عن أقرب موقع
function findClosestLocation(currentLocation, locations) {
  let closestLocation = locations[0];
  let minDistance = calculateDistance(currentLocation, closestLocation);

  locations.forEach(location => {
    const distance = calculateDistance(currentLocation, location);
    if (distance < minDistance) {
      closestLocation = location;
      minDistance = distance;
    }
  });

  return closestLocation;
}

const closestLocation = findClosestLocation(currentLocation, locations);
console.log("أقرب موقع هو:", closestLocation);
