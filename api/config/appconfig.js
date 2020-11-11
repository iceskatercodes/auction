'use strict'
/**
 * Created By Aravind
 */

require('dotenv').config()

const LOG_LEVEL = process.env.LOG_DEBUG || false
const ENT_SVC = process.env.ENTITLEMENTS_SVC || 'http://localhost:2900/entitlements'


const appconfig = {
    app: {
        app_port: process.env.APP_PORT,
        jwt_secret: process.env.JWT_SECRET,
        app_version: '0.0.1',
        log_debug: LOG_LEVEL
    },
    databases: {
        pg: {
            client: 'mysql',
            debug: true,
            connection: {
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASS,
                database: process.env.DB_NAME
            },
            pool: {
                min: 1,
                max: 3
            },
            searchPath: ['bookwater', 'entitlements', 'public']
        },
    },
    s3: {
        accessKeyId: process.env.HSS3_KEY,
        secretAccessKey: process.env.HSS3_SECRET,
        endpoint: process.env.HSS3_ENDPOINT,
        Bucket: process.env.HSS3_BUCKET
    },
    services: {
        entitlements_svc: ENT_SVC
    }
}

module.exports = appconfig;