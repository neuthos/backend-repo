class User {
  constructor(
    id,
    name,
    email,
    password,
    age,
    bio,
    ethnicity,
    height,
    location,
    availability,
    services
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.age = age;
    this.bio = bio;
    this.ethnicity = ethnicity;
    this.height = height;
    this.location = location;
    this.availability = availability;
    this.services = services;
  }
}

export default User;
