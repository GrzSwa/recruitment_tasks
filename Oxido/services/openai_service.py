import openai
from settings.settings import settings
from utils.enums import Log
from utils.logger import log
from typing import Optional

class OpenAIService:
    def __init__(self):
        openai.api_key = settings.openai_api_key

    def get_response(self, prompt: str, model: Optional[str] = None, max_tokens: Optional[int] = None, temperature: Optional[float] = None) -> str: 
        model = model or settings.model
        max_tokens = max_tokens or settings.max_tokens
        temperature = temperature or settings.temperature

        messages = {"role":"system", "content":prompt}
      
        try:
            response = openai.chat.completions.create(
                model=model,
                messages=[messages],
                max_tokens=max_tokens,
                temperature=temperature
            )
            return response.choices[0].message.content
        except Exception as e:
            log(Log.ERROR,f"OpenAI API error: {e}")
            return "Error processing request."