def open_txt(file: str) -> [bool, str]:
    try:
        reader = open(file, "r", encoding="utf-8")
        txt = reader.read()
        reader.close()
    except Exception as e:
        return [False, "Error " + str(e)]
    else:
        return [True, txt]