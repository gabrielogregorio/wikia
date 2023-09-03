from src.utils.builder_item import builder_item
from src.utils.default_handler import default_handler
 

def open_md(file_path: str, filename: str, ext: str, sizeInBytes: int) -> dict:
    try:
        reader = open(file_path, "r", encoding="utf-8")
        text = reader.read()
        reader.close()

        return builder_item(
            path =  file_path,
            name =  filename,
            extension =  ext,
            extracted_text =  text,
            dimensions =  None,
            sizeInBytes =  sizeInBytes,
            metadata =  None
        )
    
    except Exception as e:
        print("error on read {} error {}".format(file_path, str(e)))
        return default_handler(file_path, filename, ext, sizeInBytes)

    
