from pydantic import Field
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    openai_api_key: str = Field(..., env="OPENAI_API_KEY")
    model: str = Field(..., env="MODEL")
    max_tokens: int = Field(500, env="MAX_TOKENS")
    temperature: float = Field(0.7, env="TEMPERATURE")
    
    class Config:
        env_file = ".env"

settings = Settings()