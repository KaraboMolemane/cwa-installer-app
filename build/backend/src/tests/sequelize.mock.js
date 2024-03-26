"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSequelizeMockDB = exports.CreatSetupSequelizeMockDB = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
// import { DbMigratorService } from './migrations/db-migrator.service';
// import { migrations } from './migrations/scripts';
const bundle_licences_model_1 = require("../models/bundle-licences.model");
const bundle_model_1 = require("../models/bundle.model");
const licence_model_1 = require("../models/licence.model");
const licence_products_model_1 = require("../models/licence-products.model");
const organisation_bundle_model_1 = require("../models/organisation-bundle.model");
const organisation_model_1 = require("../models/organisation.model");
const organisation_product_type_model_1 = require("../models/organisation-product-type.model");
const product_model_1 = require("../models/product.model");
const required_products_model_1 = require("../models/required-products.model");
const version_model_1 = require("../models/version.model");
const TEST_DB_NAME = "installer_test";
const DB_PORT = parseInt(process.env.DB_PORT) || 5432;
const CreatSetupSequelizeMockDB = () => __awaiter(void 0, void 0, void 0, function* () {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const noop = () => { };
    const silentLogger = {
        error: noop,
        log: noop,
        warn: noop,
        debug: noop,
        verbose: noop,
    };
    const defaultDb = new sequelize_typescript_1.Sequelize({
        database: "postgres",
        dialect: "postgres",
        username: "admin",
        password: "password",
        repositoryMode: true,
        logging: false,
    });
    // let dbMigrator = new DbMigratorService(
    //   defaultDb,
    //   migrations,
    //   '_migrations',
    //   '_migration_lock',
    //   60,
    //   true,
    //   silentLogger as any
    // );
    // await dbMigrator.dropDB(TEST_DB_NAME);
    // await dbMigrator.ensureDBExists(TEST_DB_NAME);
    const sequelize = new sequelize_typescript_1.Sequelize({
        database: TEST_DB_NAME,
        dialect: "postgres",
        username: "admin",
        password: "password",
        repositoryMode: true,
        logging: false,
        port: DB_PORT,
    });
    // dbMigrator = new DbMigratorService(
    //   sequelize,
    //   migrations,
    //   '_migrations',
    //   '_migration_lock',
    //   60,
    //   true,
    //   silentLogger as any
    // );
    // await dbMigrator.up();
    return sequelize;
});
exports.CreatSetupSequelizeMockDB = CreatSetupSequelizeMockDB;
const GetSequelizeMockDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const sequelize = new sequelize_typescript_1.Sequelize({
        database: TEST_DB_NAME,
        dialect: "postgres",
        username: "admin",
        password: "password",
        repositoryMode: true,
        logging: false,
        port: DB_PORT,
    });
    sequelize.addModels([
        bundle_licences_model_1.BundleLicencesModel,
        bundle_model_1.BundleModel,
        licence_model_1.LicenceModel,
        licence_products_model_1.LicenceProductsModel,
        organisation_bundle_model_1.OrganisationBundleModel,
        organisation_model_1.OrganisationModel,
        organisation_product_type_model_1.OrganisationProductTypeModel,
        product_model_1.ProductModel,
        required_products_model_1.RequiredProductsModel,
        version_model_1.VersionModel,
    ]);
    yield sequelize.sync();
    return sequelize;
});
exports.GetSequelizeMockDB = GetSequelizeMockDB;
