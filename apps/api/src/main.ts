import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()

  const config = new DocumentBuilder()
    .setTitle('Parkspace | Rostislaw Sergejew')
    .setDescription(
      `<div>
        <p><a target="__blanc" href="http://localhost:3000/graphql">Here</a> to get to the GraphQl Editor. Use 
      <a target="__blanc" href="https://studio.apollographql.com/sandbox/explorer?endpoint=http://localhost:3000/graphql&document=query users{users{uid}}">Apollo</a>
        for a Better GraphQL Experience.</p>
        </div>
      `,
    )
    .setVersion('0.1')
    .addTag('parkspace')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/', app, document)

  await app.listen(3000)
}
bootstrap()
