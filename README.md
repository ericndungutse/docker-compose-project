#### Description

- This is a simple project built with the aim of practicing docker compose.
- The project is a composed of three main parts. React app, expressAPI, and a proxy server(nginx).
- React and express api are not accessed from outside the container, but through nginx server.

#### Architecture
![Untitled Diagram drawio](https://github.com/ericndungutse/docker-compose-project/assets/55640083/58fbbecb-4543-4761-8526-a936baed6c68)

#### How to test

- Clone this repo
- Run `docker-compose up`
- Enter ** http://localhost:3001 ** in your browser.
