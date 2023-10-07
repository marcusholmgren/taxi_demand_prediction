from pathlib import Path

PARENT_DIR = Path(__file__).parent.resolve().parent
DATA_DIR = PARENT_DIR.joinpath('data')
RAW_DATA_DIR = PARENT_DIR.joinpath('data', 'raw')
TRANSFORMED_DATA_DIR = PARENT_DIR.joinpath('data', 'transformed')

MODELS_DIR = PARENT_DIR.joinpath('models')

if not DATA_DIR.exists():
    DATA_DIR.mkdir()

if not RAW_DATA_DIR.exists():
    RAW_DATA_DIR.mkdir()

if not TRANSFORMED_DATA_DIR.exists():
    TRANSFORMED_DATA_DIR.mkdir()

if not MODELS_DIR.exists():
    MODELS_DIR.mkdir()
