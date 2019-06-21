(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/services/accounts/src/app/accounts.module.ts":
/*!***********************************************************!*\
  !*** ./apps/services/accounts/src/app/accounts.module.ts ***!
  \***********************************************************/
/*! exports provided: AccountsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsModule", function() { return AccountsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fsgme_distributed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fsgme/distributed */ "./libs/distributed/src/index.ts");
/* harmony import */ var _accounts_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accounts.resolver */ "./apps/services/accounts/src/app/accounts.resolver.ts");




let AccountsModule = class AccountsModule {
};
AccountsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            /*GraphQLModule.forRootAsync({
              useClass: GqlAccountsConfigService,
            }),*/
            _fsgme_distributed__WEBPACK_IMPORTED_MODULE_2__["GraphqlDistributedModule"].forRoot({
                typePaths: ['**/*.graphql']
            }),
        ],
        providers: [_accounts_resolver__WEBPACK_IMPORTED_MODULE_3__["AccountsResolver"]],
    })
], AccountsModule);



/***/ }),

/***/ "./apps/services/accounts/src/app/accounts.resolver.ts":
/*!*************************************************************!*\
  !*** ./apps/services/accounts/src/app/accounts.resolver.ts ***!
  \*************************************************************/
/*! exports provided: AccountsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsResolver", function() { return AccountsResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fsgme_distributed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fsgme/distributed */ "./libs/distributed/src/index.ts");



const users = [
    {
        id: "1",
        name: "Ada Lovelace",
        birthDate: "1815-12-10",
        username: "@ada"
    },
    {
        id: "2",
        name: "Alan Turing",
        birthDate: "1912-06-23",
        username: "@complete"
    }
];
let AccountsResolver = class AccountsResolver {
    me() {
        return users[0];
    }
    user({ id }) {
        return users.find(user => user.id === id);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["Query"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], AccountsResolver.prototype, "me", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["Resolver"])('User'),
    Object(_fsgme_distributed__WEBPACK_IMPORTED_MODULE_2__["ResolveReference"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], AccountsResolver.prototype, "user", null);
AccountsResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["Resolver"])()
], AccountsResolver);



/***/ }),

/***/ "./apps/services/accounts/src/main.ts":
/*!********************************************!*\
  !*** ./apps/services/accounts/src/main.ts ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_accounts_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/accounts.module */ "./apps/services/accounts/src/app/accounts.module.ts");



(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](undefined, void 0, void 0, function* () {
    const app = yield _nestjs_core__WEBPACK_IMPORTED_MODULE_1__["NestFactory"].create(_app_accounts_module__WEBPACK_IMPORTED_MODULE_2__["AccountsModule"]);
    yield app.listen(4000);
}))();


/***/ }),

/***/ "./libs/distributed/src/index.ts":
/*!***************************************!*\
  !*** ./libs/distributed/src/index.ts ***!
  \***************************************/
/*! exports provided: GraphqlDistributedGatewayModule, GraphqlDistributedModule, ResolveReference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_graphql_distributed_gateway_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/graphql-distributed-gateway.module */ "./libs/distributed/src/lib/graphql-distributed-gateway.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphqlDistributedGatewayModule", function() { return _lib_graphql_distributed_gateway_module__WEBPACK_IMPORTED_MODULE_0__["GraphqlDistributedGatewayModule"]; });

/* harmony import */ var _lib_graphql_distributed_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/graphql-distributed.module */ "./libs/distributed/src/lib/graphql-distributed.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphqlDistributedModule", function() { return _lib_graphql_distributed_module__WEBPACK_IMPORTED_MODULE_1__["GraphqlDistributedModule"]; });

/* harmony import */ var _lib_decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/decorators */ "./libs/distributed/src/lib/decorators/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResolveReference", function() { return _lib_decorators__WEBPACK_IMPORTED_MODULE_2__["ResolveReference"]; });

// @TOD0: add support for code-first approach
// @ts-ignore





/***/ }),

/***/ "./libs/distributed/src/lib/decorators/index.ts":
/*!******************************************************!*\
  !*** ./libs/distributed/src/lib/decorators/index.ts ***!
  \******************************************************/
/*! exports provided: ResolveReference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resolve_reference_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resolve-reference.decorator */ "./libs/distributed/src/lib/decorators/resolve-reference.decorator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResolveReference", function() { return _resolve_reference_decorator__WEBPACK_IMPORTED_MODULE_0__["ResolveReference"]; });




/***/ }),

/***/ "./libs/distributed/src/lib/decorators/resolve-reference.decorator.ts":
/*!****************************************************************************!*\
  !*** ./libs/distributed/src/lib/decorators/resolve-reference.decorator.ts ***!
  \****************************************************************************/
/*! exports provided: ResolveReference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolveReference", function() { return ResolveReference; });
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tokens */ "./libs/distributed/src/lib/tokens.ts");


