## Friends Relationship

![Vinícius Sant'anna](https://img.shields.io/static/v1?label=NodeJS&message=Friends_Relationship&color=green)

NodeJS APP to manipulate friends and your relationships, the data has stored in runtime (RAM),
using a global variable named as "persons".


## RESTful Routes

| **Action**            | **URL**                      | **Verb** | **PAYLOAD** | 
|-----------------------|------------------------------|----------|-------------|
| Get All Persons       | /api/v1/persons              | GET      |             |
| Create Person         | /api/v1/person               | POST     | cpf, name   |
| Get Person            | /api/v1/person/:CPF          | GET      |             | 
| Clean All Data of RAM | /api/v1/clean                | DELETE   |             |
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

## Contact

Vinícius Sant'anna
E-mail: viniciusosantanna@gmail.com