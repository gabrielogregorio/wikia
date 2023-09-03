def waiting_finish_threads(threads):
    for t in threads:
        t.join()
