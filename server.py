import os

PATH_TO_FIND_FILES = './public' 


files = []
for root, dirs, filenames in os.walk(PATH_TO_FIND_FILES):
    for filename in filenames:
        file_path = os.path.join(root, filename)
        print("", file_path)

