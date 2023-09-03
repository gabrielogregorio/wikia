import os

from src.open_md import open_md
from src.open_txt import open_txt
from src.open_docx import open_docx
from src.open_pdf import open_pdf
from src.open_images import open_images
from src.open_video import open_video

from src.utils.builder_item import builder_item
from src.utils.get_file_size import get_file_size
from src.utils.get_extension_file import get_extension_file
from src.utils.search_all_file_paths import search_all_file_paths
from src.utils.handle_show_progress import handle_show_progress
from src.utils.default_handler import default_handler


PATH_TO_FIND_FILES = './public' 

files = []


file_handlers = {
    '.md': open_md,
    '.txt': open_txt,
    '.docx': open_docx,
    '.pdf': open_pdf,

    ".jpg":open_images,
    ".webp":open_images,
    ".jpeg":open_images,
    ".png":open_images,
    ".gif":open_images,

    ".mp4": open_video,
    ".mov": open_video,
    ".m4v":open_video      
}






def main():
    list_paths = search_all_file_paths(PATH_TO_FIND_FILES)
    total_files = len(list_paths)
    

    for count, (file_path, filename) in enumerate(list_paths):
        handle_show_progress(count, total_files)

        ext = get_extension_file(file_path)
        sizeInBytes = get_file_size(file_path)

        handler = file_handlers.get(ext, default_handler)

        file_info = handler(file_path, filename, ext, sizeInBytes)
 
        files.append(file_info)


main()
print(files)