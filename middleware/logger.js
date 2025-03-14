import {createLogger, format,  transports} from 'winston'

const logger =  createLogger({
    level: 'info' ,
    format: format.combine(
        format.timestamp(),
        format.errors({stack: true}),
        format.splat(),
        format.json()

    ),
    defaultMeta: {
        service: 'server-service'
    },
    transports: [
        ///to display on terminal
        new transports.Console({
            level: 'info',
            format: format.combine(
                format.colorize(),
                format.simple()
            )
        }),
        new transports.File({
            level: 'error',
            filename: 'error.log',
            format: format.json()
        }), 
        new transports.File({
            filename: 'combined.log',
        })
    ]
})

export default logger