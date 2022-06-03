/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { Public } from "../../decorators/public.decorator";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateShopArgs } from "./CreateShopArgs";
import { UpdateShopArgs } from "./UpdateShopArgs";
import { DeleteShopArgs } from "./DeleteShopArgs";
import { ShopFindManyArgs } from "./ShopFindManyArgs";
import { ShopFindUniqueArgs } from "./ShopFindUniqueArgs";
import { Shop } from "./Shop";
import { ProductFindManyArgs } from "../../product/base/ProductFindManyArgs";
import { Product } from "../../product/base/Product";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { ShopService } from "../shop.service";

@graphql.Resolver(() => Shop)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ShopResolverBase {
  constructor(
    protected readonly service: ShopService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Shop",
    action: "read",
    possession: "any",
  })
  async _shopsMeta(
    @graphql.Args() args: ShopFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Shop])
  @nestAccessControl.UseRoles({
    resource: "Shop",
    action: "read",
    possession: "any",
  })
  async shops(@graphql.Args() args: ShopFindManyArgs): Promise<Shop[]> {
    return this.service.findMany(args);
  }

  @Public()
  @graphql.Query(() => Shop, { nullable: true })
  async shop(@graphql.Args() args: ShopFindUniqueArgs): Promise<Shop | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @Public()
  @graphql.Mutation(() => Shop)
  async createShop(@graphql.Args() args: CreateShopArgs): Promise<Shop> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Shop)
  @nestAccessControl.UseRoles({
    resource: "Shop",
    action: "update",
    possession: "any",
  })
  async updateShop(@graphql.Args() args: UpdateShopArgs): Promise<Shop | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Shop)
  @nestAccessControl.UseRoles({
    resource: "Shop",
    action: "delete",
    possession: "any",
  })
  async deleteShop(@graphql.Args() args: DeleteShopArgs): Promise<Shop | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Product])
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "any",
  })
  async products(
    @graphql.Parent() parent: Shop,
    @graphql.Args() args: ProductFindManyArgs
  ): Promise<Product[]> {
    const results = await this.service.findProducts(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [User])
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async staff(
    @graphql.Parent() parent: Shop,
    @graphql.Args() args: UserFindManyArgs
  ): Promise<User[]> {
    const results = await this.service.findStaff(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}