import { Field, ObjectType } from '@nestjs/graphql'
import { User as UserType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class User implements RestrictProperties<UserType, UserType> {
  uid: string
  @Field({ nullable: true })
  image: string
  createdAt: Date
  updatedAt: Date
  @Field({ nullable: true })
  name: string

  //TODO: Add below @Field({nullable: true}) to optional fields
}
