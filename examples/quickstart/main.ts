export default async (request: any) => {
  request.respond({
    status: 200,
    body: 'Hello, World!',
  });
};
