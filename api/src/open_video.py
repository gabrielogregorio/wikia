import cv2
from src.utils.builder_item import builder_item
from src.utils.default_handler import default_handler
  

def open_video(file_path: str, filename: str, ext: str, sizeInBytes: int) -> dict:
    try:
        vid = cv2.VideoCapture(file_path)

        width = int(vid.get(cv2.CAP_PROP_FRAME_WIDTH))
        height = int(vid.get(cv2.CAP_PROP_FRAME_HEIGHT))

        vid.release()

        return builder_item(
            path=file_path,
            name=filename,
            extension=ext,
            extracted_text=None,
            dimensions={"width": width, "height": height},
            sizeInBytes=sizeInBytes,
            metadata=None
       )

    except Exception as e:
        print("error on read {} error {}".format(file_path, str(e)))
        return default_handler(file_path, filename, ext, sizeInBytes)
