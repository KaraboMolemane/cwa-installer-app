import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import {
  createMap,
  forMember,
  mapFrom,
  Mapper,
  MappingProfile,
} from "@automapper/core";
import { Injectable } from "@nestjs/common";
import { BundleModel } from "../models/bundle.model";
import { LicenceModel } from "../models/licence.model";
import { OrganisationModel } from "../models/organisation.model";
import { OrganisationProductTypeModel } from "../models/organisation-product-type.model";
import { ProductModel } from "../models/product.model";
import { RequiredProductsModel } from "../models/required-products.model";
import { VersionModel } from "../models/version.model";
import { ProductDto } from "../dtos/product.dto";
import { OrganisationDto } from "../dtos/organisation.dto";
import { LicenceDto } from "../dtos/licence.dto";
import { VersionDto } from "../dtos/version.dto";
import { OrganisationProductTypeDto } from "../dtos/organisation-product-type.dto";
import { BundleDto } from "../dtos/bundle.dto";
import { RequiredProductDto } from "../dtos/required-product.dto";

@Injectable()
export class DtoMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  get profile(): MappingProfile {
    return (mapper) => {
      createMap(
        mapper,
        LicenceModel,
        LicenceDto,
        forMember(
          (destination) => destination.organisations,
          mapFrom((s) => {
            if (s.organisations) {
              return mapper.mapArray(
                s.organisations,
                OrganisationModel,
                OrganisationDto
              );
            }
            return undefined;
          })
        ),
        forMember(
          (destination) => destination.bundles,
          mapFrom((s) => {
            if (s.bundles) {
              return mapper.mapArray(s.bundles, BundleModel, BundleDto);
            }
            return undefined;
          })
        ),
        forMember(
          (destination) => destination.products,
          mapFrom((s) => {
            if (s.products) {
              return mapper.mapArray(s.products, ProductModel, ProductDto);
            }
            return undefined;
          })
        )
      );
      createMap(
        mapper,
        VersionModel,
        VersionDto,
        forMember(
          (destination) => destination,
          mapFrom((source) => source)
        )
      );

      createMap(
        mapper,
        ProductModel,
        ProductDto,
        forMember(
          (destination) => destination.licences,
          mapFrom((s) => {
            if (s.licences) {
              return mapper.mapArray(s.licences, LicenceModel, LicenceDto);
            }
            return undefined;
          })
        ),
        forMember(
          (destination) => destination.versions,
          mapFrom((source) => source.versions)
        ),
        forMember(
          (destination) => destination.requiredProducts,
          mapFrom((source) => source.requiredProducts)
        )
      );

      createMap(
        mapper,
        BundleModel,
        BundleDto,
        forMember(
          (destination) => destination.organisations,
          mapFrom((s) => {
            if (s.organisations) {
              return mapper.mapArray(
                s.organisations,
                OrganisationModel,
                OrganisationDto
              );
            }
            return undefined;
          })
        ),
        forMember(
          (destination) => destination.licences,
          mapFrom((s) => {
            if (s.licences) {
              return mapper.mapArray(s.licences, LicenceModel, LicenceDto);
            }
            return undefined;
          })
        )
      );

      createMap(
        mapper,
        OrganisationModel,
        OrganisationDto,
        forMember(
          (destination) => destination.bundles,
          mapFrom((s) => {
            if (s.bundles) {
              return mapper.mapArray(s.bundles, BundleModel, BundleDto);
            }
            return undefined;
          })
        ),
        forMember(
          (destination) => destination.licences,
          mapFrom((s) => {
            if (s.licences) {
              return mapper.mapArray(s.licences, LicenceModel, LicenceDto);
            }
            return undefined;
          })
        ),
        forMember(
          (destination) => destination.organisationProductType,
          mapFrom((orgProductType) => {
            if (orgProductType.organisationProductType) {
              return mapper.mapArray(
                orgProductType.organisationProductType,
                OrganisationProductTypeModel,
                OrganisationProductTypeDto
              );
            }
            return undefined;
          })
        )
      );

      createMap(
        mapper,
        OrganisationProductTypeModel,
        OrganisationProductTypeDto
      );
      createMap(
        mapper,
        OrganisationProductTypeDto,
        OrganisationProductTypeModel
      );
      createMap(mapper, ProductDto, ProductModel);
      createMap(mapper, RequiredProductDto, ProductModel);
      createMap(mapper, ProductModel, RequiredProductDto);
      createMap(mapper, OrganisationModel, OrganisationDto);
      createMap(mapper, OrganisationDto, OrganisationModel);
      createMap(mapper, VersionModel, VersionDto);
      createMap(mapper, VersionDto, VersionModel);
      createMap(mapper, BundleDto, BundleModel);
    };
  }
}
