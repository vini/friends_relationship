## Friends Relationship

[![CircleCI](https://img.shields.io/circleci/project/github/contentful/the-example-app.nodejs.svg)](https://circleci.com/gh/contentful/the-example-app.nodejs)

NodeJS APP to manipulate friends and your relationships:

- List all persons registered
- List specific person
- Create a new person
- Create a relationship between two people = friend relationship
- List recommendations of friends

## Requirements

* Node >= 16.16.0
* NPM >= 8.11.0

## Common setup

Clone the repo and install the dependencies.

```bash
git clone https://github.com/vini/friends_relationship.git
cd friends_relationship
```

```bash
npm install
```

## Running Manual
```bash
npm run dev
```

OR

```bash
./node_modules/.bin/nodemon.cmd -e js
```

## Running with Docker
You can also run this app as a Docker container:

Step 1: Clone the repo

```bash
git clone https://github.com/vini/friends_relationship.git
```

Step 2: Build the Docker image

```bash
docker build -t friends_relationship .
```

Step 3: Run the Docker container locally:

```bash
docker run -p 3000:3000 -d friends_relationship
```