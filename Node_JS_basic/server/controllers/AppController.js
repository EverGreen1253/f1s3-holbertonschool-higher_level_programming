export default class AppController {
  static getHomepage(request, response) {
    response.writeHead(200);
    response.end('Hello Holberton School!');
  }
}
