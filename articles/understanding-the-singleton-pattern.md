---
id: 0b825236-1e6e-4630-bb21-ec4e48812e3d
title: Understanding the Singleton Pattern
description: Learn how to ensure only one instance of an object exists in your application for improved efficiency and consistency.
slug: understanding-the-singleton-pattern
publishedAt: 2023-09-25T18:22:00.000Z
---

In this blog post, we will explore the Singleton Pattern, a design pattern that allows you to have only one instance of an object throughout your application. We will discuss the main concepts and implementation techniques of the Singleton Pattern.

## What is singleton pattern?

Imagine you are building an application and you want to ensure that it only has one instance of a database. Instead of creating a new database instance every time, the Singleton Pattern ensures that you always get the same instance that was created before.

When comparing the Singleton Pattern with global variables, although they can be convenient, they are also risky because any code can potentially overwrite their contents and cause the application to crash. In contrast, the Singleton Pattern provides us with a controlled access point to the object and ensures that we have only one instance, preventing conflicts or inconsistencies.

It's important to note that implementing this pattern in a regular constructor is impossible because the constructor always returns a new object. Therefore, we need to prevent access to the constructor from outside.

Let's take a look at the example below:

```typescript

class Database {
  private static instance: Database | null = null;

  // Private constructor to prevent external instantiation
  private constructor() {}

  // Method to get the Singleton instance
  public static getInstance(): Database {
    if (Database.instance === null) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}
```

We can test our singleton instance by creating a new variable `const db = Database.getInstance();` This will ensure that we are always getting the same instance of the `Database` class.

By using the Singleton Pattern, we can have a single and controlled access point to an object in our application. This helps to ensure that there is only one instance and prevents any conflicts or inconsistencies.

```typescript
const instance1 = Database.getInstance();
const instance2 = Database.getInstance();

console.log(instance1 === instance2); // Output: true
```

## An Example: Logger

A common scenario where the Singleton Pattern is used is in logging systems. In many applications, it's important to have a single place to log and keep track of important events or errors.

By using the Singleton Pattern, we can make sure that there is only one instance of the Logger in the application. This allows us to have consistent and controlled access to logging, preventing the creation of multiple loggers that could cause conflicts or inconsistencies in the log data.

Take a look at the example below

```typescript
class Logger {
  private static instance: Logger | null = null;

  private constructor() {}

  public static getInstance(): Logger {
    if (Logger.instance === null) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public log(message: string): void {
    // Log the message to a file or console
    console.log(`[LOG]: ${message}`);
  }
}

// Example usage
const logger = Logger.getInstance();

logger.log("This is a log message");

```

## Things to note

The Singleton pattern can hide poor design when different parts of the program have too much knowledge about each other. In a situation where multiple threads are running simultaneously, we need to take extra care to make sure that only one instance of the singleton object is created. Since the singleton class has a private constructor and overriding static methods is usually not possible, finding a creative solution for mocking the singleton can be difficult.
