from PIL import Image 
from PIL.ExifTags import TAGS



def get_metadata_from_image(file: str) -> [bool, any]:
    metadata = {}

    try:
        image = Image.open(file)
        
        meta_items = image.getexif()
        for tag_id in meta_items:
            tag = str(TAGS.get(tag_id, tag_id))
            data = meta_items.get(tag_id)

            metadata[tag] = str(data)

        return [ True, metadata ]
    except Exception as error:
        return [False, "unknown error'{}'".format(error)]
        print()