function ResolveReference() {
    return (target, key, descriptor) => {
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__["SetMetadata"])(_tokens__WEBPACK_IMPORTED_MODULE_1__["RESOLVE_REFERENCE_METADATA"], true)(target, key, descriptor);
    };
}


/***/ }),

/***/ "./libs/distributed/src/lib/graphql-distributed-gateway.module.ts":
/*!************************************************************************!*\
  !*** ./libs/distributed/src/lib/graphql-distributed-gateway.module.ts ***!
  \************************************************************************/
/*! exports provided: GraphqlDistributedGatewayModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphqlDistributedGatewayModule", function() { return GraphqlDistributedGatewayModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_gateway__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/gateway */ "@apollo/gateway");
/* harmony import */ var _apollo_gateway__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_gateway__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tokens */ "./libs/distributed/src/lib/tokens.ts");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interfaces */ "./libs/distributed/src/lib/interfaces/index.ts");

var GraphqlDistributedGatewayModule_1, _a, _b, _c;






let GraphqlDistributedGatewayModule = GraphqlDistributedGatewayModule_1 = class GraphqlDistributedGatewayModule {
    constructor(httpAdapterHost, buildService, options) {
        this.httpAdapterHost = httpAdapterHost;
        this.buildService = buildService;
        this.options = options;
    }
    static forRoot(options) {
        return {
            module: GraphqlDistributedGatewayModule_1,
            providers: [
                {
                    provide: _tokens__WEBPACK_IMPORTED_MODULE_5__["DISTRIBUTED_GATEWAY_OPTIONS"],
                    useValue: options,
                },
            ],
        };
    }
    onModuleInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.httpAdapterHost)
                return;
            const { httpAdapter } = this.httpAdapterHost;
            if (!httpAdapter)
                return;
            const app = httpAdapter.getInstance();
            const { options: { __exposeQueryPlanExperimental, debug, serviceList, path, disableHealthCheck, onHealthCheck, cors, bodyParserConfig, installSubscriptionHandlers, }, buildService, } = this;
            const gateway = new _apollo_gateway__WEBPACK_IMPORTED_MODULE_2__["ApolloGateway"]({
                __exposeQueryPlanExperimental,
                debug,
                serviceList,
                buildService,
            });
            const { schema, executor } = yield gateway.load();
            this.apolloServer = new apollo_server_express__WEBPACK_IMPORTED_MODULE_3__["ApolloServer"]({
                executor,
                schema,
            });
            this.apolloServer.applyMiddleware({
                app,
                path,
                disableHealthCheck,
                onHealthCheck,
                cors,
                bodyParserConfig,
            });
            if (installSubscriptionHandlers) {
                this.apolloServer.installSubscriptionHandlers(httpAdapter.getHttpServer());
            }
        });
    }
};
GraphqlDistributedGatewayModule = GraphqlDistributedGatewayModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({}),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_tokens__WEBPACK_IMPORTED_MODULE_5__["DISTRIBUTED_GATEWAY_BUILD_SERVICE"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_tokens__WEBPACK_IMPORTED_MODULE_5__["DISTRIBUTED_GATEWAY_OPTIONS"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_a = typeof _nestjs_core__WEBPACK_IMPORTED_MODULE_4__["HttpAdapterHost"] !== "undefined" && _nestjs_core__WEBPACK_IMPORTED_MODULE_4__["HttpAdapterHost"]) === "function" ? _a : Object, typeof (_b = typeof _interfaces__WEBPACK_IMPORTED_MODULE_6__["BuildService"] !== "undefined" && _interfaces__WEBPACK_IMPORTED_MODULE_6__["BuildService"]) === "function" ? _b : Object, typeof (_c = typeof _interfaces__WEBPACK_IMPORTED_MODULE_6__["DistributedGatewayOptions"] !== "undefined" && _interfaces__WEBPACK_IMPORTED_MODULE_6__["DistributedGatewayOptions"]) === "function" ? _c : Object])
], GraphqlDistributedGatewayModule);



/***/ }),

/***/ "./libs/distributed/src/lib/graphql-distributed.factory.ts":
/*!*****************************************************************!*\
  !*** ./libs/distributed/src/lib/graphql-distributed.factory.ts ***!
  \*****************************************************************/
