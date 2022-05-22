import { Module } from "@nestjs/common";
import { ShopModuleBase } from "./base/shop.module.base";
import { ShopService } from "./shop.service";
import { ShopController } from "./shop.controller";
import { ShopResolver } from "./shop.resolver";

@Module({
  imports: [ShopModuleBase],
  controllers: [ShopController],
  providers: [ShopService, ShopResolver],
  exports: [ShopService],
})
export class ShopModule {}
