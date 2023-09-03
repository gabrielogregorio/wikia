import os
from src.open_md import open_md
from src.open_txt import open_txt
from src.open_docx import open_docx
from src.open_pdf import open_pdf
from src.open_images import open_images
from src.open_video import open_video

from src.utils.get_text_from_image import get_text_from_image
from src.utils.get_metadata_from_image import get_metadata_from_image

from src.utils.builder_item import builder_item
from src.utils.get_file_size import get_file_size
from src.utils.get_extension_file import get_extension_file

PATH_TO_FIND_FILES = './public' 

files = []

def main():

    for root, dirs, filenames in os.walk(PATH_TO_FIND_FILES):
        for filename in filenames:
            file_path = os.path.join(root, filename)
            ext = get_extension_file(file_path)
            sizeInBytes = get_file_size(file_path)

            if(file_path.lower().endswith('.md')):
                success, text = open_md(file_path)
                
                files.append(builder_item(
                        path =  file_path,
                        name =  filename,
                        extension =  ext,
                        extracted_text =  text if success else None,
                        dimensions =  None,
                        sizeInBytes =  sizeInBytes,
                        metadata =  None
                    ))
                continue

            if(file_path.lower().endswith('.txt')):
                success, text = open_txt(file_path)
    
                files.append(builder_item(
                        path =  file_path,
                        name =  filename,
                        extension =  ext,
                        extracted_text =  text if success else None,
                        dimensions =  None,
                        sizeInBytes =  sizeInBytes,
                        metadata =  None
                    ))
                continue
            
            if(file_path.lower().endswith('.docx')):
                success, text = open_docx(file_path)

                files.append(builder_item(
                        path =  file_path,
                        name =  filename,
                        extension =  ext,
                        extracted_text =  text if success else None,
                        dimensions =  None,
                        sizeInBytes =  sizeInBytes,
                        metadata =  None
                    ))
                continue

            if(file_path.lower().endswith('.pdf')):
                success, text = open_pdf(file_path)

                files.append(builder_item(
                        path =  file_path,
                        name =  filename,
                        extension =  ext,
                        extracted_text =  text if success else None,
                        dimensions =  None,
                        sizeInBytes =  sizeInBytes,
                        metadata =  None
                    ))
                continue

            if (ext.lower() in [".jpg", ".webp", ".jpeg", ".png", ".gif"]):
                success_read, sizes = open_images(file_path)
                success_ocr, text_ocr = get_text_from_image(file_path)
                success_metadata, metadata = get_metadata_from_image(file_path)
                
                files.append(builder_item(
                    path =  file_path,
                    name =  filename,
                    extension =  ext,
                    extracted_text =  text_ocr if success_ocr else None,
                    dimensions =  {"width": sizes[0], "height": sizes[1]},
                    sizeInBytes =  sizeInBytes,
                    metadata =  metadata if success_metadata else None
                ))
                continue

            if (ext.lower() in [".mp4", ".mov", ".m4v"]):
                success, sizes = open_video(file_path)

                files.append(builder_item(
                        path =  file_path,
                        name =  filename,
                        extension =  ext,
                        extracted_text =  None,
                        dimensions =  {"width": sizes[0], "height": sizes[1]},
                        sizeInBytes =  sizeInBytes,
                        metadata =  None
                    ))                
                continue

            print("file not processed", file_path)

main()
print(files)