/*! exports provided: GraphqlDistributedFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphqlDistributedFactory", function() { return GraphqlDistributedFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_graphql_dist_services_resolvers_explorer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/graphql/dist/services/resolvers-explorer.service */ "@nestjs/graphql/dist/services/resolvers-explorer.service");
/* harmony import */ var _nestjs_graphql_dist_services_resolvers_explorer_service__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql_dist_services_resolvers_explorer_service__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_graphql_dist_services_delegates_explorer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/graphql/dist/services/delegates-explorer.service */ "@nestjs/graphql/dist/services/delegates-explorer.service");
/* harmony import */ var _nestjs_graphql_dist_services_delegates_explorer_service__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql_dist_services_delegates_explorer_service__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _nestjs_graphql_dist_services_scalars_explorer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nestjs/graphql/dist/services/scalars-explorer.service */ "@nestjs/graphql/dist/services/scalars-explorer.service");
/* harmony import */ var _nestjs_graphql_dist_services_scalars_explorer_service__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql_dist_services_scalars_explorer_service__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nestjs_graphql_dist_graphql_schema_builder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nestjs/graphql/dist/graphql-schema-builder */ "@nestjs/graphql/dist/graphql-schema-builder");
/* harmony import */ var _nestjs_graphql_dist_graphql_schema_builder__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql_dist_graphql_schema_builder__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _nestjs_graphql_dist_utils_extend_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nestjs/graphql/dist/utils/extend.util */ "@nestjs/graphql/dist/utils/extend.util");
/* harmony import */ var _nestjs_graphql_dist_utils_extend_util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql_dist_utils_extend_util__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _apollo_federation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/federation */ "@apollo/federation");
/* harmony import */ var _apollo_federation__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_apollo_federation__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services */ "./libs/distributed/src/lib/services/index.ts");
/* harmony import */ var _nestjs_graphql_dist_utils_remove_temp_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nestjs/graphql/dist/utils/remove-temp.util */ "@nestjs/graphql/dist/utils/remove-temp.util");
/* harmony import */ var _nestjs_graphql_dist_utils_remove_temp_util__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql_dist_utils_remove_temp_util__WEBPACK_IMPORTED_MODULE_11__);

var _a, _b, _c, _d, _e, _f;











let GraphqlDistributedFactory = class GraphqlDistributedFactory {
    constructor(resolversExplorerService, delegatesExplorerService, scalarsExplorerService, referencesExplorerService, graphqlAstExplorer, gqlSchemaBuilder) {
        this.resolversExplorerService = resolversExplorerService;
        this.delegatesExplorerService = delegatesExplorerService;
        this.scalarsExplorerService = scalarsExplorerService;
        this.referencesExplorerService = referencesExplorerService;
        this.graphqlAstExplorer = graphqlAstExplorer;
        this.gqlSchemaBuilder = gqlSchemaBuilder;
    }
    extendResolvers(resolvers) {
        return resolvers.reduce((prev, curr) => Object(_nestjs_graphql_dist_utils_extend_util__WEBPACK_IMPORTED_MODULE_7__["extend"])(prev, curr), {});
    }
    mergeOptions(options = {}) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const resolvers = this.extendResolvers([
                this.resolversExplorerService.explore(),
                this.scalarsExplorerService.explore(),
                this.referencesExplorerService.explore(),
            ]);
            // const referenceResolvers = this.referencesExplorerService.explore();
            const typeDefs = apollo_server_express__WEBPACK_IMPORTED_MODULE_8__["gql"] `${options.typeDefs}`;
            const executableSchema = Object(apollo_server_express__WEBPACK_IMPORTED_MODULE_8__["makeExecutableSchema"])({
                //resolvers: extend(typesResolvers, options.resolvers),
                directiveResolvers: options.directiveResolvers,
                schemaDirectives: options.schemaDirectives,
                resolverValidationOptions: options.resolverValidationOptions,
                typeDefs,
            });
            const federatedSchema = Object(_apollo_federation__WEBPACK_IMPORTED_MODULE_9__["buildFederatedSchema"])([
                {
                    typeDefs,
                    resolvers,
                }
            ]);
            const schema = Object(apollo_server_express__WEBPACK_IMPORTED_MODULE_8__["mergeSchemas"])({
                schemas: [executableSchema, federatedSchema],
            });
            Object(_nestjs_graphql_dist_utils_remove_temp_util__WEBPACK_IMPORTED_MODULE_11__["removeTempField"])(schema);
            return Object.assign({}, options, { typeDefs: undefined, schema });
            /*if (options.autoSchemaFile) {
              const autoGeneratedSchema: GraphQLSchema = await this.gqlSchemaBuilder.build(
                options.autoSchemaFile,
                options.buildSchemaOptions,
                this.resolversExplorerService.getAllCtors(),
              );
        
              const executeableSchema = makeExecutableSchema({
                resolvers: extend(resolvers, options.resolvers),
                typeDefs: gql`
                  ${printSchema(autoGeneratedSchema)}
                `,
                resolverValidationOptions: {
                  ...(options.resolverValidationOptions || {}),
                  requireResolversForResolveType: false,
                },
              });
            }*/
        });
    }
};
GraphqlDistributedFactory = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_a = typeof _nestjs_graphql_dist_services_resolvers_explorer_service__WEBPACK_IMPORTED_MODULE_2__["ResolversExplorerService"] !== "undefined" && _nestjs_graphql_dist_services_resolvers_explorer_service__WEBPACK_IMPORTED_MODULE_2__["ResolversExplorerService"]) === "function" ? _a : Object, typeof (_b = typeof _nestjs_graphql_dist_services_delegates_explorer_service__WEBPACK_IMPORTED_MODULE_3__["DelegatesExplorerService"] !== "undefined" && _nestjs_graphql_dist_services_delegates_explorer_service__WEBPACK_IMPORTED_MODULE_3__["DelegatesExplorerService"]) === "function" ? _b : Object, typeof (_c = typeof _nestjs_graphql_dist_services_scalars_explorer_service__WEBPACK_IMPORTED_MODULE_5__["ScalarsExplorerService"] !== "undefined" && _nestjs_graphql_dist_services_scalars_explorer_service__WEBPACK_IMPORTED_MODULE_5__["ScalarsExplorerService"]) === "function" ? _c : Object, typeof (_d = typeof _services__WEBPACK_IMPORTED_MODULE_10__["ReferencesExplorerService"] !== "undefined" && _services__WEBPACK_IMPORTED_MODULE_10__["ReferencesExplorerService"]) === "function" ? _d : Object, typeof (_e = typeof _nestjs_graphql__WEBPACK_IMPORTED_MODULE_4__["GraphQLAstExplorer"] !== "undefined" && _nestjs_graphql__WEBPACK_IMPORTED_MODULE_4__["GraphQLAstExplorer"]) === "function" ? _e : Object, typeof (_f = typeof _nestjs_graphql_dist_graphql_schema_builder__WEBPACK_IMPORTED_MODULE_6__["GraphQLSchemaBuilder"] !== "undefined" && _nestjs_graphql_dist_graphql_schema_builder__WEBPACK_IMPORTED_MODULE_6__["GraphQLSchemaBuilder"]) === "function" ? _f : Object])
], GraphqlDistributedFactory);



