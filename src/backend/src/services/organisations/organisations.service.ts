import { Inject, Injectable, Scope } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { OrganisationModel } from '../../models/organisation.model';
import { ServiceBase } from '../../common/helpers/services/service-base.service';

@Injectable({ scope: Scope.REQUEST })
export class OrganisationsService extends ServiceBase<OrganisationModel> {
  constructor(
    @Inject('SEQUELIZE')
    sequelize: Sequelize
  ) {
    super(OrganisationModel, sequelize);
  }
}
