export const prerender = false;
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const response = JSON.stringify({
    message: `Success!\n${data.get('name')}\n${data.get('role')}`
  });

  return new Response(response, {
    status: 200
  });
};