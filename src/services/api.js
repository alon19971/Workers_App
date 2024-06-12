const API_URL = 'https://randomuser.me/api/?results=10&seed=google';

export const fetchEmployees = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const employees = data.results.map((user, index) => ({
      id: index,
      name: `${user.name.first} ${user.name.last}`,
      fullName: `${user.name.title} ${user.name.first} ${user.name.last}`,
      age: user.dob.age,
      email: user.email,
      phone: user.phone,
      location: {
        street: user.location.street,
        city: user.location.city,
        state: user.location.state,
        country: user.location.country,
        coordinates: {
          latitude: parseFloat(user.location.coordinates.latitude),
          longitude: parseFloat(user.location.coordinates.longitude)
        }
      },
      picture: user.picture.large
    }));
    console.log('Employees:', employees);  // Log to verify data
    return employees;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};
