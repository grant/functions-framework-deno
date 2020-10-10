import { ServerRequest } from "https://deno.land/std@0.74.0/http/server.ts";

/**
 * Send "Hello, World!"
 * @param request The Deno request https://deno.land/std@0.74.0/http/server.ts
 */
export default async (request: ServerRequest) => {
  request.respond({
    status: 200,
    body: 'Hello, World!',
  });
};