import mysql from "mysql"

export const db = mysql.createConnection({
    host: "sql.freedb.tech",
    user: "freedb_bsea_root",
    password: "zMeqQfs4m$t$yK2",
    database: "freedb_bsea_db"

    // host: "localhost",
    // user: "root",
    // password: "",
    // database: "bsea"

})