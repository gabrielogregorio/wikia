import os

def get_extension_file(file_path: str) -> str:
    _, ext = os.path.splitext(file_path)
    return ext