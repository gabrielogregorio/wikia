from tabula import read_pdf

def open_pdf(pdf_file: str) -> [bool, str]:
    try:
        text = read_pdf(pdf_file, pages="all", multiple_tables=True)
    except UnboundLocalError:
        return [False, "UnboundLocalError"]
    return [True, text]

