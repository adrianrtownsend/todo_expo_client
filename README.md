# Advanced Todo | Expo React Native App

## About the project

This project is the Frontend Mobile App for a Todo List application. Built on top of Expo React Native this project is designed for iOS/Android deployment but may also be used on Web Browsers. Graphql API interface is used to connected the backend [Apollo Server](https://github.com/adrianrtownsend/advanced-todo-apollo-server.git)

## Clone the Repository

```sh
git clone https://github.com/adrianrtownsend/advanced-todo-expo-app.git
cd advanced-todo-expo-app
```

## Table of Contents

- [Advanced Todo | Expo React Native App](#advanced-todo--expo-react-native-app)
  - [About the project](#about-the-project)
  - [Clone the Repository](#clone-the-repository)
  - [Table of Contents](#table-of-contents)
  - [Requirements and Prerequisites](#requirements-and-prerequisites)
    - [Additional packages to install](#additional-packages-to-install)
    - [Integration Setup](#integration-setup)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Local Development](#local-development)
  - [Linting](#linting)
  - [CI/CD Deployment](#cicd-deployment)
    - [Configure Netlify deployment](#configure-netlify-deployment)

## Requirements and Prerequisites

### Additional packages to install

- [Node](https://nodejs.org/en)
- [NPM](https://www.npmjs.com/)
- [Expo](https://docs.expo.dev/)

### Integration Setup

- [Firebase Project](https://firebase.google.com/docs/auth/web/start)
- [Netlify Account](https://docs.netlify.com/) | optional: required for remote deployment

## Installation

```
npm install
```

## Configuration

[] Get firebase configs and add to env
[] generate typescript schema

- Generate types from graphql schemas

  - Graphql types are generated from the schema.graphql file - copied from the Apollo Server. The schema property can be changed if server is actively running

  ```
    schema: 'http://localhost:4000',
    // schema: "./graphql/typeDefs/schema.graphql",
  ```

  - Command to generate graphql types

  ```
    npm run compile
    npm run compile -w # watch mode
  ```

- Get the confifg variables needed for your typescript project. [Here's How](https://firebase.google.com/docs/web/learn-more#config-object)

```
EXPO_PUBLIC_FIREBASE_API_KEY=
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=
EXPO_PUBLIC_FIREBASE_PROJECT_ID=
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
EXPO_PUBLIC_FIREBASE_APP_ID=
```

## Local Development

```
npm start
```

## Linting

- [CommitLint Setup](https://commitlint.js.org/#/guides-local-setup)
- [Husky](https://typicode.github.io/husky/)

## CI/CD Deployment

This application is hosted on [Netlify](https://www.netlify.com/) along with the [Apollo Server](https://github.com/adrianrtownsend/todo_apollo_server).

### Configure Netlify deployment

- Follow the initial steps listed [here](https://docs.expo.dev/distribution/publishing-websites/#netlify)
- Once done, retrieve the config values from your Netlify account to add to your environment variables.
- Add the following environment variables with config values to your list of project secrets
  ```
  EXPO_PUBLIC_NETLIFY_ONE=
  EXPO_PUBLIC_NETLIFY_TWO=
  EXPO_PUBLIC_NETLIFY_THREE=
  ```
