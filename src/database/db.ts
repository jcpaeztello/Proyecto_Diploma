import { Sequelize } from "sequelize";
import dotenv from "dotenv";

const DB_NAME = "railway";

const DB_USER = "root";

const DB_PASS = "egTDqNceonwbmdCCjocxUqfjdCbiMcjW";

//mysql://root:egTDqNceonwbmdCCjocxUqfjdCbiMcjW@metro.proxy.rlwy.net:21674/railway

export const database = new Sequelize(
  DB_NAME,
  DB_USER,
  DB_PASS,

  {
    host: "metro.proxy.rlwy.net",
    dialect: "mysql",
    port: 21674,
  },
);

async function generateDb() {
  await database.sync({ force: false });
  console.log("Base de datos y tablas creada");
}

generateDb();

dotenv.config();

interface DatabaseConfig {
  dialect: string;
  host: string;
  username: string;
  password: string;
  database: string;
  port: number;
}

const dbConfigurations: Record<string, DatabaseConfig> = {
  mysql: {
    dialect: "mysql",
    host: process.env.MYSQL_HOST || "metro.proxy.rlwy.net",
    username: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || "egTDqNceonwbmdCCjocxUqfjdCbiMcjW",
    database: process.env.MYSQL_NAME || "railway",
    port: parseInt(process.env.MYSQL_PORT || "21674"),
  },
  /*postgres: {
    dialect: "postgres",
    host: process.env.POSTGRES_HOST || "localhost",
    username: process.env.POSTGRES_USER || "postgres",
    password: process.env.POSTGRES_PASSWORD || "",
    database: process.env.POSTGRES_NAME || "test",
    port: parseInt(process.env.POSTGRES_PORT || "5432")
  }*/
};

const selectedEngine = process.env.DB_ENGINE || "mysql";
const selectedConfig = dbConfigurations[selectedEngine];

if (!selectedConfig) {
  throw new Error(`Motor de base de datos no soportado: ${selectedEngine}`);
}

console.log(`🔌 Conectando a base de datos: ${selectedEngine.toUpperCase()}`);

export const sequelize = new Sequelize(
  selectedConfig.database,
  selectedConfig.username,
  selectedConfig.password,
  {
    host: selectedConfig.host,
    port: selectedConfig.port,
    dialect: selectedConfig.dialect as any,
    logging: process.env.NODE_ENV === "development" ? console.log : false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
);

export const getDatabaseInfo = () => {
  return {
    engine: selectedEngine,
    config: selectedConfig,
    connectionString: `${selectedConfig.dialect}://${selectedConfig.username}@${selectedConfig.host}:${selectedConfig.port}/${selectedConfig.database}`,
  };
};

export const testConnection = async (): Promise<boolean> => {
  try {
    await sequelize.authenticate();
    console.log(`✅ Conexión exitosa a ${selectedEngine.toUpperCase()}`);
    return true;
  } catch (error) {
    console.error(
      `❌ Error de conexión a ${selectedEngine.toUpperCase()}:`,
      error,
    );
    return false;
  }
};
