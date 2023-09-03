import sys

def get_percent_processed(count_index: int, total_files: int) -> int:
    return round((100 * count_index) / total_files, 0)

def handle_show_progress(count_index: int, total_files: int) -> None:
    percent_processed = get_percent_processed(count_index, total_files)
    
    print('\r{}% processed, {} of {} files'.format(percent_processed, count_index, total_files), end='')
    
    sys.stdout.flush()  