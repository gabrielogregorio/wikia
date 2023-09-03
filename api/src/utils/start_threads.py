import threading

threads = []

def start_threads(worker, num_threads):
    for i in range(num_threads):
        t = threading.Thread(target=worker, args=("thread-{}".format(i),))
        t.start()
        threads.append(t)
    
    return threads
