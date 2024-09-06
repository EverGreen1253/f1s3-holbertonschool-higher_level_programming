export default class AppController {
  // https://stackoverflow.com/questions/34275287/how-to-send-just-a-200-response-in-express-js
  static getHomepage(request, response) {
    response.status(200).end('Hello Holberton School!');
  }
}
