import cv2

def open_video(file: str) -> [bool, [int, int]]:
    try:
        vid = cv2.VideoCapture(file)

        width = int(vid.get(cv2.CAP_PROP_FRAME_WIDTH))
        height = int(vid.get(cv2.CAP_PROP_FRAME_HEIGHT))

        vid.release()
        return [True, [width, height]]
    except Exception as e:
        return [False, "Error " + str(e)]
    
