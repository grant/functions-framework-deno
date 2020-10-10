FROM hayd/alpine-deno:1.4.4
WORKDIR /app

# These steps will be re-run upon each file change in your working directory:
COPY . ./

# Added to ENTRYPOINT of base image.
CMD ["run", "--allow-env", "--allow-net", "function.ts"]
