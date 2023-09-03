def builder_item(path: str, name: str, extension:str, extracted_text: str, sizeInBytes: int, dimensions: dict, metadata: any):
    return {
      "path": path,
      "name": name,
      "type": extension,
      "extracted_text": extracted_text,
      "dimensions": dimensions,
      "sizeInBytes": sizeInBytes,
      "metadata": metadata
    }
