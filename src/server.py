import os
from src.open_md import open_md
from src.open_txt import open_txt
from src.open_docx import open_docx
from src.open_pdf import open_pdf

PATH_TO_FIND_FILES = './public' 

def main():
    for root, dirs, filenames in os.walk(PATH_TO_FIND_FILES):
        for filename in filenames:
            file_path = os.path.join(root, filename)

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

            print("", file_path)

if __name__ == '__main__':
    main()