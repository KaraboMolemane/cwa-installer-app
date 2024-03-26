import { Test, TestingModule } from '@nestjs/testing';
import { BundlesService } from './bundles.service';
import { AutomapperModule } from '@automapper/nestjs';
import { sequelize } from '@automapper/sequelize';
import { GetSequelizeMockDB } from '../../tests/sequelize.mock';

describe('BundlesService', () => {
  let service: BundlesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        AutomapperModule.forRoot({
          strategyInitializer: sequelize(),
        }),
      ],
      providers: [
        BundlesService,
        {
          provide: 'SEQUELIZE',
          useFactory: async () => {
            return await GetSequelizeMockDB();
          },
        },
      ],
    }).compile();

    service = await module.resolve<BundlesService>(BundlesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
