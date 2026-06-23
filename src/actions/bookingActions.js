export async function attendeeAction({request}) {

  const formData =await request.formData();

  const name =formData.get("name");

  const email =formData.get("email");

  const phone =formData.get("phone");

  const errors = [];

  if ( !name || name.trim().length < 3) {
    errors.push( "Name must be at least 3 characters" );
  }

  if ( !email || !email.includes("@") ) {
    errors.push( "Enter valid email" );
  }

  if (!phone ||phone.length < 10) {
    errors.push("Enter valid phone" );
  }

  if (errors.length > 0) {
    return { errors };
  }

  return {
    success: true
  };
}