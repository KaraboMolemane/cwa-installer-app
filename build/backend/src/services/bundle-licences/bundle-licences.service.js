"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.BundleLicencesService = void 0;
const common_1 = require("@nestjs/common");
const api_result_dto_1 = require("../../common/helpers/services/models/api-result.dto");
const paged_result_dto_1 = require("../../common/helpers/services/models/paged-result.dto");
const service_base_service_1 = require("../../common/helpers/services/service-base.service");
const bundle_licences_model_1 = require("../../models/bundle-licences.model");
let BundleLicencesService = class BundleLicencesService extends service_base_service_1.ServiceBase {
    constructor(sequelize) {
        super(bundle_licences_model_1.BundleLicencesModel, sequelize);
        this.bundleLicenceModelRepository = this.sequelize.getRepository(bundle_licences_model_1.BundleLicencesModel);
    }
    getBundleLicences(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = this.dxHelper.buildSequelizeOptions(query);
            const result = yield this.bundleLicenceModelRepository.findAndCountAll(Object.assign({}, options));
            return api_result_dto_1.ApiResult.Success(new paged_result_dto_1.PagedResultDto(result.rows, result.count));
        });
    }
};
exports.BundleLicencesService = BundleLicencesService;
exports.BundleLicencesService = BundleLicencesService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __param(0, (0, common_1.Inject)('SEQUELIZE'))
], BundleLicencesService);
