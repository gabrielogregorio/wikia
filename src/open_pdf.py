from src.utils.builder_item import builder_item
from src.utils.default_handler import default_handler
from tabula import read_pdf

def open_pdf(file_path: str, filename: str, ext: str, sizeInBytes: int) -> dict:
    try:
        text = read_pdf(file_path, pages="all", multiple_tables=True)
        
        return builder_item(
                path =  file_path,
                name =  filename,
                extension =  ext,
                extracted_text =  str(text),
                dimensions =  None,
                sizeInBytes =  sizeInBytes,
                metadata =  None
            )
  
        
    except Exception as e:
        print("error on read {} error {}".format(file_path, str(e)))
        return default_handler(file_path, filename, ext, sizeInBytes)


 