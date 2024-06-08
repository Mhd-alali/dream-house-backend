import chalk from 'chalk';

export function logger(req, res, next) {
    const start = Date.now();

    res.on('finish', () => {
        const method = req.method;
        const endpoint = req.originalUrl;
        const target_number = req.body.target_number || '';
        const statusCode = res.statusCode;
        const responseTime = Date.now() - start;

        let statusColor;
        if (statusCode >= 200 && statusCode < 400) {
            statusColor = chalk.green;
        } else if (statusCode >= 400 && statusCode < 500) {
            statusColor = chalk.yellow;
        } else {
            statusColor = chalk.red;
        }

        console.log(`${new Date(Date.now()).toLocaleString()} ${method} ${endpoint} ${statusColor(statusCode)} ${responseTime}ms ${target_number}`);
    });

    next();
}
