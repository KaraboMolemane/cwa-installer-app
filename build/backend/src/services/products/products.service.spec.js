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
const testing_1 = require("@nestjs/testing");
const products_service_1 = require("./products.service");
const nestjs_1 = require("@automapper/nestjs");
const sequelize_1 = require("@automapper/sequelize");
const sequelize_mock_1 = require("../../tests/sequelize.mock");
describe('ProductsService', () => {
    let service;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        const module = yield testing_1.Test.createTestingModule({
            imports: [
                nestjs_1.AutomapperModule.forRoot({
                    strategyInitializer: (0, sequelize_1.sequelize)(),
                }),
            ],
            providers: [
                products_service_1.ProductsService,
                {
                    provide: 'SEQUELIZE',
                    useFactory: () => __awaiter(void 0, void 0, void 0, function* () {
                        return yield (0, sequelize_mock_1.GetSequelizeMockDB)();
                    }),
                },
            ],
        }).compile();
        service = yield module.resolve(products_service_1.ProductsService);
    }));
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
