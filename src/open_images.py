from PIL import Image

def open_images(file: str) -> [bool, [ int, int ]]:
    try:
        with Image.open(file) as img:
              width, height = img.size
        return [True, [ width, height]]

    except Exception as e:
        return [False, [ 500, 500]]