/***/ }),

/***/ "./libs/distributed/src/lib/graphql-distributed.module.ts":
/*!****************************************************************!*\
  !*** ./libs/distributed/src/lib/graphql-distributed.module.ts ***!
  \****************************************************************/
/*! exports provided: GraphqlDistributedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphqlDistributedModule", function() { return GraphqlDistributedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_graphql_dist_graphql_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/graphql/dist/graphql.constants */ "@nestjs/graphql/dist/graphql.constants");
/* harmony import */ var _nestjs_graphql_dist_graphql_constants__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql_dist_graphql_constants__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _nestjs_graphql_dist_utils_merge_defaults_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nestjs/graphql/dist/utils/merge-defaults.util */ "@nestjs/graphql/dist/utils/merge-defaults.util");
/* harmony import */ var _nestjs_graphql_dist_utils_merge_defaults_util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql_dist_utils_merge_defaults_util__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nestjs_graphql_dist_utils_generate_token_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nestjs/graphql/dist/utils/generate-token.util */ "@nestjs/graphql/dist/utils/generate-token.util");
/* harmony import */ var _nestjs_graphql_dist_utils_generate_token_util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql_dist_utils_generate_token_util__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _nestjs_graphql_dist_graphql_schema_builder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nestjs/graphql/dist/graphql-schema-builder */ "@nestjs/graphql/dist/graphql-schema-builder");
/* harmony import */ var _nestjs_graphql_dist_graphql_schema_builder__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql_dist_graphql_schema_builder__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _nestjs_graphql_dist_services_scalars_explorer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nestjs/graphql/dist/services/scalars-explorer.service */ "@nestjs/graphql/dist/services/scalars-explorer.service");
/* harmony import */ var _nestjs_graphql_dist_services_scalars_explorer_service__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql_dist_services_scalars_explorer_service__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _nestjs_graphql_dist_services_delegates_explorer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nestjs/graphql/dist/services/delegates-explorer.service */ "@nestjs/graphql/dist/services/delegates-explorer.service");
/* harmony import */ var _nestjs_graphql_dist_services_delegates_explorer_service__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql_dist_services_delegates_explorer_service__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _nestjs_graphql_dist_services_resolvers_explorer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nestjs/graphql/dist/services/resolvers-explorer.service */ "@nestjs/graphql/dist/services/resolvers-explorer.service");
/* harmony import */ var _nestjs_graphql_dist_services_resolvers_explorer_service__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql_dist_services_resolvers_explorer_service__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _nestjs_core_metadata_scanner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nestjs/core/metadata-scanner */ "@nestjs/core/metadata-scanner");
/* harmony import */ var _nestjs_core_metadata_scanner__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core_metadata_scanner__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _nestjs_graphql_dist_utils_extend_util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nestjs/graphql/dist/utils/extend.util */ "@nestjs/graphql/dist/utils/extend.util");
/* harmony import */ var _nestjs_graphql_dist_utils_extend_util__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql_dist_utils_extend_util__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _apollo_federation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @apollo/federation */ "@apollo/federation");
/* harmony import */ var _apollo_federation__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_apollo_federation__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _graphql_distributed_factory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./graphql-distributed.factory */ "./libs/distributed/src/lib/graphql-distributed.factory.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services */ "./libs/distributed/src/lib/services/index.ts");

var GraphqlDistributedModule_1, _a, _b, _c, _d, _e;
















