import { gql } from './__generated__/gql';

export const GET_TODOS = gql(`
  query getTodos {
    todos {
      id
      title
      description
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
      user
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
    $userId: Int!
  ) {
    createTodo(
      title:$title,
      userId:$userId
    ) {
      id
      title
      description
      isCompleted
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
    $descripion: String
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
      tags
    }
  }
`);

export const DELETE_TODO = gql(`
  mutation deleteTodo($id: Int!) {
    deleteUser(id: $id) {
      id
    }
  }
`);

export const GET_USER = gql(`
  query GetUser($id: Int!) {
    user(id: $id) {
      id
      username
      email
      firstName
      lastName
      isPrivate
    }
  }
`);

export const CREATE_USER = gql(`
  mutation CreateUser(
		$username: String!
		$email: String!
		$firstName: String!
		$lastName: String!
		$password: String!
	) {
    createUser(
      username:$username,
      email:$email,
      firstName:$firstName,
      lastName:$lastName,
      password:$password,
    ) {
      id
      username
      email
      firstName
      lastName
      password
      isPrivate
    }
  }
`);

export const UPDATE_USER = gql(`
  mutation UpdateUser(
    $id: Int!
    $username: String
    $email: String
    $firstName: String
    $lastName: String
    $isPrivate: Boolean
  ) {
    updateUser(
      id:$id,
      username:$username,
      email:$email,
      firstName:$firstName,
      lastName:$lastName,
      isPrivate:$isPrivate
    ) {
      id
      username
      email
      firstName
      lastName
      password
      isPrivate
    }
  }
`);

export const DELETE_USER = gql(`
  mutation DeleteUser(
    $id: Int!
  ) {
    deleteUser(
      id:$id
    ) {
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
    $isVisible: String
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
    $name: String
    $isVisible: String
  ) {
    updateTag(
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
