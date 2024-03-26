import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { AutomapperModule } from '@automapper/nestjs';
import { sequelize } from '@automapper/sequelize';
import { GetSequelizeMockDB } from '../../tests/sequelize.mock';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        AutomapperModule.forRoot({
          strategyInitializer: sequelize(),
        }),
      ],
      providers: [
        ProductsService,
        {
          provide: 'SEQUELIZE',
          useFactory: async () => {
            return await GetSequelizeMockDB();
          },
        },
      ],
    }).compile();

    service = await module.resolve<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