let GraphqlDistributedModule = GraphqlDistributedModule_1 = class GraphqlDistributedModule {
    constructor(httpAdapterHost, options, graphqlFactory, graphqlDistributedFactory, graphqlTypesLoader) {
        this.httpAdapterHost = httpAdapterHost;
        this.options = options;
        this.graphqlFactory = graphqlFactory;
        this.graphqlDistributedFactory = graphqlDistributedFactory;
        this.graphqlTypesLoader = graphqlTypesLoader;
    }
    static forRoot(options = {}) {
        options = Object(_nestjs_graphql_dist_utils_merge_defaults_util__WEBPACK_IMPORTED_MODULE_5__["mergeDefaults"])(options);
        return {
            module: GraphqlDistributedModule_1,
            providers: [
                {
                    provide: _nestjs_graphql_dist_graphql_constants__WEBPACK_IMPORTED_MODULE_3__["GRAPHQL_MODULE_OPTIONS"],
                    useValue: options,
                },
            ],
        };
    }
    static forRootAsync(options) {
        return {
            module: GraphqlDistributedModule_1,
            imports: options.imports,
            providers: [
                ...this.createAsyncProviders(options),
                {
                    provide: _nestjs_graphql_dist_graphql_constants__WEBPACK_IMPORTED_MODULE_3__["GRAPHQL_MODULE_ID"],
                    useValue: Object(_nestjs_graphql_dist_utils_generate_token_util__WEBPACK_IMPORTED_MODULE_6__["generateString"])(),
                },
            ],
        };
    }
    static createAsyncProviders(options) {
        if (options.useExisting || options.useFactory) {
            return [this.createAsyncOptionsProvider(options)];
        }
        return [
            this.createAsyncOptionsProvider(options),
            {
                provide: options.useClass,
                useClass: options.useClass,
            },
        ];
    }
    static createAsyncOptionsProvider(options) {
        if (options.useFactory) {
            return {
                provide: _nestjs_graphql_dist_graphql_constants__WEBPACK_IMPORTED_MODULE_3__["GRAPHQL_MODULE_OPTIONS"],
                useFactory: options.useFactory,
                inject: options.inject || [],
            };
        }
        return {
            provide: _nestjs_graphql_dist_graphql_constants__WEBPACK_IMPORTED_MODULE_3__["GRAPHQL_MODULE_OPTIONS"],
            useFactory: (optionsFactory) => optionsFactory.createGqlOptions(),
            inject: [options.useExisting || options.useClass],
        };
    }
    onModuleInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.httpAdapterHost)
                return;
            const { httpAdapter } = this.httpAdapterHost;
            if (!httpAdapter)
                return;
            const { path, disableHealthCheck, onHealthCheck, cors, bodyParserConfig, } = this.options;
            const app = httpAdapter.getInstance();
            const typeDefs = (yield this.graphqlTypesLoader.mergeTypesByPaths(this.options.typePaths)) || [];
            const mergedTypeDefs = Object(_nestjs_graphql_dist_utils_extend_util__WEBPACK_IMPORTED_MODULE_12__["extend"])(typeDefs, this.options.typeDefs);
            const apolloOptions = yield this.graphqlDistributedFactory.mergeOptions(Object.assign({}, this.options, { typeDefs: mergedTypeDefs }));
            if (this.options.definitions && this.options.definitions.path) {
                yield this.graphqlFactory.generateDefinitions(Object(_apollo_federation__WEBPACK_IMPORTED_MODULE_13__["printSchema"])(apolloOptions.schema), this.options);
            }
            this.apolloServer = new apollo_server_express__WEBPACK_IMPORTED_MODULE_4__["ApolloServer"](apolloOptions);
            this.apolloServer.applyMiddleware({
                app,
                path,
                disableHealthCheck,
                onHealthCheck,
                cors,
                bodyParserConfig,
            });
            if (this.options.installSubscriptionHandlers) {
                // TL;DR <https://github.com/apollographql/apollo-server/issues/2776>
                throw new Error('No support for subscriptions yet');
                /*this.apolloServer.installSubscriptionHandlers(
                  httpAdapter.getHttpServer(),
                );*/
            }
        });
    }
};
GraphqlDistributedModule = GraphqlDistributedModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        providers: [
            _graphql_distributed_factory__WEBPACK_IMPORTED_MODULE_15__["GraphqlDistributedFactory"],
            _nestjs_graphql__WEBPACK_IMPORTED_MODULE_14__["GraphQLFactory"],
            _nestjs_core_metadata_scanner__WEBPACK_IMPORTED_MODULE_11__["MetadataScanner"],
            _nestjs_graphql_dist_services_resolvers_explorer_service__WEBPACK_IMPORTED_MODULE_10__["ResolversExplorerService"],
            _nestjs_graphql_dist_services_delegates_explorer_service__WEBPACK_IMPORTED_MODULE_9__["DelegatesExplorerService"],
            _nestjs_graphql_dist_services_scalars_explorer_service__WEBPACK_IMPORTED_MODULE_8__["ScalarsExplorerService"],
            _services__WEBPACK_IMPORTED_MODULE_16__["ReferencesExplorerService"],
            _nestjs_graphql__WEBPACK_IMPORTED_MODULE_14__["GraphQLAstExplorer"],
            _nestjs_graphql__WEBPACK_IMPORTED_MODULE_14__["GraphQLTypesLoader"],
            _nestjs_graphql_dist_graphql_schema_builder__WEBPACK_IMPORTED_MODULE_7__["GraphQLSchemaBuilder"],
        ],
        exports: [_nestjs_graphql__WEBPACK_IMPORTED_MODULE_14__["GraphQLTypesLoader"], _nestjs_graphql__WEBPACK_IMPORTED_MODULE_14__["GraphQLAstExplorer"]],
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_nestjs_graphql_dist_graphql_constants__WEBPACK_IMPORTED_MODULE_3__["GRAPHQL_MODULE_OPTIONS"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_a = typeof _nestjs_core__WEBPACK_IMPORTED_MODULE_2__["HttpAdapterHost"] !== "undefined" && _nestjs_core__WEBPACK_IMPORTED_MODULE_2__["HttpAdapterHost"]) === "function" ? _a : Object, typeof (_b = typeof _nestjs_graphql__WEBPACK_IMPORTED_MODULE_14__["GqlModuleOptions"] !== "undefined" && _nestjs_graphql__WEBPACK_IMPORTED_MODULE_14__["GqlModuleOptions"]) === "function" ? _b : Object, typeof (_c = typeof _nestjs_graphql__WEBPACK_IMPORTED_MODULE_14__["GraphQLFactory"] !== "undefined" && _nestjs_graphql__WEBPACK_IMPORTED_MODULE_14__["GraphQLFactory"]) === "function" ? _c : Object, typeof (_d = typeof _graphql_distributed_factory__WEBPACK_IMPORTED_MODULE_15__["GraphqlDistributedFactory"] !== "undefined" && _graphql_distributed_factory__WEBPACK_IMPORTED_MODULE_15__["GraphqlDistributedFactory"]) === "function" ? _d : Object, typeof (_e = typeof _nestjs_graphql__WEBPACK_IMPORTED_MODULE_14__["GraphQLTypesLoader"] !== "undefined" && _nestjs_graphql__WEBPACK_IMPORTED_MODULE_14__["GraphQLTypesLoader"]) === "function" ? _e : Object])
], GraphqlDistributedModule);



