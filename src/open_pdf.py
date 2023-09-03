from tabula import read_pdf

def open_pdf(pdf_file: str) -> [bool, str]:
    try:
        text = read_pdf(pdf_file, pages="all", multiple_tables=True)
        return [True, text]
        
    except UnboundLocalError:
        return [False, "UnboundLocalError"]

