import docx2txt 
from src.utils.builder_item import builder_item
from src.utils.default_handler import default_handler

def open_docx(file_path: str, filename: str, ext: str, sizeInBytes: int) -> dict:
    try:
        text = docx2txt.process(file_path)

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



