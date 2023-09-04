def insert_items_into_queue(work_queue, list_paths):
    for count, path_info in enumerate(list_paths):
        work_queue.put([path_info[0], path_info[1], count])
