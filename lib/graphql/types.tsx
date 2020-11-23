import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type RequireFields<T, K extends keyof T> = {
	[X in Exclude<keyof T, K>]?: T[X];
} &
	{ [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
};

export type User = {
	id: Scalars['ID'];
	previewURL?: Maybe<Scalars['String']>;
	name: Scalars['String'];
	avatar: Scalars['String'];
	contact: Scalars['String'];
};

export type Viewer = {
	id?: Maybe<Scalars['ID']>;
	token?: Maybe<Scalars['String']>;
	avatar?: Maybe<Scalars['String']>;
	didRequest: Scalars['Boolean'];
};

export type LogInInput = {
	code: Scalars['String'];
};

export type Query = {
	authUrl: Scalars['String'];
	user: User;
};

export type QueryUserArgs = {
	id: Scalars['ID'];
};

export type Mutation = {
	logIn: Viewer;
	logOut: Viewer;
};

export type MutationLogInArgs = {
	input?: Maybe<LogInInput>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
	fragment: string;
	resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
	selectionSet: string;
	resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
	| LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
	| NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
	| ResolverFn<TResult, TParent, TContext, TArgs>
	| StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs
> {
	subscribe: SubscriptionSubscribeFn<
		{ [key in TKey]: TResult },
		TParent,
		TContext,
		TArgs
	>;
	resolve?: SubscriptionResolveFn<
		TResult,
		{ [key in TKey]: TResult },
		TContext,
		TArgs
	>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
	subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
	resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs
> =
	| SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
	| SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
	TResult,
	TKey extends string,
	TParent = {},
	TContext = {},
	TArgs = {}
> =
	| ((
			...args: any[]
	  ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
	| SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
	parent: TParent,
	context: TContext,
	info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
	obj: T,
	context: TContext,
	info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
	TResult = {},
	TParent = {},
	TContext = {},
	TArgs = {}
> = (
	next: NextResolverFn<TResult>,
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
	User: ResolverTypeWrapper<User>;
	ID: ResolverTypeWrapper<Scalars['ID']>;
	String: ResolverTypeWrapper<Scalars['String']>;
	Viewer: ResolverTypeWrapper<Viewer>;
	Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
	LogInInput: LogInInput;
	Query: ResolverTypeWrapper<{}>;
	Mutation: ResolverTypeWrapper<{}>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
	User: User;
	ID: Scalars['ID'];
	String: Scalars['String'];
	Viewer: Viewer;
	Boolean: Scalars['Boolean'];
	LogInInput: LogInInput;
	Query: {};
	Mutation: {};
};

export type UserResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = {
	id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
	previewURL?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	avatar?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	contact?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ViewerResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Viewer'] = ResolversParentTypes['Viewer']
> = {
	id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
	token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	didRequest?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
	authUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	user?: Resolver<
		ResolversTypes['User'],
		ParentType,
		ContextType,
		RequireFields<QueryUserArgs, 'id'>
	>;
};

export type MutationResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
	logIn?: Resolver<
		ResolversTypes['Viewer'],
		ParentType,
		ContextType,
		RequireFields<MutationLogInArgs, never>
	>;
	logOut?: Resolver<ResolversTypes['Viewer'], ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
	User?: UserResolvers<ContextType>;
	Viewer?: ViewerResolvers<ContextType>;
	Query?: QueryResolvers<ContextType>;
	Mutation?: MutationResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
