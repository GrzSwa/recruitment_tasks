import logging
from utils.enums import Log

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')


def log(level: Log, message:str):
    if not isinstance(level, Log):
        raise ValueError("The specified logging level must be an instance of the Log class.")
    
    log_methods = {
        Log.ERROR: logging.error,
        Log.INFO: logging.info,
        Log.DEBUG: logging.debug,
        Log.CRITICAL: logging.critical,
        Log.WARNING: logging.warning,
    }

    log_method = log_methods.get(level)
    
    log_method(message)
