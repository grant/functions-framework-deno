/**
 * webserver.ts
 */
import { serve, Server } from "https://deno.land/std@0.74.0/http/server.ts";
import "https://deno.land/x/dotenv/load.ts";
import * as functions from './function.ts';

// Config
const FUNCTION_TARGET: string = Deno.env.get('FUNCTION_TARGET') || '';
const PORT: number = +(Deno.env.get('PORT') || 8080);

// Serve
const server: Server = serve({
  hostname: "0.0.0.0",
  port: PORT
});
console.log(`HTTP webserver running. Access it at:  http://localhost:${PORT}/`);

for await (const request of server) {
  functions.default(request);
}