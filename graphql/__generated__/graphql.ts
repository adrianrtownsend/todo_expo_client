/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Mutation = {
  __typename?: "Mutation";
  createTag?: Maybe<Tag>;
  createTodo?: Maybe<Todo>;
  deleteTag: Tag;
  deleteTodo: Todo;
  updateTag: Tag;
  updateTodo: Todo;
};

export type MutationCreateTagArgs = {
  isVisible?: InputMaybe<Scalars["Boolean"]["input"]>;
  name: Scalars["String"]["input"];
};

export type MutationCreateTodoArgs = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  isCompleted?: InputMaybe<Scalars["Boolean"]["input"]>;
  title: Scalars["String"]["input"];
};

export type MutationDeleteTagArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationDeleteTodoArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationUpdateTagArgs = {
  id: Scalars["Int"]["input"];
  isVisible?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationUpdateTodoArgs = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
  isCompleted?: InputMaybe<Scalars["Boolean"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type Query = {
  __typename?: "Query";
  tag?: Maybe<Tag>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  todo?: Maybe<Todo>;
  todos?: Maybe<Array<Maybe<Todo>>>;
  todosByUserId?: Maybe<Array<Maybe<Todo>>>;
};

export type QueryTagArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryTodoArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryTodosByUserIdArgs = {
  userId: Scalars["String"]["input"];
};

export type Subscription = {
  __typename?: "Subscription";
  tagUpdated?: Maybe<Tag>;
  todoCreated?: Maybe<Todo>;
  todoDeleted?: Maybe<Todo>;
  todoUpdated?: Maybe<Todo>;
};

export type Tag = {
  __typename?: "Tag";
  id?: Maybe<Scalars["Int"]["output"]>;
  isVisible?: Maybe<Scalars["Boolean"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

export type Todo = {
  __typename?: "Todo";
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  isCompleted?: Maybe<Scalars["Boolean"]["output"]>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  title?: Maybe<Scalars["String"]["output"]>;
  userId?: Maybe<Scalars["String"]["output"]>;
};

export type TagQueries = {
  __typename?: "tagQueries";
  tagById?: Maybe<Tag>;
  tags?: Maybe<Array<Maybe<Tag>>>;
};

export type GetTodosQueryVariables = Exact<{ [key: string]: never }>;

export type GetTodosQuery = {
  __typename?: "Query";
  todos?: Array<{
    __typename?: "Todo";
    id?: number | null;
    title?: string | null;
    description?: string | null;
    isCompleted?: boolean | null;
    userId?: string | null;
    tags?: Array<{
      __typename?: "Tag";
      id?: number | null;
      name?: string | null;
    } | null> | null;
  } | null> | null;
};

export type GetTodoQueryVariables = Exact<{
  id: Scalars["Int"]["input"];
}>;

export type GetTodoQuery = {
  __typename?: "Query";
  todo?: {
    __typename?: "Todo";
    id?: number | null;
    title?: string | null;
    description?: string | null;
    isCompleted?: boolean | null;
    userId?: string | null;
    tags?: Array<{
      __typename?: "Tag";
      id?: number | null;
      name?: string | null;
    } | null> | null;
  } | null;
};

export type GetTodosByUserIdQueryVariables = Exact<{
  userId: Scalars["String"]["input"];
}>;

export type GetTodosByUserIdQuery = {
  __typename?: "Query";
  todosByUserId?: Array<{
    __typename?: "Todo";
    id?: number | null;
    title?: string | null;
    description?: string | null;
    isCompleted?: boolean | null;
    userId?: string | null;
    tags?: Array<{
      __typename?: "Tag";
      id?: number | null;
      name?: string | null;
    } | null> | null;
  } | null> | null;
};

export type CreateTodoMutationVariables = Exact<{
  title: Scalars["String"]["input"];
  description: Scalars["String"]["input"];
  isCompleted?: InputMaybe<Scalars["Boolean"]["input"]>;
}>;

export type CreateTodoMutation = {
  __typename?: "Mutation";
  createTodo?: {
    __typename?: "Todo";
    id?: number | null;
    title?: string | null;
    description?: string | null;
    isCompleted?: boolean | null;
    userId?: string | null;
    tags?: Array<{
      __typename?: "Tag";
      id?: number | null;
      name?: string | null;
    } | null> | null;
  } | null;
};

export type UpdateTodoMutationVariables = Exact<{
  id: Scalars["Int"]["input"];
  title?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  isCompleted?: InputMaybe<Scalars["Boolean"]["input"]>;
}>;

export type UpdateTodoMutation = {
  __typename?: "Mutation";
  updateTodo: {
    __typename?: "Todo";
    id?: number | null;
    title?: string | null;
    description?: string | null;
    isCompleted?: boolean | null;
    tags?: Array<{
      __typename?: "Tag";
      id?: number | null;
      name?: string | null;
    } | null> | null;
  };
};

export type DeleteTodoMutationVariables = Exact<{
  id: Scalars["Int"]["input"];
}>;

export type DeleteTodoMutation = {
  __typename?: "Mutation";
  deleteTodo: { __typename?: "Todo"; id?: number | null };
};

export type GetTagsQueryVariables = Exact<{ [key: string]: never }>;

export type GetTagsQuery = {
  __typename?: "Query";
  tags?: Array<{
    __typename?: "Tag";
    id?: number | null;
    name?: string | null;
    isVisible?: boolean | null;
  } | null> | null;
};

export type GetTagQueryVariables = Exact<{
  id: Scalars["Int"]["input"];
}>;

export type GetTagQuery = {
  __typename?: "Query";
  tag?: {
    __typename?: "Tag";
    id?: number | null;
    name?: string | null;
    isVisible?: boolean | null;
  } | null;
};

export type CreateTagMutationVariables = Exact<{
  name: Scalars["String"]["input"];
  isVisible?: InputMaybe<Scalars["Boolean"]["input"]>;
}>;

export type CreateTagMutation = {
  __typename?: "Mutation";
  createTag?: {
    __typename?: "Tag";
    id?: number | null;
    name?: string | null;
    isVisible?: boolean | null;
  } | null;
};

export type UpdateTagMutationVariables = Exact<{
  id: Scalars["Int"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
  isVisible?: InputMaybe<Scalars["Boolean"]["input"]>;
}>;

export type UpdateTagMutation = {
  __typename?: "Mutation";
  updateTag: {
    __typename?: "Tag";
    id?: number | null;
    name?: string | null;
    isVisible?: boolean | null;
  };
};

export type DeleteTagMutationVariables = Exact<{
  id: Scalars["Int"]["input"];
}>;

export type DeleteTagMutation = {
  __typename?: "Mutation";
  deleteTag: { __typename?: "Tag"; id?: number | null };
};

export const GetTodosDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getTodos" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "todos" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "isCompleted" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "tags" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetTodosQuery, GetTodosQueryVariables>;
export const GetTodoDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getTodo" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "todo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "isCompleted" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "tags" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetTodoQuery, GetTodoQueryVariables>;
export const GetTodosByUserIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getTodosByUserId" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "todosByUserId" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "userId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "isCompleted" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "tags" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetTodosByUserIdQuery,
  GetTodosByUserIdQueryVariables
>;
export const CreateTodoDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateTodo" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "title" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "description" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "isCompleted" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createTodo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "title" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "title" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "description" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "description" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "isCompleted" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "isCompleted" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "isCompleted" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "tags" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateTodoMutation, CreateTodoMutationVariables>;
export const UpdateTodoDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateTodo" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "title" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "description" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "isCompleted" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateTodo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "title" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "title" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "description" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "description" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "isCompleted" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "isCompleted" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "isCompleted" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "tags" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateTodoMutation, UpdateTodoMutationVariables>;
export const DeleteTodoDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "deleteTodo" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteTodo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DeleteTodoMutation, DeleteTodoMutationVariables>;
export const GetTagsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getTags" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "tags" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "isVisible" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetTagsQuery, GetTagsQueryVariables>;
export const GetTagDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getTag" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "tag" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "isVisible" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetTagQuery, GetTagQueryVariables>;
export const CreateTagDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateTag" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "name" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "isVisible" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createTag" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "name" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "name" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "isVisible" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "isVisible" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "isVisible" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateTagMutation, CreateTagMutationVariables>;
export const UpdateTagDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateTag" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "name" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "isVisible" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateTag" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "name" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "name" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "isVisible" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "isVisible" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "isVisible" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateTagMutation, UpdateTagMutationVariables>;
export const DeleteTagDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "DeleteTag" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteTag" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DeleteTagMutation, DeleteTagMutationVariables>;
