/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query getTodos {\n    todos {\n      id\n      title\n      description\n      isCompleted\n      userId\n      user {\n        uid\n        email\n        displayName\n      }\n      tags {\n        id\n        name\n      }\n    }\n  }\n": types.GetTodosDocument,
    "\n  query getTodo($id: Int!) {\n    todo (id: $id) {\n      id\n      title\n      description\n      isCompleted\n      userId\n      user {\n        uid\n        email\n        displayName\n      }\n      tags {\n        id\n        name\n      }\n    }\n  }\n": types.GetTodoDocument,
    "\n  query getTodosByUserId($userId: String!) {\n    todosByUserId (userId: $userId) {\n      id\n      title\n      description\n      isCompleted\n      userId\n      tags {\n        id\n        name\n      }\n    }\n  }\n": types.GetTodosByUserIdDocument,
    "\n  mutation CreateTodo(\n    $title: String!\n    $description: String!\n    $isCompleted: Boolean\n  ) {\n    createTodo(\n      title:$title,\n      description:$description,\n      isCompleted: $isCompleted\n    ) {\n      id\n      title\n      description\n      isCompleted\n      userId\n      tags {\n        id\n        name\n      }\n    }\n  }\n": types.CreateTodoDocument,
    "\n  mutation UpdateTodo(\n    $id: Int!\n    $title: String\n    $description: String\n    $isCompleted: Boolean\n  ) {\n    updateTodo(\n      id: $id,\n      title: $title,\n      description: $description,\n      isCompleted: $isCompleted\n    ) {\n      id,\n      title,\n      description,\n      isCompleted\n    }\n  }\n": types.UpdateTodoDocument,
    "\n  mutation UpdateTodoIsCompleted(\n    $id: Int!\n    $isCompleted: Boolean\n  ) {\n    updateTodo(\n      id: $id,\n      isCompleted: $isCompleted\n    ) {\n      id,\n      isCompleted\n    }\n  }\n": types.UpdateTodoIsCompletedDocument,
    "\n  mutation deleteTodo($id: Int!) {\n    deleteTodo(id: $id) {\n      id\n    }\n  }\n": types.DeleteTodoDocument,
    "\n  query getTags {\n    tags {\n      id\n      name\n      isVisible\n    }\n  }\n": types.GetTagsDocument,
    "\n  query getTag($id: Int!) {\n    tag(id: $id) {\n      id\n      name\n      isVisible\n    }\n  }\n": types.GetTagDocument,
    "\n  mutation CreateTag(\n    $name: String!\n    $isVisible: Boolean\n  ) {\n    createTag(\n      name:$name,\n      isVisible:$isVisible\n    ) {\n      id\n      name\n      isVisible\n    }\n  }\n": types.CreateTagDocument,
    "\n  mutation UpdateTag(\n    $id: Int!\n    $name: String\n    $isVisible: Boolean\n  ) {\n    updateTag(\n      id:$id,\n      name:$name,\n      isVisible:$isVisible\n    ) {\n      id\n      name\n      isVisible\n    }\n  }\n": types.UpdateTagDocument,
    "\n  mutation DeleteTag(\n    $id: Int!\n  ) {\n    deleteTag(\n      id:$id\n    ) {\n      id\n    }\n  }\n": types.DeleteTagDocument,
    "\n  query getUsers {\n    users {\n      uid\n      email\n      displayName\n      todos {\n        id\n        title\n        description\n        isCompleted\n      }\n    }\n  }\n": types.GetUsersDocument,
    "\n  query getUser($id: String!) {\n    user(id: $id) {\n      uid\n      email\n      displayName\n      todos {\n        id\n        title\n        description\n        isCompleted\n      }\n    }\n  }\n": types.GetUserDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getTodos {\n    todos {\n      id\n      title\n      description\n      isCompleted\n      userId\n      user {\n        uid\n        email\n        displayName\n      }\n      tags {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query getTodos {\n    todos {\n      id\n      title\n      description\n      isCompleted\n      userId\n      user {\n        uid\n        email\n        displayName\n      }\n      tags {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getTodo($id: Int!) {\n    todo (id: $id) {\n      id\n      title\n      description\n      isCompleted\n      userId\n      user {\n        uid\n        email\n        displayName\n      }\n      tags {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query getTodo($id: Int!) {\n    todo (id: $id) {\n      id\n      title\n      description\n      isCompleted\n      userId\n      user {\n        uid\n        email\n        displayName\n      }\n      tags {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getTodosByUserId($userId: String!) {\n    todosByUserId (userId: $userId) {\n      id\n      title\n      description\n      isCompleted\n      userId\n      tags {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query getTodosByUserId($userId: String!) {\n    todosByUserId (userId: $userId) {\n      id\n      title\n      description\n      isCompleted\n      userId\n      tags {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateTodo(\n    $title: String!\n    $description: String!\n    $isCompleted: Boolean\n  ) {\n    createTodo(\n      title:$title,\n      description:$description,\n      isCompleted: $isCompleted\n    ) {\n      id\n      title\n      description\n      isCompleted\n      userId\n      tags {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateTodo(\n    $title: String!\n    $description: String!\n    $isCompleted: Boolean\n  ) {\n    createTodo(\n      title:$title,\n      description:$description,\n      isCompleted: $isCompleted\n    ) {\n      id\n      title\n      description\n      isCompleted\n      userId\n      tags {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateTodo(\n    $id: Int!\n    $title: String\n    $description: String\n    $isCompleted: Boolean\n  ) {\n    updateTodo(\n      id: $id,\n      title: $title,\n      description: $description,\n      isCompleted: $isCompleted\n    ) {\n      id,\n      title,\n      description,\n      isCompleted\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateTodo(\n    $id: Int!\n    $title: String\n    $description: String\n    $isCompleted: Boolean\n  ) {\n    updateTodo(\n      id: $id,\n      title: $title,\n      description: $description,\n      isCompleted: $isCompleted\n    ) {\n      id,\n      title,\n      description,\n      isCompleted\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateTodoIsCompleted(\n    $id: Int!\n    $isCompleted: Boolean\n  ) {\n    updateTodo(\n      id: $id,\n      isCompleted: $isCompleted\n    ) {\n      id,\n      isCompleted\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateTodoIsCompleted(\n    $id: Int!\n    $isCompleted: Boolean\n  ) {\n    updateTodo(\n      id: $id,\n      isCompleted: $isCompleted\n    ) {\n      id,\n      isCompleted\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation deleteTodo($id: Int!) {\n    deleteTodo(id: $id) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation deleteTodo($id: Int!) {\n    deleteTodo(id: $id) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getTags {\n    tags {\n      id\n      name\n      isVisible\n    }\n  }\n"): (typeof documents)["\n  query getTags {\n    tags {\n      id\n      name\n      isVisible\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getTag($id: Int!) {\n    tag(id: $id) {\n      id\n      name\n      isVisible\n    }\n  }\n"): (typeof documents)["\n  query getTag($id: Int!) {\n    tag(id: $id) {\n      id\n      name\n      isVisible\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateTag(\n    $name: String!\n    $isVisible: Boolean\n  ) {\n    createTag(\n      name:$name,\n      isVisible:$isVisible\n    ) {\n      id\n      name\n      isVisible\n    }\n  }\n"): (typeof documents)["\n  mutation CreateTag(\n    $name: String!\n    $isVisible: Boolean\n  ) {\n    createTag(\n      name:$name,\n      isVisible:$isVisible\n    ) {\n      id\n      name\n      isVisible\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateTag(\n    $id: Int!\n    $name: String\n    $isVisible: Boolean\n  ) {\n    updateTag(\n      id:$id,\n      name:$name,\n      isVisible:$isVisible\n    ) {\n      id\n      name\n      isVisible\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateTag(\n    $id: Int!\n    $name: String\n    $isVisible: Boolean\n  ) {\n    updateTag(\n      id:$id,\n      name:$name,\n      isVisible:$isVisible\n    ) {\n      id\n      name\n      isVisible\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteTag(\n    $id: Int!\n  ) {\n    deleteTag(\n      id:$id\n    ) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteTag(\n    $id: Int!\n  ) {\n    deleteTag(\n      id:$id\n    ) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getUsers {\n    users {\n      uid\n      email\n      displayName\n      todos {\n        id\n        title\n        description\n        isCompleted\n      }\n    }\n  }\n"): (typeof documents)["\n  query getUsers {\n    users {\n      uid\n      email\n      displayName\n      todos {\n        id\n        title\n        description\n        isCompleted\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getUser($id: String!) {\n    user(id: $id) {\n      uid\n      email\n      displayName\n      todos {\n        id\n        title\n        description\n        isCompleted\n      }\n    }\n  }\n"): (typeof documents)["\n  query getUser($id: String!) {\n    user(id: $id) {\n      uid\n      email\n      displayName\n      todos {\n        id\n        title\n        description\n        isCompleted\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;