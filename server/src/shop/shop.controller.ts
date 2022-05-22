import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ShopService } from "./shop.service";
import { ShopControllerBase } from "./base/shop.controller.base";

@swagger.ApiTags("shops")
@common.Controller("shops")
export class ShopController extends ShopControllerBase {
  constructor(
    protected readonly service: ShopService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
