# Typescript hexagonal todoapp &middot; ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

Project makes with Typescript and hexagonal architecture. Project of example with the best practices of the software. Layers Domain, Application, and Infrastructure. The project is a simple API REST of Todo.

## Install

Execute command

```
npm install
```

## Develop

Up server in http://localhost:3000/

```bash
$ npm run dev
```

## Endpoints

| Type   | Endpoint                                 | Body   |
| :----- | :--------------------------------------- | :----- |
| GET    | http://localhost:3000/todo               |        |
| POST   | http://localhost:3000/todo               |  {"description": "test"}    |
| PATCH  | http://localhost:3000/todo/:uuid         |  {"description": "test", "completed": false}     |
| DELETE | http://localhost:3000/todo/:uuid         |        |

## Team

Developed by Diego Cortés

* dcortes.net@gmail.com