import os

def search_all_file_paths(folder: str) -> [str, str]:
    list_paths = []
    for root, dirs, filenames in os.walk(folder):
        for filename in filenames:
            file_path = os.path.join(root, filename)

            should_ignore_path = 'node_modules' in file_path  or '.Trash-' in file_path or '.git' in file_path
            if should_ignore_path:
                continue

            list_paths.append([file_path, filename])

    return list_paths