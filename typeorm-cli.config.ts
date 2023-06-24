import { DataSource } from 'typeorm';
import { CoffeeRefactor1687615004940 } from './src/migrations/1687615004940-CoffeeRefactor';
import { Flavor } from './src/coffees/entities/flavor.entity';
import { Coffee } from './src/coffees/entities/coffee.entity';
import { SchemaSync1687615528514 } from './src/migrations/1687615528514-SchemaSync';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1687615004940, SchemaSync1687615528514],
});
