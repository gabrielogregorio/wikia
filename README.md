# Wikia

python3 

## Configs

### 1. Create virtual environment

```bash
# configure venv in ubuntu 22
sudo apt install python3.10-venv

# create env var
python3 -m venv env_wikia

# active venv
source env_wikia/bin/activate

# install dependencies
pip3 install -r requirements.txt

# update requirements
pip3 freeze > requirements.txt
```

# Running
pip3 install -e .
dev

