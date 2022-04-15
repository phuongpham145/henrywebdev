//const { books, authors } = require("../data/static");
// const Author = require("../models/Author");
// const Book = require("../models/Book");
const resolvers = {
  // Query
  Query: {
    books: async (parent, args, context) => {
      return await context.mongoDataMethods.getAllBooks();
    },
    book: async (parent, { id }, { mongoDataMethods }) => {
      //books.find((book) => book.id == args.id)
      return await mongoDataMethods.getBookById(id);
    },
    authors: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAllAuthors(),
    author: async (parent, { id }, { mongoDataMethods }) => {
      // authors.find((author) => author.id == args.id),
      return await mongoDataMethods.getAuthorById(id);
    },
  },
  Book: {
    author: async ({ authorId }, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAuthorById(authorId),
    //authors.find((author) => author.id == parent.authorId),
  },
  Author: {
    books: async ({ id }, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAllBooks({ authorId: id }),
    //books.filter((book) => book.authorId == parent.id),
  },
  // Mutation
  Mutation: {
    createAuthor: async (parent, args, { mongoDataMethods }) => {
      // const newAuthor = new Author(args);
      // return await newAuthor.save();
      return await mongoDataMethods.createAuthor(args);
    },
    createBook: async (parent, args, { mongoDataMethods }) => {
      // const newBook = new Book(args);
      // return await newBook.save();
      return await mongoDataMethods.createBook(args);
    },
  },
};
module.exports = resolvers;
