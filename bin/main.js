import logger from './extensions/logger';
import information from './middlewares/information';
import init from './middlewares/init';
import get from './middlewares/get';
import dev from './middlewares/dev';

import option from './options/orders.json';

const main = () => {
    let args = process.argv.splice(2);
    let order = args.shift();
    let pojDir = process.cwd();
    let kitDir = __dirname.slice(0, -4);

    logger.in(5);
    if (pojDir === kitDir) {
        logger.danger('-> Do not run any order under the kit dir');
        return;
    }
    if (option[order]) {
        logger.info('->', option[order]);
    }

    switch(order) {
        case 'init':
            init(args[0]);
            break;
        case 'dev':
            dev();
            break;
        case 'prepublish':
            logger('pre');
            break;
        case 'test':
            logger('test');
            break;
        case 'get':
            get(args);
            break;
        case '-v':
        case '--version':
            information('version');
            break;
        default:
            information('info');
    }
}

export default main;