/***/ }),

/***/ "./libs/distributed/src/lib/interfaces/distributed-gateway-options.interface.ts":
/*!**************************************************************************************!*\
  !*** ./libs/distributed/src/lib/interfaces/distributed-gateway-options.interface.ts ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./libs/distributed/src/lib/interfaces/index.ts":
/*!******************************************************!*\
  !*** ./libs/distributed/src/lib/interfaces/index.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _distributed_gateway_options_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./distributed-gateway-options.interface */ "./libs/distributed/src/lib/interfaces/distributed-gateway-options.interface.ts");
/* harmony import */ var _distributed_gateway_options_interface__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_distributed_gateway_options_interface__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _distributed_gateway_options_interface__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _distributed_gateway_options_interface__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./libs/distributed/src/lib/services/index.ts":
/*!****************************************************!*\
  !*** ./libs/distributed/src/lib/services/index.ts ***!
  \****************************************************/
/*! exports provided: ReferencesExplorerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _references_explorer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./references-explorer.service */ "./libs/distributed/src/lib/services/references-explorer.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReferencesExplorerService", function() { return _references_explorer_service__WEBPACK_IMPORTED_MODULE_0__["ReferencesExplorerService"]; });




/***/ }),

/***/ "./libs/distributed/src/lib/services/references-explorer.service.ts":
/*!**************************************************************************!*\
  !*** ./libs/distributed/src/lib/services/references-explorer.service.ts ***!
  \**************************************************************************/
/*! exports provided: ReferencesExplorerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferencesExplorerService", function() { return ReferencesExplorerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_graphql_dist_services_base_explorer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/graphql/dist/services/base-explorer.service */ "@nestjs/graphql/dist/services/base-explorer.service");
/* harmony import */ var _nestjs_graphql_dist_services_base_explorer_service__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql_dist_services_base_explorer_service__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nestjs_core_metadata_scanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/core/metadata-scanner */ "@nestjs/core/metadata-scanner");
/* harmony import */ var _nestjs_core_metadata_scanner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core_metadata_scanner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _nestjs_graphql_dist_graphql_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nestjs/graphql/dist/graphql.constants */ "@nestjs/graphql/dist/graphql.constants");
/* harmony import */ var _nestjs_graphql_dist_graphql_constants__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql_dist_graphql_constants__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tokens */ "./libs/distributed/src/lib/tokens.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _nestjs_core_helpers_external_context_creator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nestjs/core/helpers/external-context-creator */ "@nestjs/core/helpers/external-context-creator");
/* harmony import */ var _nestjs_core_helpers_external_context_creator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core_helpers_external_context_creator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _nestjs_graphql_dist_factories_params_factory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nestjs/graphql/dist/factories/params.factory */ "@nestjs/graphql/dist/factories/params.factory");
/* harmony import */ var _nestjs_graphql_dist_factories_params_factory__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql_dist_factories_params_factory__WEBPACK_IMPORTED_MODULE_10__);

