from src.utils.builder_item import builder_item

def default_handler(file_path, filename, ext, sizeInBytes):
    return builder_item(
        path=file_path,
        name=filename,
        extension=ext,
        extracted_text=None,
        dimensions=None,
        sizeInBytes=sizeInBytes,
        metadata=None
    )
