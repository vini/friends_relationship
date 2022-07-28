## Friends Relationship

[![CircleCI](https://img.shields.io/circleci/project/github/contentful/the-example-app.nodejs.svg)](https://circleci.com/gh/contentful/the-example-app.nodejs)

NodeJS APP to manipulate friends and your relationships.


## RESTful Routes

| **Action**            | **URL**                      | **Verb** | **PAYLOAD** | 
|-----------------------|------------------------------|----------|-------------|
| Get All Persons       | /api/v1/persons              | GET      |             |
| Create Person         | /api/v1/person               | POST     | cpf, name   |
| Get Person            | /api/v1/person/:CPF          | GET      |             | 
| Clean                 | /api/v1/clean                | DELETE   |             |
| Create Relationship   | /api/v1/relationship         | POST     | cpf1, cpf2  |  
| Get Recommendations   | /api/v1/recommendations/:CPF | GET      |             |  


## Requirements

* Node >= 16.16.0
* NPM >= 8.11.0

## Common setup

Clone the repo and install the dependencies.

```bash
git clone https://github.com/vini/friends_relationship.git
```

```bash
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