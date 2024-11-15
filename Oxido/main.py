from services.openai_service import OpenAIService
from utils.read_file import read_file
from utils.write_file import write_to_file
from utils.logger import log
from utils.enums import Log

article_file = "data/article.txt"

def main():
    article_content = read_file(article_file)
    if not article_content:
        raise FileNotFoundError(f"The file {article_file} was not found.")

    prompt = f"""
        Jesteś doświadczonym specjalistą od przygotowania treści na strony internetowe za pomocą tagów HTML.
        Do twojego zadnia należy:
        1) Przygotowanie kodu HTML na podstawie poniższego artykułu, uzywając odpowiednich tagów HTML do strukturyzacji artykułu.
        2) Wskazanie miejsca, w którym należy wstawić obrazy, odzwierciedlające dany fragment artykułu. Tam gdzie ma być umieszczony obraz należy wstawić tag "<img>" z atrybutami:
        2.1. src="image_placeholder.jpg"
        2.2. alt="prompt w języku angielskim odpowiadający danemu fragmentowi artykułu, który zostanie później wykorzystany do wygenerowania grafiki przez sztuczną inteligencję.".
        3) Umieszczenie podpisów pod grafikami z odpowiednimi tagami HTML.
        4) Nie dołączaj nagłówków HTML ani sekcji head oraz body.
        Artykuł:
        "{article_content}"
        """
    
    openai_service = OpenAIService()
    response = openai_service.get_response(prompt)

    if response:
        log(Log.INFO, "HTML generated successfully")
        write_to_file(response, "output/artykul.html")
    else:
        log(Log.ERROR, "The response could not be generated.")

if __name__ == "__main__":
    main()
