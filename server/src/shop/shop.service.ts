import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ShopServiceBase } from "./base/shop.service.base";

@Injectable()
export class ShopService extends ShopServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
