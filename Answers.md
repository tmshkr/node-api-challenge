## Mention two parts of Express that you learned about this week.

This week I learned about middleware and routing with Express, as well as deployment with Heroku.

## Describe middleware

Middleware is an intermediate layer of software that provides functionality to proximate layers of software, by processing data in a sequence of events and then passing the data to subsequent function calls. In Express, middleware processes API requests in the order they are introduced, to provide added functionality, such as validating resources and handling errors.

## Describe a resource

In the context of a REST API, a resource is a piece of data provided by the server, often from a database. A client can retrieve and modify resources on the server through HTTP methods, e.g., `GET`, `POST`, and so forth, at specified API endpoints.

## What can the API return to help clients know if a request was successful?

The `2xx` HTTP status codes indicate successful API requests:

`200` OK (for successful requests in general)
`201` Created (after creating a new resource with a `POST` request)
`204` No Content (after deleting a resource, and not returning any content)

## How can we partition our application into sub-applications?

Applications can be partitioned into sub-application using JavaScript modules, so that logical parts of an application are separated into smaller files. For example, a separate router file can be created for certain kinds of API requests, and then included in a main server file, so that the server can deal with multiple kinds of resources while keeping the code maintainable.