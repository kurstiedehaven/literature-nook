const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        bookId: ID!
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    input BookInput {
        bookId: ID!
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        saveBook(bookSaved: bookInput): User
        removeBook(bookId: String!): User
    }
`;

module.exports = typeDefs;