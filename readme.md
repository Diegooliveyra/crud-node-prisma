# by diegooliveyra

## _SIMPLE CRUD NODEJS WITH PRISMA JS_

![Prisma](https://i.imgur.com/h6UIYTu.png)

<div align="center">
  <h1>Prisma</h1>
  <a href="https://www.npmjs.com/package/prisma"><img src="https://img.shields.io/npm/v/prisma.svg?style=flat" /></a>
  <a href="https://github.com/prisma/prisma/blob/main/CONTRIBUTING.md"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" /></a>
  <a href="https://github.com/prisma/prisma/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-Apache%202-blue" /></a>
  <a href="https://slack.prisma.io/"><img src="https://img.shields.io/badge/chat-on%20slack-blue.svg" /></a>
  <br />
  <br />
  <a href="https://www.prisma.io/docs/getting-started/quickstart">Quickstart</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://www.prisma.io/">Website</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://www.prisma.io/docs/">Docs</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://github.com/prisma/prisma-examples/">Examples</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://www.prisma.io/blog">Blog</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://slack.prisma.io/">Slack</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://twitter.com/prisma">Twitter</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://github.com/prisma/prisma1">Prisma 1</a>
  <br />
  <hr />
</div>

## Install npm dependencies:

```
cd crud-node-prisma
yarn
```

## API Reference

#### Get all users

```http
  GET /user
```

| Parameter | Type     | Description       |
| :-------- | :------- | :---------------- |
| ``        | `string` | For all user data |

#### Create user

```http
  POST /user
```

| Body       | Type     | Description                        |
| :--------- | :------- | :--------------------------------- |
| `name`     | `string` | **Required**. To user name         |
| `email`    | `string` | **Required**. To user email        |
| `cpf`      | `string` | **Required**. To user cpf          |
| `phone`    | `string` | **Required**. To user phone number |
| `password` | `string` | **Required**. To user password     |
| `typeUser` | `number` | **Required**. To typeUser          |

#### Update user

```http
  UPDATE /user/${id}
```

| Parameter | Type     | Description                              |
| :-------- | :------- | :--------------------------------------- |
| `id`      | `number` | **Required**.Sebagai Penanda Unik Update |

| Body       | Type     | Description                        |
| :--------- | :------- | :--------------------------------- |
| `name`     | `string` | **Required**. To user name         |
| `email`    | `string` | **Required**. To user email        |
| `cpf`      | `string` | **Required**. To user cpf          |
| `phone`    | `string` | **Required**. To user phone number |
| `password` | `string` | **Required**. To user password     |
| `typeUser` | `number` | **Required**. To typeUser          |

#### Delete user

```http
  DELETE /user/${id}
```

| Parameter | Type     | Description                              |
| :-------- | :------- | :--------------------------------------- |
| `id`      | `number` | **Required**.Sebagai Penanda Unik Update |
