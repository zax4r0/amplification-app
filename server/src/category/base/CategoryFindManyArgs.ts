/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CategoryWhereInput } from "./CategoryWhereInput";
import { Type } from "class-transformer";
import { CategoryOrderByInput } from "./CategoryOrderByInput";

@ArgsType()
class CategoryFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CategoryWhereInput,
  })
  @Field(() => CategoryWhereInput, { nullable: true })
  @Type(() => CategoryWhereInput)
  where?: CategoryWhereInput;

  @ApiProperty({
    required: false,
    type: [CategoryOrderByInput],
  })
  @Field(() => [CategoryOrderByInput], { nullable: true })
  @Type(() => CategoryOrderByInput)
  orderBy?: Array<CategoryOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CategoryFindManyArgs };