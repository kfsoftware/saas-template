import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Time: any;
  UUID: any;
};

export type AddTenantUserInput = {
  role: Role;
  tenantId: Scalars['String'];
  userId: Scalars['String'];
};

export type AddTenantUserResponse = {
  __typename?: 'AddTenantUserResponse';
  errors?: Maybe<Array<Error>>;
};

export type Charge = {
  __typename?: 'Charge';
  amount: Scalars['Int'];
  amount_captured: Scalars['Int'];
  amount_refunded: Scalars['Int'];
  created: Scalars['Int'];
  currency: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['String'];
};

export type Claim = {
  __typename?: 'Claim';
  text: Scalars['String'];
};

export enum Code {
  AlreadyExists = 'ALREADY_EXISTS',
  NotFound = 'NOT_FOUND',
  Unauthorized = 'UNAUTHORIZED',
  UnknownError = 'UNKNOWN_ERROR',
  ValidationError = 'VALIDATION_ERROR'
}

export type CreateApiKeyInput = {
  role: Role;
  tenantId: Scalars['String'];
};

export type CreateApiKeyResponse = {
  __typename?: 'CreateApiKeyResponse';
  errors?: Maybe<Array<Error>>;
  password: Scalars['String'];
  tenantUser?: Maybe<TenantUser>;
};

export type CreateSessionInput = {
  cancelUrl: Scalars['String'];
  successUrl: Scalars['String'];
  tier: Scalars['String'];
};

export type CreateSessionResponse = {
  __typename?: 'CreateSessionResponse';
  errors?: Maybe<Array<Error>>;
  id?: Maybe<Scalars['String']>;
};

export type CreateTodoInput = {
  title: Scalars['String'];
};

export type CustomerResponse = {
  __typename?: 'CustomerResponse';
  customerId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Error>>;
};

export type DeleteTenantUserInput = {
  tenantId: Scalars['String'];
  userId: Scalars['String'];
};

export type DeleteTenantUserResponse = {
  __typename?: 'DeleteTenantUserResponse';
  errors?: Maybe<Array<Error>>;
};

export type Error = {
  __typename?: 'Error';
  code: Code;
  message: Scalars['String'];
};

export type Invoice = {
  __typename?: 'Invoice';
  account_country: Scalars['String'];
  account_name: Scalars['String'];
  amount_due: Scalars['Int'];
  amount_paid: Scalars['Int'];
  amount_remaining: Scalars['Int'];
  application_fee_amount: Scalars['Int'];
  attempt_count: Scalars['Int'];
  attempted: Scalars['Boolean'];
  auto_advance: Scalars['Boolean'];
  billing_reason: Scalars['String'];
  charge?: Maybe<Charge>;
  collection_method: Scalars['String'];
  created: Scalars['Time'];
  currency: Scalars['String'];
  customer: Scalars['String'];
  customer_email: Scalars['String'];
  customer_name?: Maybe<Scalars['String']>;
  customer_phone?: Maybe<Scalars['String']>;
  customer_shipping: Scalars['String'];
  customer_tax_exempt: Scalars['String'];
  default_payment_method: Scalars['String'];
  default_source: Scalars['String'];
  description: Scalars['String'];
  due_date?: Maybe<Scalars['Time']>;
  ending_balance: Scalars['Int'];
  hosted_invoice_url: Scalars['String'];
  id: Scalars['String'];
  invoice_pdf: Scalars['String'];
  lines?: Maybe<Array<InvoiceLine>>;
  livemode: Scalars['Boolean'];
  next_payment_attempt?: Maybe<Scalars['Time']>;
  paid: Scalars['Boolean'];
  status: Scalars['String'];
  subscription: Scalars['String'];
  subtotal: Scalars['Int'];
  tax: Scalars['Int'];
  total: Scalars['Int'];
};

export type InvoiceLine = {
  __typename?: 'InvoiceLine';
  currency: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['String'];
  periodEnd?: Maybe<Scalars['Time']>;
  periodStart?: Maybe<Scalars['Time']>;
  quantity: Scalars['Int'];
  unitPrice: Scalars['Int'];
};

export type InvoicePaginationInput = {
  after?: Maybe<Scalars['String']>;
  limit?: Scalars['Int'];
};

export type ModifyTenantNameInput = {
  name: Scalars['String'];
  tenantId: Scalars['String'];
};

export type ModifyTenantNameResponse = {
  __typename?: 'ModifyTenantNameResponse';
  errors?: Maybe<Array<Error>>;
};

export type ModifyTenantUserRoleInput = {
  role: Role;
  tenantId: Scalars['String'];
  userId: Scalars['String'];
};

