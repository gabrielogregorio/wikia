from PIL import Image
from src.utils.builder_item import builder_item
from src.utils.default_handler import default_handler
from src.utils.get_metadata_from_image import get_metadata_from_image
from src.utils.get_text_from_image import get_text_from_image

def open_images(file_path: str, filename: str, ext: str, sizeInBytes: int) -> dict:
    try:
        with Image.open(file_path) as img:
                width, height = img.size

        success_ocr, text_ocr = get_text_from_image(file_path)
        success_metadata, metadata = get_metadata_from_image(file_path)

        return builder_item(
            path=file_path,
            name=filename,
            extension=ext,
            extracted_text=str(text_ocr) if success_ocr else None,
            dimensions={"width": width, "height": height},
            sizeInBytes=sizeInBytes,
            metadata=metadata if success_metadata else None
        )

    except Exception as e:
        print("error on read {} error {}".format(file_path, str(e)))
        return default_handler(file_path, filename, ext, sizeInBytes)
