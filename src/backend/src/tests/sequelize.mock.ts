import { Sequelize } from "sequelize-typescript";
// import { DbMigratorService } from './migrations/db-migrator.service';
// import { migrations } from './migrations/scripts';
import { BundleLicencesModel } from "../models/bundle-licences.model";
import { BundleModel } from "../models/bundle.model";
import { LicenceModel } from "../models/licence.model";
import { LicenceProductsModel } from "../models/licence-products.model";
import { OrganisationBundleModel } from "../models/organisation-bundle.model";
import { OrganisationModel } from "../models/organisation.model";
import { OrganisationProductTypeModel } from "../models/organisation-product-type.model";
import { ProductModel } from "../models/product.model";
import { RequiredProductsModel } from "../models/required-products.model";
import { VersionModel } from "../models/version.model";

const TEST_DB_NAME = "installer_test";
const DB_PORT = parseInt(process.env.DB_PORT) || 5432;
export const CreatSetupSequelizeMockDB = async () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const noop = () => {};
  const silentLogger = {
    error: noop,
    log: noop,
    warn: noop,
    debug: noop,
    verbose: noop,
  };
  const defaultDb = new Sequelize({
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
  const sequelize = new Sequelize({
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
};

export const GetSequelizeMockDB = async () => {
  const sequelize = new Sequelize({
    database: TEST_DB_NAME,
    dialect: "postgres",
    username: "admin",
    password: "password",
    repositoryMode: true,
    logging: false,
    port: DB_PORT,
  });
  sequelize.addModels([
    BundleLicencesModel,
    BundleModel,
    LicenceModel,
    LicenceProductsModel,
    OrganisationBundleModel,
    OrganisationModel,
    OrganisationProductTypeModel,
    ProductModel,
    RequiredProductsModel,
    VersionModel,
  ]);
  await sequelize.sync();
  return sequelize;
};