export type ModifyTenantUserRoleResponse = {
  __typename?: 'ModifyTenantUserRoleResponse';
  errors?: Maybe<Array<Error>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addTenantUser: AddTenantUserResponse;
  createApiKey: CreateApiKeyResponse;
  createCustomer?: Maybe<CustomerResponse>;
  createStripeSession: CreateSessionResponse;
  createTenant?: Maybe<TenantResponse>;
  createTodo: Todo;
  deleteTenantUser: DeleteTenantUserResponse;
  markTodoAsComplete: Todo;
  modifyTenantName: ModifyTenantNameResponse;
  modifyTenantUserRole: ModifyTenantUserRoleResponse;
  updateCustomer?: Maybe<UpdateCustomerResponse>;
  updateCustomerEmail?: Maybe<UpdateCustomerResponse>;
  updateCustomerName?: Maybe<UpdateCustomerResponse>;
  updateVat?: Maybe<UpdateVatResponse>;
  upgradeSubscription: UpgradeSubscriptionResponse;
};


export type MutationAddTenantUserArgs = {
  input: AddTenantUserInput;
};


export type MutationCreateApiKeyArgs = {
  input: CreateApiKeyInput;
};


export type MutationCreateCustomerArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  tenantId: Scalars['String'];
  vatType?: Maybe<VatType>;
  vatValue?: Maybe<Scalars['String']>;
};


export type MutationCreateStripeSessionArgs = {
  input: CreateSessionInput;
  tenantId: Scalars['String'];
};


export type MutationCreateTenantArgs = {
  input: TenantInput;
};


export type MutationCreateTodoArgs = {
  input: CreateTodoInput;
  tenantId: Scalars['String'];
};


export type MutationDeleteTenantUserArgs = {
  input: DeleteTenantUserInput;
};


export type MutationMarkTodoAsCompleteArgs = {
  id: Scalars['String'];
  tenantId: Scalars['String'];
};


export type MutationModifyTenantNameArgs = {
  input: ModifyTenantNameInput;
};


export type MutationModifyTenantUserRoleArgs = {
  input: ModifyTenantUserRoleInput;
};


export type MutationUpdateCustomerArgs = {
  input: UpdateCustomerInput;
  tenantId: Scalars['String'];
};


export type MutationUpdateCustomerEmailArgs = {
  email: Scalars['String'];
  tenantId: Scalars['String'];
};


export type MutationUpdateCustomerNameArgs = {
  name: Scalars['String'];
  tenantId: Scalars['String'];
};


export type MutationUpdateVatArgs = {
  input: UpdateVatInput;
  tenantId: Scalars['String'];
};


export type MutationUpgradeSubscriptionArgs = {
  input: UpgradeSubscriptionInput;
  tenantId: Scalars['String'];
};

export type Plan = {
  __typename?: 'Plan';
  amount: Scalars['Int'];
  claims?: Maybe<Array<Claim>>;
  currency: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isFree: Scalars['Boolean'];
  name: Scalars['String'];
  planId: Scalars['String'];
  tier: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  hasAnyRoles?: Maybe<Scalars['Boolean']>;
  hasRole?: Maybe<Scalars['Boolean']>;
  invoices?: Maybe<Array<Invoice>>;
  me?: Maybe<User>;
  plans?: Maybe<Array<Plan>>;
  tenant?: Maybe<Tenant>;
  tenants?: Maybe<Array<Tenant>>;
  todos?: Maybe<Array<Maybe<Todo>>>;
  usersByEmail?: Maybe<Array<User>>;
};


export type QueryHasAnyRolesArgs = {
  roles: Array<Role>;
  tenantId: Scalars['String'];
};


export type QueryHasRoleArgs = {
  role: Role;
  tenantId: Scalars['String'];
};


export type QueryInvoicesArgs = {
  input?: Maybe<InvoicePaginationInput>;
  tenantId: Scalars['String'];
};


export type QueryTenantArgs = {
  tenantId: Scalars['String'];
};


export type QueryTodosArgs = {
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  tenantId: Scalars['String'];
};


export type QueryUsersByEmailArgs = {
  email: Scalars['String'];
};

export enum Role {
  Admin = 'ADMIN',
  Operator = 'OPERATOR',
  Viewer = 'VIEWER'
}

export type StripeAddress = {
  __typename?: 'StripeAddress';
  city: Scalars['String'];
  country: Scalars['String'];
  line1: Scalars['String'];
  line2: Scalars['String'];
  postal_code: Scalars['String'];
};

export type StripeBillingDetails = {
  __typename?: 'StripeBillingDetails';
  address?: Maybe<StripeAddress>;
  email: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
};

export type StripeCustomer = {
  __typename?: 'StripeCustomer';
  email?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  taxIds?: Maybe<Array<TaxId>>;
};

export type StripePaymentMethod = {
  __typename?: 'StripePaymentMethod';
  cardBrand: Scalars['String'];
  cardType: Scalars['String'];
  country: Scalars['String'];
  details: StripeBillingDetails;
  last4: Scalars['String'];
};

