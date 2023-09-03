def open_md(file: str) -> [bool, str]:
    try:
        reader = open(file, "r", encoding="utf-8")
        txt = reader.read()
        reader.close()
        return [True, txt]
        
    except Exception as e:
        return [False, "Error " + str(e)]
    