var _a, _b, _c, _d;










let ReferencesExplorerService = class ReferencesExplorerService extends _nestjs_graphql_dist_services_base_explorer_service__WEBPACK_IMPORTED_MODULE_2__["BaseExplorerService"] {
    constructor(modulesContainer, metadataScanner, externalContextCreator, gqlOptions) {
        super();
        this.modulesContainer = modulesContainer;
        this.metadataScanner = metadataScanner;
        this.externalContextCreator = externalContextCreator;
        this.gqlOptions = gqlOptions;
        this.gqlParamsFactory = new _nestjs_graphql_dist_factories_params_factory__WEBPACK_IMPORTED_MODULE_10__["GqlParamsFactory"]();
    }
    explore() {
        const modules = this.getModules(this.modulesContainer, this.gqlOptions.include || []);
        const references = this.flatMap(modules, (wrapper, moduleRef) => {
            return wrapper.instance && this.filterReferences(wrapper, moduleRef);
        });
        return this.groupMetadata(references);
    }
    predicate(instance, prototype, methodName) {
        const callback = prototype[methodName];
        const isResolverReference = Reflect.getMetadata(_tokens__WEBPACK_IMPORTED_MODULE_7__["RESOLVE_REFERENCE_METADATA"], callback);
        if (!isResolverReference)
            return null;
        const resolverType = Reflect.getMetadata(_nestjs_graphql_dist_graphql_constants__WEBPACK_IMPORTED_MODULE_5__["RESOLVER_TYPE_METADATA"], callback) ||
            Reflect.getMetadata(_nestjs_graphql_dist_graphql_constants__WEBPACK_IMPORTED_MODULE_5__["RESOLVER_TYPE_METADATA"], instance.constructor);
        return {
            name: _tokens__WEBPACK_IMPORTED_MODULE_7__["RESOLVE_REFERENCE_KEY"],
            type: resolverType,
            methodName,
        };
    }
    filterReferences(wrapper, moduleRef) {
        const { instance } = wrapper;
        const prototype = Object.getPrototypeOf(instance);
        const resolvers = this.metadataScanner.scanFromPrototype(instance, prototype, name => this.predicate(instance, prototype, name));
        return resolvers
            .filter(resolver => !!resolver)
            .map(resolver => {
            const createContext = (transform) => {
                return this.createContextCallback(instance, prototype, wrapper, moduleRef, resolver, false, transform);
            };
            return Object.assign({}, resolver, { callback: createContext() });
        });
    }
    createContextCallback(instance, prototype, wrapper, moduleRef, resolver, isRequestScoped, transform = rxjs__WEBPACK_IMPORTED_MODULE_8__["identity"]) {
        return this.externalContextCreator.create(instance, prototype[resolver.methodName], resolver.methodName, _nestjs_graphql_dist_graphql_constants__WEBPACK_IMPORTED_MODULE_5__["PARAM_ARGS_METADATA"], this.gqlParamsFactory, undefined, undefined, undefined);
    }
};
ReferencesExplorerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_nestjs_graphql_dist_graphql_constants__WEBPACK_IMPORTED_MODULE_5__["GRAPHQL_MODULE_OPTIONS"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_a = typeof _nestjs_core__WEBPACK_IMPORTED_MODULE_3__["ModulesContainer"] !== "undefined" && _nestjs_core__WEBPACK_IMPORTED_MODULE_3__["ModulesContainer"]) === "function" ? _a : Object, typeof (_b = typeof _nestjs_core_metadata_scanner__WEBPACK_IMPORTED_MODULE_4__["MetadataScanner"] !== "undefined" && _nestjs_core_metadata_scanner__WEBPACK_IMPORTED_MODULE_4__["MetadataScanner"]) === "function" ? _b : Object, typeof (_c = typeof _nestjs_core_helpers_external_context_creator__WEBPACK_IMPORTED_MODULE_9__["ExternalContextCreator"] !== "undefined" && _nestjs_core_helpers_external_context_creator__WEBPACK_IMPORTED_MODULE_9__["ExternalContextCreator"]) === "function" ? _c : Object, typeof (_d = typeof _nestjs_graphql__WEBPACK_IMPORTED_MODULE_6__["GqlModuleOptions"] !== "undefined" && _nestjs_graphql__WEBPACK_IMPORTED_MODULE_6__["GqlModuleOptions"]) === "function" ? _d : Object])
], ReferencesExplorerService);



/***/ }),

/***/ "./libs/distributed/src/lib/tokens.ts":
/*!********************************************!*\
  !*** ./libs/distributed/src/lib/tokens.ts ***!
  \********************************************/
