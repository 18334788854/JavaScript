const mysql = require("mysql");
const dbConfig = require("../../appConfig").database;

class Mydb {
    constructor(options) {
        this.pool = mysql.createPool({
            host: options.HOST,
            user: options.USERNAME,
            password: options.PASSWORD,
            database: options.DATABASE,
            port: options.PORT
        });
    }

    getAll() {
        return new Promise((resolve, reject) => {
            this.pool.getConnection(function (err, connection) {
                connection.query("select b_openid,sum(number) as num from user_info group by b_openid order by num desc;",
                    function (err, result, field) {
                        if (err) {
                            console.log(`[SELECT ALL b_openid's NUMBER] - ${err.message}`);
                            reject(err);
                        }

                        resolve(result);
                    })
            })
        })
    }

    getId(id) {
        return new Promise((resolve, reject) => {
            this.pool.getConnection(function (err, connection) {
                connection.query("select * from user_info where id = ?", [id],
                    function (err, result, field) {
                        if (err) {
                            console.log(`[SELECT ID ] - ${err.message}`);
                            reject(err);
                        }
                        console.log(result[0]);
                        resolve(result[0]);
                    })
            })
        })
    }

    getNum(b_openid) {
        console.log(b_openid);
        return new Promise((resolve, reject) => {
            this.pool.getConnection(function (err, connection) {
                connection.query("select sum(number) as num from user_info where b_openid = ?", [b_openid],
                    function (err, result, field) {
                        if (err) {
                            console.log(`[SUM ERROR WHERE b_openid = ${b_openid}] - ${err.message}`);
                            reject(err);
                        }
                        connection.release();
                        console.log(`----------------------SUM(${b_openid})----------------------`);
                        console.log("select : ", result);
                        console.log('--------------------------------------------------\n\n');
                        resolve(result[0]);
                    })
            })
        })
    }

    async get(key) {
        console.log("getKey : " + key);
        // let ids = await this.getId();
        return new Promise((resolve, reject) => {
            this.pool.getConnection(function (err, connection) {
                connection.query("select * from user_info where sessionID = ?", [key], function (err, result, filed) {
                    if (err) {
                        console.log(`[SELECT ERROR] - ${err.message}`);
                        reject(err);
                    }
                    connection.release();
                    console.log("----------------------SELECT----------------------");
                    console.log("select : ", result);
                    console.log('--------------------------------------------------\n\n');
                    resolve(result);
                })
            })
        })
    }

    async set(key, value) {
        let result = await this.getId(value.id);
        return new Promise((resolve, reject) => {
            if (result) {
                this.pool.getConnection(function (err, connection) {
                    connection.query("update user_info set number = ?,sessionID=?where openid = ? and b_openid = ?;",
                        [value.number, key, value.openid, value.b_openid], function (err, result, field) {
                            if (err) {
                                console.log(`[UPDATE ERROR] - ${err.message}`);
                                reject(err);
                            }
                            console.log("----------------------UPDATE----------------------");
                            console.log("update ：", result);
                            console.log('--------------------------------------------------\n\n');
                            resolve(result);
                            connection.release();
                        })
                });
            } else {
                this.pool.getConnection(function (err, connection) {
                    connection.query("insert into user_info(id,sessionID,openid,b_openid,number) values(?,?,?,?,?);",
                        [value.id, key, value.openid, value.b_openid, value.number], function (err, result, field) {
                            if (err) {
                                console.log(`[INSERT ERROR] - ${err.message}`);
                                reject(err);
                            }
                            console.log("----------------------INSERT----------------------");
                            console.log("insert : ", result, field);
                            console.log('--------------------------------------------------\n\n');
                            resolve(result);
                            connection.release();
                        })
                });
            }
        })
    }

    async destroy(key) {

    }
}

module.exports = Mydb;
