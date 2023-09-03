import pytesseract
from PIL import Image

def get_text_from_image(file: str) -> [bool, str]:
    try:
      text = pytesseract.image_to_string(Image.open(file), lang='por')
      return [True, text]

    except Exception as e:
        return [False, "Error" + str(e)]

