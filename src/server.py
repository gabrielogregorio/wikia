import os
from src.open_md import open_md
from src.open_txt import open_txt
from src.open_docx import open_docx
from src.open_pdf import open_pdf
from src.open_images import open_images

PATH_TO_FIND_FILES = './public' 

def main():
    for root, dirs, filenames in os.walk(PATH_TO_FIND_FILES):
        for filename in filenames:
            file_path = os.path.join(root, filename)
            _, ext = os.path.splitext(file_path)

            if(file_path.lower().endswith('.md')):
                success, text = open_md(file_path)
                print(success, text)
                continue

            if(file_path.lower().endswith('.txt')):
                success, text = open_txt(file_path)
                print(success, text)
                continue
            
            if(file_path.lower().endswith('.docx')):
                success, text = open_docx(file_path)
                print(success, text)
                continue

            if(file_path.lower().endswith('.pdf')):
                success, text = open_pdf(file_path)
                print(success, text)
                continue

            if (ext.lower() in [".jpg", ".webp", ".jpeg", ".png", ".gif"]):
                success, sizes = open_images(file_path)
                print(success, sizes[0], sizes[1])
                continue

            print("", file_path)

if __name__ == '__main__':
    main()
