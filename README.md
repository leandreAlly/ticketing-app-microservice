# GitTix - Ticketing Booking App

GitTix is microservices ticketing booking app based on event driven architecture that allows users to create one time tickets and sales them. This README provides the information on how this app works and how to run them in your development envionments.

## Technology Stack

GitTix is built using the following technologies:

#### Development Stack

[![Stack Used](https://skillicons.dev/icons?i=js,typescript,nodejs,express,nextjs,jest,githubactions&theme=dark)](https://skillicons.dev)

#### Database and Data Storage

[![Stack Used](https://skillicons.dev/icons?i=mongodb,redis&theme=dark)](https://skillicons.dev)

#### Containerization and Orchestration:

[![Stack Used](https://skillicons.dev/icons?i=docker,kubernetes,&theme=dark)](https://skillicons.dev)

#### Web Server and Reverse Proxy:

[![Stack Used](https://skillicons.dev/icons?i=nginx,kafka&theme=dark)](https://skillicons.dev)

## Project Overview

This project has been built using a diverse tech stack, as mentioned above. Each component in the stack plays distinct roles to ensure seamless collaboration among services. Communication between services is facilitated by the [NATS Stream Server](https://nats.io/) decentralizing the communication infrastructure. Skaffold is being employed to automate development environment and handling tedius tasks.

### Services:

- **Authentication**: Handling all user login and signup functionalitities.
- **Client**: This is for handling front-end functionalities.
- **Tickets**: This service perform different Crud operation on tickets.
- **Orders**: All functionalities related on ordering tickets and managing order status such as `pending`, `cancelled` and `completed` are being watched by this services.
- **Payments**: This service is taking care all payments process such as cancel the payment and update other services in case payment is processed successfuly.
- **Expiration**: Every time user is going to buy ticket it being locked for 60 seconds by this service and after time is over the tickets will be unlocked.

**Note: Additional are still being added.**

## Getting Started

### Prerequisites

- Node.js
- Npm
- Docker
- Kubernetes
- Skaffold

### Installation

1. Clone the repository:
   `git clone` [https://github.com/leandreAlly/ticketing-app-microservice.git](https://github.com/leandreAlly/ticketing-app-microservice.git)

2. Navigate to the project directory:
   `cd ticketing`
3. Install dependencies:
   navigate in each service `cd serviceName` and run `npm install`

4. Configure the accessing Url my changing` nginx host`

5. Start the development server: run `skaffold dev` in terminal and make sure you're in root directory

## Work in progress

- Implement notifications on client side using `pusherJs`

## Contact Me

- [Email](tuyambazeleandre@gmail.com)
- [Linkedin](https://www.linkedin.com/in/tuyambaze-leandre/)
- [X or Twitter](https://twitter.com/Ally_leandre)
