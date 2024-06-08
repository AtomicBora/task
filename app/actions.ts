'use server';

export async function submitToken(formData: FormData) {
	console.log('token is:', formData.get('token'));
	// do something with it
	// return something if validations is present
	// for validation I would most likely use React-Hook-Form with yup or zod as I already have experience with them if it's not a problem for a component to be a client component
	// newer alternative I saw is zsa for Next.js 
}
