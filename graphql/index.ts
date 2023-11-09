import { DocumentNode } from "graphql";
import { gql } from "./__generated__/gql";

export const GET_TODOS = gql(`
  query getTodos {
    todos {
      id
      title
      description
      isCompleted
      userId
      tags {
        id
        name
      }
    }
  }
`);

export const GET_TODO = gql(`
  query getTodo($id: Int!) {
    todo (id: $id) {
      id
      title
      description
      isCompleted
      userId
      tags {
        id
        name
      }
    }
  }
`);

export const GET_TODOS_BY_USER_ID = gql(`
  query getTodosByUserId($userId: String!) {
    todosByUserId (userId: $userId) {
      id
      title
      description
      isCompleted
      userId
      tags {
        id
        name
      }
    }
  }
`);

export const CREATE_TODO = gql(`
  mutation CreateTodo(
    $title: String!
    $description: String!
    $isCompleted: Boolean
  ) {
    createTodo(
      title:$title,
      description:$description,
      isCompleted: $isCompleted
    ) {
      id
      title
      description
      isCompleted
      userId
      tags {
        id
        name
      }
    }
  }
`);

export const UPDATE_TODO = gql(`
  mutation UpdateTodo(
    $id: Int!
    $title: String
    $description: String
    $isCompleted: Boolean
  ) {
    updateTodo(
      id: $id,
      title: $title,
      description: $description,
      isCompleted: $isCompleted
    ) {
      id,
      title,
      description,
      isCompleted
      tags {
        id
        name
      }
    }
  }
`);

export const DELETE_TODO = gql(`
  mutation deleteTodo($id: Int!) {
    deleteTodo(id: $id) {
      id
    }
  }
`);

export const GET_TAGS = gql(`
  query getTags {
    tags {
      id
      name
      isVisible
    }
  }
`);

export const GET_TAG = gql(`
  query getTag($id: Int!) {
    tag(id: $id) {
      id
      name
      isVisible
    }
  }
`);

export const CREATE_TAG = gql(`
  mutation CreateTag(
    $name: String!
    $isVisible: Boolean
  ) {
    createTag(
      name:$name,
      isVisible:$isVisible
    ) {
      id
      name
      isVisible
    }
  }
`);

export const UPDATE_TAG = gql(`
  mutation UpdateTag(
    $id: Int!
    $name: String
    $isVisible: Boolean
  ) {
    updateTag(
      id:$id,
      name:$name,
      isVisible:$isVisible
    ) {
      id
      name
      isVisible
    }
  }
`);

export const DELETE_TAG = gql(`
  mutation DeleteTag(
    $id: Int!
  ) {
    deleteTag(
      id:$id
    ) {
      id
    }
  }
`);
