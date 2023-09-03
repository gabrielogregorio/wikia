# Wikia

python3 

## Configs

### 1. Create virtual environment

```bash
# configure venv in ubuntu 22
sudo apt install python3.10-venv

rm -rf env_wikia

# create env var
python3 -m venv env_wikia

# active venv
source env_wikia/bin/activate

# reset paths
export PYTHONPATH=$PYTHONPATH:$(pwd)

# install dependencies
pip3 install -r requirements.txt

# update requirements
pip3 freeze > requirements.txt
```

# Install java to read pdf 

```
to use from tabula import read_pdf
sudo apt update
sudo apt install default-jre
```

# Instal OCR
sudo apt update
sudo apt install tesseract-ocr
sudo apt install tesseract-ocr-por

# down tesseract
pkill tesseract


# Running
python src/server.py 



