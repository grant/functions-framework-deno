# Deno Functions Framework

> **WARNING: WIP**

A lightweight, open source FaaS (Function as a Service) framework for Deno.

The framework allows you to go from:

```ts
/**
 * Send "Hello, World!"
 * @param request The Deno request https://deno.land/std@0.74.0/http/server.ts
 */
export default async (request) => {
  request.respond({
    status: 200,
    body: 'Hello, World!',
  });
};
```

To:

```sh
curl http://my-url
# Output: Hello, World!
```

All without needing to worry about writing an HTTP server or complicated request handling logic.

## Features

- Spin up a local development server for quick testing
- Invoke a function in response to a request
- ~~Automatically unmarshal events conforming to the
  [CloudEvents](https://cloudevents.io/) spec~~
- Portable between serverless platforms

## Installation

There's no installation step for this library. It's Deno.

## Quickstart

> Assumes you have [Deno installed](https://deno.land/#installation)

1. Create an `main.ts` file with the following contents:

    ```ts
    export default async (request) => {
      request.respond({
        status: 200,
        body: 'Hello, World!',
      });
    };
    ```

1. Start the local server:

    ```sh
    deno run --allow-net --allow-read --allow-env main.ts
    ```

1. Send requests to this function using `curl` from another terminal window:

    ```sh
    curl localhost:8080
    Output: Hello, World!
    ```

## Run in Container

You can also run this server in a container:

```sh
docker run -it --init \
-p 8080:8080 \
-v $PWD:/app hayd/alpine-deno:1.4.4 \
run --allow-net --allow-read --allow-env /app/main.ts
```

## Deploy to Cloud Run

> Currently doesn't work due to a gvizor issue.

```sh
PROJECT=$(gcloud config get-value core/project 2> /dev/null)
gcloud builds submit --tag gcr.io/$PROJECT/deno-ff
gcloud run deploy deno-ff \
--image gcr.io/$PROJECT/deno-ff \
--allow-unauthenticated
```

Current error:

```
Gvizor: Container Sandbox: Unsupported syscall setsockopt
```

- https://cloud.google.com/run/docs/troubleshooting#sandbox
- https://github.com/google/gvisor/issues/1739

## Publish

TODO: Publish this to a separate repo:

https://dev.to/craigmorten/how-to-publish-deno-modules-2cg6