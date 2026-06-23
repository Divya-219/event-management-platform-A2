
export async function eventLoader({ params }) {

  const response = await fetch(
      `http://localhost:3000/events/${params.id}`
    );

  if (!response.ok) {
    throw new Error("Event not found");
  }

  return response.json();
}

export async function bookingLoader() {

  const response =
    await fetch(
      "http://localhost:3000/bookings?userId=user1"
    );

  if (!response.ok) {
    throw new Error("Bookings not found");
  }

  return response.json();
}

export async function profileLoader() {

  const response =
    await fetch(
      "http://localhost:3000/users/user1"
    );

  if (!response.ok) {
    throw new Error("User not found");
  }

  return response.json();
}