from enum import Enum


class Log(Enum):
    ERROR = "ERROR"
    INFO = "INFO"
    DEBUG = "DEBUG"
    CRITICAL = "CRITICAL"
    WARNING = "WARNING"