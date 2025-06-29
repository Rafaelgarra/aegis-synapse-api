import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('Aegis-Synapse API')
    .setDescription('API AEGIS Unified Control and Data Platform (AEGIS-UCDP).')
    .setVersion('1.0')
    .addTag('aegis')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // 'api' é o endpoint onde o Swagger UI estará disponível (ex: http://localhost:3000/api)

  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
  console.log(`Swagger UI is available at: ${await app.getUrl()}/api`);
}
bootstrap();