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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganisationsService = void 0;
const common_1 = require("@nestjs/common");
const organisation_model_1 = require("../../models/organisation.model");
const service_base_service_1 = require("../../common/helpers/services/service-base.service");
let OrganisationsService = class OrganisationsService extends service_base_service_1.ServiceBase {
    constructor(sequelize) {
        super(organisation_model_1.OrganisationModel, sequelize);
    }
};
exports.OrganisationsService = OrganisationsService;
exports.OrganisationsService = OrganisationsService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __param(0, (0, common_1.Inject)('SEQUELIZE'))
], OrganisationsService);
