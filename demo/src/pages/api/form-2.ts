export const prerender = false;
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, redirect }) => {
  const data = await request.formData();
  console.log(`Success!\n${data.get('name')}\n${data.get('role')}`);
  return redirect('/thank-you')
};