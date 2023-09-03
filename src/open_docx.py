import docx2txt

def open_docx(file: str) -> [bool, str]:
    try:
        txt = docx2txt.process(file)
    except Exception as e:
        return [False, "Error" + str(e)]
    else:
        return [True, txt]