export type StripeSubscription = {
  __typename?: 'StripeSubscription';
  canceledAt?: Maybe<Scalars['Time']>;
  currentPeriodEnd?: Maybe<Scalars['Time']>;
  currentPeriodStart?: Maybe<Scalars['Time']>;
  customer: StripeCustomer;
  id: Scalars['String'];
  invoices?: Maybe<Array<Invoice>>;
  nextInvoice?: Maybe<Invoice>;
  nextPendingInvoiceItemInvoice?: Maybe<Scalars['Time']>;
  paymentMethod: StripePaymentMethod;
  planId: Scalars['String'];
  status: SubscriptionStatus;
  tier: Scalars['String'];
  trialEnd?: Maybe<Scalars['Time']>;
  trialStart?: Maybe<Scalars['Time']>;
};

export enum SubscriptionStatus {
  Active = 'active',
  All = 'all',
  Canceled = 'canceled',
  Incomplete = 'incomplete',
  IncompleteExpired = 'incomplete_expired',
  PastDue = 'past_due',
  Trialing = 'trialing',
  Unpaid = 'unpaid'
}

export type TaxId = {
  __typename?: 'TaxId';
  country: Scalars['String'];
  type: VatType;
  value: Scalars['String'];
};

export type Tenant = {
  __typename?: 'Tenant';
  customer?: Maybe<StripeCustomer>;
  id: Scalars['String'];
  name: Scalars['String'];
  slug: Scalars['String'];
  subscription?: Maybe<StripeSubscription>;
  users?: Maybe<Array<TenantUser>>;
};


export type TenantUsersArgs = {
  type?: Maybe<TenantUserType>;
};

export type TenantInput = {
  name: Scalars['String'];
};

export type TenantResponse = {
  __typename?: 'TenantResponse';
  errors?: Maybe<Array<Error>>;
  tenant?: Maybe<Tenant>;
};

