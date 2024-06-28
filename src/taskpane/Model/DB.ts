import { DataSource, Db } from "typeorm";
import { cli } from "webpack";

export class DB {
    private client: DataSource;
    async connect() {
        this.client = new DataSource(
            {
                type: "postgres",
                host: "localhost",
                port: 5432,
                username: "postgres",
                password: "1234"
            }
        );
        this.client.initialize()
            .then(
                () => {
                    console.log("Conectado a la base de datos");
                }
            ).catch(
                (error) => {
                    console.log("Error al conectar con la BD", error);
                }
            )
    }

    async query(strqr: string) {
        return null;
    }

}