/*! exports provided: RESOLVE_REFERENCE_METADATA, DISTRIBUTED_GATEWAY_OPTIONS, DISTRIBUTED_GATEWAY_BUILD_SERVICE, RESOLVE_REFERENCE_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOLVE_REFERENCE_METADATA", function() { return RESOLVE_REFERENCE_METADATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISTRIBUTED_GATEWAY_OPTIONS", function() { return DISTRIBUTED_GATEWAY_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISTRIBUTED_GATEWAY_BUILD_SERVICE", function() { return DISTRIBUTED_GATEWAY_BUILD_SERVICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOLVE_REFERENCE_KEY", function() { return RESOLVE_REFERENCE_KEY; });
const RESOLVE_REFERENCE_METADATA = Symbol('RESOLVE_REFERENCE_METADATA');
const DISTRIBUTED_GATEWAY_OPTIONS = Symbol('DISTRIBUTED_GATEWAY_OPTIONS');
const DISTRIBUTED_GATEWAY_BUILD_SERVICE = Symbol('DISTRIBUTED_GATEWAY_BUILD_SERVICE');
const RESOLVE_REFERENCE_KEY = '__resolveReference';


/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./apps/services/accounts/src/main.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/marcus-sa/Git/fgsme/apps/services/accounts/src/main.ts */"./apps/services/accounts/src/main.ts");


/***/ }),

/***/ "@apollo/federation":
/*!*************************************!*\
  !*** external "@apollo/federation" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/federation");

/***/ }),

/***/ "@apollo/gateway":
/*!**********************************!*\
  !*** external "@apollo/gateway" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/gateway");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/core/helpers/external-context-creator":
/*!****************************************************************!*\
  !*** external "@nestjs/core/helpers/external-context-creator" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core/helpers/external-context-creator");

/***/ }),

/***/ "@nestjs/core/metadata-scanner":
/*!************************************************!*\
  !*** external "@nestjs/core/metadata-scanner" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core/metadata-scanner");

/***/ }),

/***/ "@nestjs/graphql":
/*!**********************************!*\
  !*** external "@nestjs/graphql" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/graphql");

/***/ }),

/***/ "@nestjs/graphql/dist/factories/params.factory":
/*!****************************************************************!*\
  !*** external "@nestjs/graphql/dist/factories/params.factory" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/graphql/dist/factories/params.factory");

/***/ }),

/***/ "@nestjs/graphql/dist/graphql-schema-builder":
/*!**************************************************************!*\
  !*** external "@nestjs/graphql/dist/graphql-schema-builder" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/graphql/dist/graphql-schema-builder");

/***/ }),

/***/ "@nestjs/graphql/dist/graphql.constants":
/*!*********************************************************!*\
  !*** external "@nestjs/graphql/dist/graphql.constants" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/graphql/dist/graphql.constants");

/***/ }),

/***/ "@nestjs/graphql/dist/services/base-explorer.service":
/*!**********************************************************************!*\
  !*** external "@nestjs/graphql/dist/services/base-explorer.service" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/graphql/dist/services/base-explorer.service");

/***/ }),

/***/ "@nestjs/graphql/dist/services/delegates-explorer.service":
/*!***************************************************************************!*\
  !*** external "@nestjs/graphql/dist/services/delegates-explorer.service" ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/graphql/dist/services/delegates-explorer.service");

/***/ }),

/***/ "@nestjs/graphql/dist/services/resolvers-explorer.service":
/*!***************************************************************************!*\
  !*** external "@nestjs/graphql/dist/services/resolvers-explorer.service" ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/graphql/dist/services/resolvers-explorer.service");

/***/ }),

/***/ "@nestjs/graphql/dist/services/scalars-explorer.service":
/*!*************************************************************************!*\
  !*** external "@nestjs/graphql/dist/services/scalars-explorer.service" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/graphql/dist/services/scalars-explorer.service");

/***/ }),

/***/ "@nestjs/graphql/dist/utils/extend.util":
/*!*********************************************************!*\
  !*** external "@nestjs/graphql/dist/utils/extend.util" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/graphql/dist/utils/extend.util");

/***/ }),

/***/ "@nestjs/graphql/dist/utils/generate-token.util":
/*!*****************************************************************!*\
  !*** external "@nestjs/graphql/dist/utils/generate-token.util" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/graphql/dist/utils/generate-token.util");

/***/ }),

/***/ "@nestjs/graphql/dist/utils/merge-defaults.util":
/*!*****************************************************************!*\
  !*** external "@nestjs/graphql/dist/utils/merge-defaults.util" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/graphql/dist/utils/merge-defaults.util");

/***/ }),

/***/ "@nestjs/graphql/dist/utils/remove-temp.util":
/*!**************************************************************!*\
  !*** external "@nestjs/graphql/dist/utils/remove-temp.util" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/graphql/dist/utils/remove-temp.util");

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server-express");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map