export type TenantUser = {
  __typename?: 'TenantUser';
  createdAt: Scalars['Time'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  role: Role;
  type: TenantUserType;
  updatedAt: Scalars['Time'];
  userId: Scalars['String'];
};

export enum TenantUserType {
  ApiKey = 'API_KEY',
  Normal = 'NORMAL'
}

/** This is a description of a Todo */
export type Todo = {
  __typename?: 'Todo';
  id: Scalars['String'];
  status: TodoStatus;
  text: Scalars['String'];
};

export enum TodoStatus {
  Completed = 'COMPLETED',
  Pending = 'PENDING'
}

export type UpdateCustomerInput = {
  email: Scalars['String'];
  name: Scalars['String'];
};

export type UpdateCustomerResponse = {
  __typename?: 'UpdateCustomerResponse';
  errors?: Maybe<Array<Error>>;
};

export type UpdateVatInput = {
  vatNumber: Scalars['String'];
  vatType: VatType;
};

export type UpdateVatResponse = {
  __typename?: 'UpdateVatResponse';
  errors?: Maybe<Array<Error>>;
};

export type UpgradeSubscriptionInput = {
  tier: Scalars['String'];
};

export type UpgradeSubscriptionResponse = {
  __typename?: 'UpgradeSubscriptionResponse';
  errors?: Maybe<Array<Error>>;
};

export type User = {
  __typename?: 'User';
  attrs?: Maybe<Array<UserAttribute>>;
  email: Scalars['String'];
  id: Scalars['String'];
};

export type UserAttribute = {
  __typename?: 'UserAttribute';
  key: Scalars['String'];
  value: Scalars['String'];
};

export enum VatType {
  AeTrn = 'ae_trn',
  AuAbn = 'au_abn',
  BrCnpj = 'br_cnpj',
  BrCpf = 'br_cpf',
  CaBn = 'ca_bn',
  CaGstHst = 'ca_gst_hst',
  CaPstBc = 'ca_pst_bc',
  CaPstMb = 'ca_pst_mb',
  CaPstSk = 'ca_pst_sk',
  CaQst = 'ca_qst',
  ChVat = 'ch_vat',
  ClTin = 'cl_tin',
  EsCif = 'es_cif',
  EuVat = 'eu_vat',
  GbVat = 'gb_vat',
  HkBr = 'hk_br',
  IdNpwp = 'id_npwp',
  IlVat = 'il_vat',
  InGst = 'in_gst',
  JpCn = 'jp_cn',
  JpRn = 'jp_rn',
  KrBrn = 'kr_brn',
  LiUid = 'li_uid',
  MxRfc = 'mx_rfc',
  MyFrp = 'my_frp',
  MyItn = 'my_itn',
  MySst = 'my_sst',
  NoVat = 'no_vat',
  NzGst = 'nz_gst',
  RuInn = 'ru_inn',
  RuKpp = 'ru_kpp',
  SaVat = 'sa_vat',
  SgGst = 'sg_gst',
  SgUen = 'sg_uen',
  ThVat = 'th_vat',
  TwVat = 'tw_vat',
  UsEin = 'us_ein',
  ZaVat = 'za_vat'
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

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

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AddTenantUserInput: AddTenantUserInput;
  AddTenantUserResponse: ResolverTypeWrapper<AddTenantUserResponse>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Charge: ResolverTypeWrapper<Charge>;
  Claim: ResolverTypeWrapper<Claim>;
  Code: Code;
  CreateApiKeyInput: CreateApiKeyInput;
  CreateApiKeyResponse: ResolverTypeWrapper<CreateApiKeyResponse>;
  CreateSessionInput: CreateSessionInput;
  CreateSessionResponse: ResolverTypeWrapper<CreateSessionResponse>;
  CreateTodoInput: CreateTodoInput;
  CustomerResponse: ResolverTypeWrapper<CustomerResponse>;
  DeleteTenantUserInput: DeleteTenantUserInput;
  DeleteTenantUserResponse: ResolverTypeWrapper<DeleteTenantUserResponse>;
  Error: ResolverTypeWrapper<Error>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Invoice: ResolverTypeWrapper<Invoice>;
  InvoiceLine: ResolverTypeWrapper<InvoiceLine>;
  InvoicePaginationInput: InvoicePaginationInput;
  ModifyTenantNameInput: ModifyTenantNameInput;
  ModifyTenantNameResponse: ResolverTypeWrapper<ModifyTenantNameResponse>;
  ModifyTenantUserRoleInput: ModifyTenantUserRoleInput;
  ModifyTenantUserRoleResponse: ResolverTypeWrapper<ModifyTenantUserRoleResponse>;
  Mutation: ResolverTypeWrapper<{}>;
  Plan: ResolverTypeWrapper<Plan>;
  Query: ResolverTypeWrapper<{}>;
  Role: Role;
  String: ResolverTypeWrapper<Scalars['String']>;
  StripeAddress: ResolverTypeWrapper<StripeAddress>;
  StripeBillingDetails: ResolverTypeWrapper<StripeBillingDetails>;
  StripeCustomer: ResolverTypeWrapper<StripeCustomer>;
  StripePaymentMethod: ResolverTypeWrapper<StripePaymentMethod>;
  StripeSubscription: ResolverTypeWrapper<StripeSubscription>;
  SubscriptionStatus: SubscriptionStatus;
  TaxId: ResolverTypeWrapper<TaxId>;
  Tenant: ResolverTypeWrapper<Tenant>;
  TenantInput: TenantInput;
  TenantResponse: ResolverTypeWrapper<TenantResponse>;
  TenantUser: ResolverTypeWrapper<TenantUser>;
  TenantUserType: TenantUserType;
  Time: ResolverTypeWrapper<Scalars['Time']>;
  Todo: ResolverTypeWrapper<Todo>;
  TodoStatus: TodoStatus;
  UUID: ResolverTypeWrapper<Scalars['UUID']>;
  UpdateCustomerInput: UpdateCustomerInput;
  UpdateCustomerResponse: ResolverTypeWrapper<UpdateCustomerResponse>;
  UpdateVatInput: UpdateVatInput;
  UpdateVatResponse: ResolverTypeWrapper<UpdateVatResponse>;
  UpgradeSubscriptionInput: UpgradeSubscriptionInput;
  UpgradeSubscriptionResponse: ResolverTypeWrapper<UpgradeSubscriptionResponse>;
  User: ResolverTypeWrapper<User>;
  UserAttribute: ResolverTypeWrapper<UserAttribute>;
  VatType: VatType;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AddTenantUserInput: AddTenantUserInput;
  AddTenantUserResponse: AddTenantUserResponse;
  Boolean: Scalars['Boolean'];
  Charge: Charge;
  Claim: Claim;
  CreateApiKeyInput: CreateApiKeyInput;
  CreateApiKeyResponse: CreateApiKeyResponse;
  CreateSessionInput: CreateSessionInput;
  CreateSessionResponse: CreateSessionResponse;
  CreateTodoInput: CreateTodoInput;
  CustomerResponse: CustomerResponse;
  DeleteTenantUserInput: DeleteTenantUserInput;
  DeleteTenantUserResponse: DeleteTenantUserResponse;
  Error: Error;
  Int: Scalars['Int'];
  Invoice: Invoice;
  InvoiceLine: InvoiceLine;
  InvoicePaginationInput: InvoicePaginationInput;
  ModifyTenantNameInput: ModifyTenantNameInput;
  ModifyTenantNameResponse: ModifyTenantNameResponse;
  ModifyTenantUserRoleInput: ModifyTenantUserRoleInput;
  ModifyTenantUserRoleResponse: ModifyTenantUserRoleResponse;
  Mutation: {};
  Plan: Plan;
  Query: {};
  String: Scalars['String'];
  StripeAddress: StripeAddress;
  StripeBillingDetails: StripeBillingDetails;
  StripeCustomer: StripeCustomer;
  StripePaymentMethod: StripePaymentMethod;
  StripeSubscription: StripeSubscription;
  TaxId: TaxId;
  Tenant: Tenant;
  TenantInput: TenantInput;
  TenantResponse: TenantResponse;
  TenantUser: TenantUser;
  Time: Scalars['Time'];
  Todo: Todo;
  UUID: Scalars['UUID'];
  UpdateCustomerInput: UpdateCustomerInput;
  UpdateCustomerResponse: UpdateCustomerResponse;
  UpdateVatInput: UpdateVatInput;
  UpdateVatResponse: UpdateVatResponse;
  UpgradeSubscriptionInput: UpgradeSubscriptionInput;
  UpgradeSubscriptionResponse: UpgradeSubscriptionResponse;
  User: User;
  UserAttribute: UserAttribute;
};

export type AddTenantUserResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddTenantUserResponse'] = ResolversParentTypes['AddTenantUserResponse']> = {
  errors?: Resolver<Maybe<Array<ResolversTypes['Error']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChargeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Charge'] = ResolversParentTypes['Charge']> = {
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  amount_captured?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  amount_refunded?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClaimResolvers<ContextType = any, ParentType extends ResolversParentTypes['Claim'] = ResolversParentTypes['Claim']> = {
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateApiKeyResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateApiKeyResponse'] = ResolversParentTypes['CreateApiKeyResponse']> = {
  errors?: Resolver<Maybe<Array<ResolversTypes['Error']>>, ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tenantUser?: Resolver<Maybe<ResolversTypes['TenantUser']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateSessionResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateSessionResponse'] = ResolversParentTypes['CreateSessionResponse']> = {
  errors?: Resolver<Maybe<Array<ResolversTypes['Error']>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerResponse'] = ResolversParentTypes['CustomerResponse']> = {
  customerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['Error']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteTenantUserResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteTenantUserResponse'] = ResolversParentTypes['DeleteTenantUserResponse']> = {
  errors?: Resolver<Maybe<Array<ResolversTypes['Error']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Error'] = ResolversParentTypes['Error']> = {
  code?: Resolver<ResolversTypes['Code'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InvoiceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Invoice'] = ResolversParentTypes['Invoice']> = {
  account_country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  account_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  amount_due?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  amount_paid?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  amount_remaining?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  application_fee_amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  attempt_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  attempted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  auto_advance?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  billing_reason?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  charge?: Resolver<Maybe<ResolversTypes['Charge']>, ParentType, ContextType>;
  collection_method?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customer_email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customer_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customer_phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customer_shipping?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customer_tax_exempt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  default_payment_method?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  default_source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  due_date?: Resolver<Maybe<ResolversTypes['Time']>, ParentType, ContextType>;
  ending_balance?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hosted_invoice_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  invoice_pdf?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lines?: Resolver<Maybe<Array<ResolversTypes['InvoiceLine']>>, ParentType, ContextType>;
  livemode?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  next_payment_attempt?: Resolver<Maybe<ResolversTypes['Time']>, ParentType, ContextType>;
  paid?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subscription?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subtotal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tax?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InvoiceLineResolvers<ContextType = any, ParentType extends ResolversParentTypes['InvoiceLine'] = ResolversParentTypes['InvoiceLine']> = {
  currency?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  periodEnd?: Resolver<Maybe<ResolversTypes['Time']>, ParentType, ContextType>;
  periodStart?: Resolver<Maybe<ResolversTypes['Time']>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  unitPrice?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModifyTenantNameResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ModifyTenantNameResponse'] = ResolversParentTypes['ModifyTenantNameResponse']> = {
  errors?: Resolver<Maybe<Array<ResolversTypes['Error']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModifyTenantUserRoleResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ModifyTenantUserRoleResponse'] = ResolversParentTypes['ModifyTenantUserRoleResponse']> = {
  errors?: Resolver<Maybe<Array<ResolversTypes['Error']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addTenantUser?: Resolver<ResolversTypes['AddTenantUserResponse'], ParentType, ContextType, RequireFields<MutationAddTenantUserArgs, 'input'>>;
  createApiKey?: Resolver<ResolversTypes['CreateApiKeyResponse'], ParentType, ContextType, RequireFields<MutationCreateApiKeyArgs, 'input'>>;
  createCustomer?: Resolver<Maybe<ResolversTypes['CustomerResponse']>, ParentType, ContextType, RequireFields<MutationCreateCustomerArgs, 'email' | 'name' | 'tenantId'>>;
  createStripeSession?: Resolver<ResolversTypes['CreateSessionResponse'], ParentType, ContextType, RequireFields<MutationCreateStripeSessionArgs, 'input' | 'tenantId'>>;
  createTenant?: Resolver<Maybe<ResolversTypes['TenantResponse']>, ParentType, ContextType, RequireFields<MutationCreateTenantArgs, 'input'>>;
  createTodo?: Resolver<ResolversTypes['Todo'], ParentType, ContextType, RequireFields<MutationCreateTodoArgs, 'input' | 'tenantId'>>;
  deleteTenantUser?: Resolver<ResolversTypes['DeleteTenantUserResponse'], ParentType, ContextType, RequireFields<MutationDeleteTenantUserArgs, 'input'>>;
  markTodoAsComplete?: Resolver<ResolversTypes['Todo'], ParentType, ContextType, RequireFields<MutationMarkTodoAsCompleteArgs, 'id' | 'tenantId'>>;
  modifyTenantName?: Resolver<ResolversTypes['ModifyTenantNameResponse'], ParentType, ContextType, RequireFields<MutationModifyTenantNameArgs, 'input'>>;
  modifyTenantUserRole?: Resolver<ResolversTypes['ModifyTenantUserRoleResponse'], ParentType, ContextType, RequireFields<MutationModifyTenantUserRoleArgs, 'input'>>;
  updateCustomer?: Resolver<Maybe<ResolversTypes['UpdateCustomerResponse']>, ParentType, ContextType, RequireFields<MutationUpdateCustomerArgs, 'input' | 'tenantId'>>;
  updateCustomerEmail?: Resolver<Maybe<ResolversTypes['UpdateCustomerResponse']>, ParentType, ContextType, RequireFields<MutationUpdateCustomerEmailArgs, 'email' | 'tenantId'>>;
  updateCustomerName?: Resolver<Maybe<ResolversTypes['UpdateCustomerResponse']>, ParentType, ContextType, RequireFields<MutationUpdateCustomerNameArgs, 'name' | 'tenantId'>>;
  updateVat?: Resolver<Maybe<ResolversTypes['UpdateVatResponse']>, ParentType, ContextType, RequireFields<MutationUpdateVatArgs, 'input' | 'tenantId'>>;
  upgradeSubscription?: Resolver<ResolversTypes['UpgradeSubscriptionResponse'], ParentType, ContextType, RequireFields<MutationUpgradeSubscriptionArgs, 'input' | 'tenantId'>>;
};

export type PlanResolvers<ContextType = any, ParentType extends ResolversParentTypes['Plan'] = ResolversParentTypes['Plan']> = {
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  claims?: Resolver<Maybe<Array<ResolversTypes['Claim']>>, ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isFree?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  planId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  hasAnyRoles?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<QueryHasAnyRolesArgs, 'roles' | 'tenantId'>>;
  hasRole?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<QueryHasRoleArgs, 'role' | 'tenantId'>>;
  invoices?: Resolver<Maybe<Array<ResolversTypes['Invoice']>>, ParentType, ContextType, RequireFields<QueryInvoicesArgs, 'tenantId'>>;
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  plans?: Resolver<Maybe<Array<ResolversTypes['Plan']>>, ParentType, ContextType>;
  tenant?: Resolver<Maybe<ResolversTypes['Tenant']>, ParentType, ContextType, RequireFields<QueryTenantArgs, 'tenantId'>>;
  tenants?: Resolver<Maybe<Array<ResolversTypes['Tenant']>>, ParentType, ContextType>;
  todos?: Resolver<Maybe<Array<Maybe<ResolversTypes['Todo']>>>, ParentType, ContextType, RequireFields<QueryTodosArgs, 'limit' | 'offset' | 'tenantId'>>;
  usersByEmail?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType, RequireFields<QueryUsersByEmailArgs, 'email'>>;
};

export type StripeAddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['StripeAddress'] = ResolversParentTypes['StripeAddress']> = {
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  line1?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  line2?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  postal_code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StripeBillingDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['StripeBillingDetails'] = ResolversParentTypes['StripeBillingDetails']> = {
  address?: Resolver<Maybe<ResolversTypes['StripeAddress']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StripeCustomerResolvers<ContextType = any, ParentType extends ResolversParentTypes['StripeCustomer'] = ResolversParentTypes['StripeCustomer']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  taxIds?: Resolver<Maybe<Array<ResolversTypes['TaxId']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StripePaymentMethodResolvers<ContextType = any, ParentType extends ResolversParentTypes['StripePaymentMethod'] = ResolversParentTypes['StripePaymentMethod']> = {
  cardBrand?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  cardType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  details?: Resolver<ResolversTypes['StripeBillingDetails'], ParentType, ContextType>;
  last4?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StripeSubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['StripeSubscription'] = ResolversParentTypes['StripeSubscription']> = {
  canceledAt?: Resolver<Maybe<ResolversTypes['Time']>, ParentType, ContextType>;
  currentPeriodEnd?: Resolver<Maybe<ResolversTypes['Time']>, ParentType, ContextType>;
  currentPeriodStart?: Resolver<Maybe<ResolversTypes['Time']>, ParentType, ContextType>;
  customer?: Resolver<ResolversTypes['StripeCustomer'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  invoices?: Resolver<Maybe<Array<ResolversTypes['Invoice']>>, ParentType, ContextType>;
  nextInvoice?: Resolver<Maybe<ResolversTypes['Invoice']>, ParentType, ContextType>;
  nextPendingInvoiceItemInvoice?: Resolver<Maybe<ResolversTypes['Time']>, ParentType, ContextType>;
  paymentMethod?: Resolver<ResolversTypes['StripePaymentMethod'], ParentType, ContextType>;
  planId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['SubscriptionStatus'], ParentType, ContextType>;
  tier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trialEnd?: Resolver<Maybe<ResolversTypes['Time']>, ParentType, ContextType>;
  trialStart?: Resolver<Maybe<ResolversTypes['Time']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaxIdResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaxId'] = ResolversParentTypes['TaxId']> = {
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['VatType'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TenantResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tenant'] = ResolversParentTypes['Tenant']> = {
  customer?: Resolver<Maybe<ResolversTypes['StripeCustomer']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subscription?: Resolver<Maybe<ResolversTypes['StripeSubscription']>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<ResolversTypes['TenantUser']>>, ParentType, ContextType, RequireFields<TenantUsersArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TenantResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['TenantResponse'] = ResolversParentTypes['TenantResponse']> = {
  errors?: Resolver<Maybe<Array<ResolversTypes['Error']>>, ParentType, ContextType>;
  tenant?: Resolver<Maybe<ResolversTypes['Tenant']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TenantUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['TenantUser'] = ResolversParentTypes['TenantUser']> = {
  createdAt?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['TenantUserType'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export type TodoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Todo'] = ResolversParentTypes['Todo']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['TodoStatus'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UUID'], any> {
  name: 'UUID';
}

export type UpdateCustomerResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateCustomerResponse'] = ResolversParentTypes['UpdateCustomerResponse']> = {
  errors?: Resolver<Maybe<Array<ResolversTypes['Error']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateVatResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateVatResponse'] = ResolversParentTypes['UpdateVatResponse']> = {
  errors?: Resolver<Maybe<Array<ResolversTypes['Error']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpgradeSubscriptionResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpgradeSubscriptionResponse'] = ResolversParentTypes['UpgradeSubscriptionResponse']> = {
  errors?: Resolver<Maybe<Array<ResolversTypes['Error']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  attrs?: Resolver<Maybe<Array<ResolversTypes['UserAttribute']>>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAttributeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAttribute'] = ResolversParentTypes['UserAttribute']> = {
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AddTenantUserResponse?: AddTenantUserResponseResolvers<ContextType>;
  Charge?: ChargeResolvers<ContextType>;
  Claim?: ClaimResolvers<ContextType>;
  CreateApiKeyResponse?: CreateApiKeyResponseResolvers<ContextType>;
  CreateSessionResponse?: CreateSessionResponseResolvers<ContextType>;
  CustomerResponse?: CustomerResponseResolvers<ContextType>;
  DeleteTenantUserResponse?: DeleteTenantUserResponseResolvers<ContextType>;
  Error?: ErrorResolvers<ContextType>;
  Invoice?: InvoiceResolvers<ContextType>;
  InvoiceLine?: InvoiceLineResolvers<ContextType>;
  ModifyTenantNameResponse?: ModifyTenantNameResponseResolvers<ContextType>;
  ModifyTenantUserRoleResponse?: ModifyTenantUserRoleResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Plan?: PlanResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  StripeAddress?: StripeAddressResolvers<ContextType>;
  StripeBillingDetails?: StripeBillingDetailsResolvers<ContextType>;
  StripeCustomer?: StripeCustomerResolvers<ContextType>;
  StripePaymentMethod?: StripePaymentMethodResolvers<ContextType>;
  StripeSubscription?: StripeSubscriptionResolvers<ContextType>;
  TaxId?: TaxIdResolvers<ContextType>;
  Tenant?: TenantResolvers<ContextType>;
  TenantResponse?: TenantResponseResolvers<ContextType>;
  TenantUser?: TenantUserResolvers<ContextType>;
  Time?: GraphQLScalarType;
  Todo?: TodoResolvers<ContextType>;
  UUID?: GraphQLScalarType;
  UpdateCustomerResponse?: UpdateCustomerResponseResolvers<ContextType>;
  UpdateVatResponse?: UpdateVatResponseResolvers<ContextType>;
  UpgradeSubscriptionResponse?: UpgradeSubscriptionResponseResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserAttribute?: UserAttributeResolvers<ContextType>;
};


export type CreateTodoMutationVariables = Exact<{
  input: CreateTodoInput;
  tenantId: Scalars['String'];
}>;


export type CreateTodoMutation = { __typename?: 'Mutation', createTodo: { __typename?: 'Todo', id: string, status: TodoStatus, text: string } };

export type GetPlansQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPlansQuery = { __typename?: 'Query', plans?: Array<{ __typename?: 'Plan', description?: string | null | undefined, name: string, planId: string, amount: number, currency: string, isFree: boolean, tier: string, claims?: Array<{ __typename?: 'Claim', text: string }> | null | undefined }> | null | undefined };

export type GetTodosQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  tenantId: Scalars['String'];
}>;


export type GetTodosQuery = { __typename?: 'Query', todos?: Array<{ __typename?: 'Todo', id: string, status: TodoStatus, text: string } | null | undefined> | null | undefined };

export type MarkTodoAsCompleteMutationVariables = Exact<{
  id: Scalars['String'];
  tenantId: Scalars['String'];
}>;


export type MarkTodoAsCompleteMutation = { __typename?: 'Mutation', markTodoAsComplete: { __typename?: 'Todo', id: string, text: string, status: TodoStatus } };


export const CreateTodoDocument = gql`
    mutation createTodo($input: CreateTodoInput!, $tenantId: String!) {
  createTodo(input: $input, tenantId: $tenantId) {
    id
    status
    text
  }
}
    `;
export type CreateTodoMutationFn = Apollo.MutationFunction<CreateTodoMutation, CreateTodoMutationVariables>;

/**
 * __useCreateTodoMutation__
 *
 * To run a mutation, you first call `useCreateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoMutation, { data, loading, error }] = useCreateTodoMutation({
 *   variables: {
 *      input: // value for 'input'
 *      tenantId: // value for 'tenantId'
 *   },
 * });
 */
export function useCreateTodoMutation(baseOptions?: Apollo.MutationHookOptions<CreateTodoMutation, CreateTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(CreateTodoDocument, options);
      }
export type CreateTodoMutationHookResult = ReturnType<typeof useCreateTodoMutation>;
export type CreateTodoMutationResult = Apollo.MutationResult<CreateTodoMutation>;
export type CreateTodoMutationOptions = Apollo.BaseMutationOptions<CreateTodoMutation, CreateTodoMutationVariables>;
export const GetPlansDocument = gql`
    query GetPlans {
  plans {
    description
    name
    claims {
      text
    }
    planId
    amount
    currency
    isFree
    tier
  }
}
    `;

/**
 * __useGetPlansQuery__
 *
 * To run a query within a React component, call `useGetPlansQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlansQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlansQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPlansQuery(baseOptions?: Apollo.QueryHookOptions<GetPlansQuery, GetPlansQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPlansQuery, GetPlansQueryVariables>(GetPlansDocument, options);
      }
export function useGetPlansLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlansQuery, GetPlansQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPlansQuery, GetPlansQueryVariables>(GetPlansDocument, options);
        }
export type GetPlansQueryHookResult = ReturnType<typeof useGetPlansQuery>;
export type GetPlansLazyQueryHookResult = ReturnType<typeof useGetPlansLazyQuery>;
export type GetPlansQueryResult = Apollo.QueryResult<GetPlansQuery, GetPlansQueryVariables>;
export const GetTodosDocument = gql`
    query getTodos($limit: Int!, $offset: Int!, $tenantId: String!) {
  todos(limit: $limit, offset: $offset, tenantId: $tenantId) {
    id
    status
    text
  }
}
    `;

/**
 * __useGetTodosQuery__
 *
 * To run a query within a React component, call `useGetTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodosQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      tenantId: // value for 'tenantId'
 *   },
 * });
 */
export function useGetTodosQuery(baseOptions: Apollo.QueryHookOptions<GetTodosQuery, GetTodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTodosQuery, GetTodosQueryVariables>(GetTodosDocument, options);
      }
export function useGetTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTodosQuery, GetTodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTodosQuery, GetTodosQueryVariables>(GetTodosDocument, options);
        }
export type GetTodosQueryHookResult = ReturnType<typeof useGetTodosQuery>;
export type GetTodosLazyQueryHookResult = ReturnType<typeof useGetTodosLazyQuery>;
export type GetTodosQueryResult = Apollo.QueryResult<GetTodosQuery, GetTodosQueryVariables>;
export const MarkTodoAsCompleteDocument = gql`
    mutation markTodoAsComplete($id: String!, $tenantId: String!) {
  markTodoAsComplete(id: $id, tenantId: $tenantId) {
    id
    text
    status
  }
}
    `;
export type MarkTodoAsCompleteMutationFn = Apollo.MutationFunction<MarkTodoAsCompleteMutation, MarkTodoAsCompleteMutationVariables>;

/**
 * __useMarkTodoAsCompleteMutation__
 *
 * To run a mutation, you first call `useMarkTodoAsCompleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkTodoAsCompleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markTodoAsCompleteMutation, { data, loading, error }] = useMarkTodoAsCompleteMutation({
 *   variables: {
 *      id: // value for 'id'
 *      tenantId: // value for 'tenantId'
 *   },
 * });
 */
export function useMarkTodoAsCompleteMutation(baseOptions?: Apollo.MutationHookOptions<MarkTodoAsCompleteMutation, MarkTodoAsCompleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MarkTodoAsCompleteMutation, MarkTodoAsCompleteMutationVariables>(MarkTodoAsCompleteDocument, options);
      }
export type MarkTodoAsCompleteMutationHookResult = ReturnType<typeof useMarkTodoAsCompleteMutation>;
export type MarkTodoAsCompleteMutationResult = Apollo.MutationResult<MarkTodoAsCompleteMutation>;
export type MarkTodoAsCompleteMutationOptions = Apollo.BaseMutationOptions<MarkTodoAsCompleteMutation, MarkTodoAsCompleteMutationVariables>;