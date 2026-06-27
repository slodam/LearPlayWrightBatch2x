import log from '../logger.js';//the default log will always be called.
import { log1 } from '../logger.js';
//To call specific function except default we need to enclose the function in {} in import statement.

log('Starting the test case');

log1(' Starting the test case with name log');