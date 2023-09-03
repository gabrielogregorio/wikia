import os

def search_all_file_paths(folder: str) -> [str, str]:
    list_paths = []
    for root, dirs, filenames in os.walk(folder):
        for filename in filenames:
            file_path = os.path.join(root, filename)
            list_paths.append([file_path, filenames])

    return list_paths