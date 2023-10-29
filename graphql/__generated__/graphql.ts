/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
			[P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
	  };
/** All built-in and custom scalars, mapped to their actual values */

export type GetTodosQueryVariables = Exact<{ [key: string]: never }>;

export type GetTodosQuery = {
	__typename?: 'Query';
	todos?: Array<{
		__typename?: 'Todo';
		id?: number | null;
		title?: string | null;
		description?: string | null;
	} | null> | null;
};

export type CreateUserMutationVariables = Exact<{
	username: Scalars['String']['input'];
	email: Scalars['String']['input'];
	firstName: Scalars['String']['input'];
	lastName: Scalars['String']['input'];
	password: Scalars['String']['input'];
}>;

export type CreateUserMutation = {
	__typename?: 'Mutation';
	createUser: {
		__typename?: 'User';
		id?: number | null;
		username?: string | null;
		email?: string | null;
		firstName?: string | null;
		lastName?: string | null;
		password?: string | null;
		isPrivate?: boolean | null;
	};
};

export const GetTodosDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'getTodos' },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'todos' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'description' } },
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<GetTodosQuery, GetTodosQueryVariables>;
export const CreateUserDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'mutation',
			name: { kind: 'Name', value: 'CreateUser' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: {
						kind: 'Variable',
						name: { kind: 'Name', value: 'username' },
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: { kind: 'Name', value: 'String' },
						},
					},
				},
				{
					kind: 'VariableDefinition',
					variable: {
						kind: 'Variable',
						name: { kind: 'Name', value: 'email' },
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: { kind: 'Name', value: 'String' },
						},
					},
				},
				{
					kind: 'VariableDefinition',
					variable: {
						kind: 'Variable',
						name: { kind: 'Name', value: 'firstName' },
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: { kind: 'Name', value: 'String' },
						},
					},
				},
				{
					kind: 'VariableDefinition',
					variable: {
						kind: 'Variable',
						name: { kind: 'Name', value: 'lastName' },
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: { kind: 'Name', value: 'String' },
						},
					},
				},
				{
					kind: 'VariableDefinition',
					variable: {
						kind: 'Variable',
						name: { kind: 'Name', value: 'password' },
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: { kind: 'Name', value: 'String' },
						},
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'createUser' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'username' },
								value: {
									kind: 'Variable',
									name: { kind: 'Name', value: 'username' },
								},
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'email' },
								value: {
									kind: 'Variable',
									name: { kind: 'Name', value: 'email' },
								},
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'firstName' },
								value: {
									kind: 'Variable',
									name: { kind: 'Name', value: 'firstName' },
								},
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'lastName' },
								value: {
									kind: 'Variable',
									name: { kind: 'Name', value: 'lastName' },
								},
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'password' },
								value: {
									kind: 'Variable',
									name: { kind: 'Name', value: 'password' },
								},
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'username' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'email' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'password' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'isPrivate' } },
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
};

export type Mutation = {
	__typename?: 'Mutation';
	createTag?: Maybe<Tag>;
	createTodo?: Maybe<Todo>;
	createUser: User;
	deleteTag: Tag;
	deleteTodo: Todo;
	deleteUser: User;
	updateTag: Tag;
	updateTodo: Todo;
	updateUser: User;
};

export type MutationCreateTagArgs = {
	isVisible?: InputMaybe<Scalars['Boolean']['input']>;
	name: Scalars['String']['input'];
};

export type MutationCreateTodoArgs = {
	title: Scalars['String']['input'];
	userId: Scalars['Int']['input'];
};

export type MutationCreateUserArgs = {
	email: Scalars['String']['input'];
	firstName: Scalars['String']['input'];
	isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
	lastName: Scalars['String']['input'];
	password: Scalars['String']['input'];
	username: Scalars['String']['input'];
};

export type MutationDeleteTagArgs = {
	id: Scalars['Int']['input'];
};

export type MutationDeleteTodoArgs = {
	id: Scalars['Int']['input'];
};

export type MutationDeleteUserArgs = {
	id: Scalars['Int']['input'];
};

export type MutationUpdateTagArgs = {
	id: Scalars['Int']['input'];
	isVisible?: InputMaybe<Scalars['Boolean']['input']>;
	name?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateTodoArgs = {
	description?: InputMaybe<Scalars['Boolean']['input']>;
	id: Scalars['Int']['input'];
	isCompleted?: InputMaybe<Scalars['Boolean']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateUserArgs = {
	email?: InputMaybe<Scalars['String']['input']>;
	firstName?: InputMaybe<Scalars['String']['input']>;
	id: Scalars['Int']['input'];
	isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
	lastName?: InputMaybe<Scalars['String']['input']>;
	password?: InputMaybe<Scalars['String']['input']>;
	username?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
	__typename?: 'Query';
	tag?: Maybe<Tag>;
	tags?: Maybe<Array<Maybe<Tag>>>;
	todo?: Maybe<Todo>;
	todos?: Maybe<Array<Maybe<Todo>>>;
	todosByUserId?: Maybe<Array<Maybe<Todo>>>;
	user?: Maybe<User>;
	users?: Maybe<Array<Maybe<User>>>;
};

export type QueryTagArgs = {
	id: Scalars['Int']['input'];
};

export type QueryTodoArgs = {
	id: Scalars['Int']['input'];
};

export type QueryTodosByUserIdArgs = {
	userId: Scalars['Int']['input'];
};

export type QueryUserArgs = {
	id: Scalars['Int']['input'];
};

export type Subscription = {
	__typename?: 'Subscription';
	tagUpdated?: Maybe<Tag>;
	todoCreated?: Maybe<Todo>;
	todoDeleted?: Maybe<Todo>;
	todoUpdated?: Maybe<Todo>;
};

export type Tag = {
	__typename?: 'Tag';
	id?: Maybe<Scalars['Int']['output']>;
	isVisible?: Maybe<Scalars['Boolean']['output']>;
	name?: Maybe<Scalars['String']['output']>;
};

export type Todo = {
	__typename?: 'Todo';
	description?: Maybe<Scalars['String']['output']>;
	id?: Maybe<Scalars['Int']['output']>;
	isCompleted?: Maybe<Scalars['Boolean']['output']>;
	tags?: Maybe<Array<Maybe<Tag>>>;
	title?: Maybe<Scalars['String']['output']>;
	user?: Maybe<User>;
};

export type User = {
	__typename?: 'User';
	auth_firebase_uid?: Maybe<Scalars['String']['output']>;
	email?: Maybe<Scalars['String']['output']>;
	firstName?: Maybe<Scalars['String']['output']>;
	followers?: Maybe<Array<Maybe<User>>>;
	id?: Maybe<Scalars['Int']['output']>;
	isPrivate?: Maybe<Scalars['Boolean']['output']>;
	lastName?: Maybe<Scalars['String']['output']>;
	password?: Maybe<Scalars['String']['output']>;
	todos?: Maybe<Array<Maybe<Todo>>>;
	username?: Maybe<Scalars['String']['output']>;
};

export type TagQueries = {
	__typename?: 'tagQueries';
	tagById?: Maybe<Tag>;
	tags?: Maybe<Array<Maybe<Tag>>>;
};
