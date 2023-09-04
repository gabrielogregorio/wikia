import os
import threading
import queue

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

from src.utils.insert_items_into_queue import insert_items_into_queue
from src.utils.start_threads import start_threads
from src.utils.waiting_finish_threads import waiting_finish_threads


PATH_TO_FIND_FILES = './public/' 

files = []
list_paths = search_all_file_paths(PATH_TO_FIND_FILES)
total_files = len(list_paths)

NUM_THREADS = 400

work_queue = queue.Queue()

lock = threading.Lock() 

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

def worker(thread_id):
    local_files = []
    while not work_queue.empty():
        try:
            [file_path, filename, count] = work_queue.get_nowait()
        except queue.Empty:
            break

        handle_show_progress(count, total_files)

        ext = get_extension_file(file_path)
        sizeInBytes = get_file_size(file_path)

        handler = file_handlers.get(ext, default_handler)

        file_info = handler(file_path, filename, ext, sizeInBytes)

        local_files.append(file_info)

        with lock:
            files.extend(local_files)
            local_files.clear()

def handle_queue():
    insert_items_into_queue(work_queue, list_paths)

    threads = start_threads(worker, NUM_THREADS)

    waiting_finish_threads(threads)

    return files
