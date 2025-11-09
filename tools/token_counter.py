# token_counter.py

import tiktoken
from pathlib import Path
import os

# Path relative to this script file
file_path = Path(__file__).parent / "output_all_code.txt"
print(file_path)
model_name = "gpt-3.5-turbo"

if not file_path.is_file():
    print(f"Error: File '{file_path}' does not exist.")
    exit(1)

# Read the text
text = file_path.read_text(encoding="utf-8")

# Count lines
num_lines = text.count("\n") + 1

# Count words
num_words = len(text.split())

# Count tokens
encoding = tiktoken.encoding_for_model(model_name)
tokens = encoding.encode(text)
num_tokens = len(tokens)

# Output results
print(f"File: {file_path}")
print(f"Lines: {num_lines}")
print(f"Words: {num_words}")
print(f"Tokens ({model_name}): {num_tokens}")
