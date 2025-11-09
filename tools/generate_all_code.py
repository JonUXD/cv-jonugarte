import os
import json

# Paths
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))        # cv-jonugarte/tools/
PROJECT_ROOT = os.path.abspath(os.path.join(SCRIPT_DIR, "..")) # cv-jonugarte/
OUTPUT_DIR = os.path.join(PROJECT_ROOT, "tools")
OUTPUT_FILE = os.path.join(OUTPUT_DIR, "output_all_code.txt")
CONFIG_FILE = os.path.join(SCRIPT_DIR, "config.json")

# Load config
with open(CONFIG_FILE, "r") as f:
    config = json.load(f)

INCLUDE_EXTENSIONS = config.get("include_extensions", [])
EXCLUDE_FOLDERS = set(config.get("exclude_folders", []))
EXCLUDE_FILES = set(config.get("exclude_files", []))

# Ensure output folder exists
os.makedirs(OUTPUT_DIR, exist_ok=True)

def is_text_file(file_path):
    """Check if the file extension is included."""
    _, ext = os.path.splitext(file_path)
    return ext.lower() in INCLUDE_EXTENSIONS

def should_skip(file_path):
    """Check if file or folder should be skipped."""
    if os.path.basename(file_path) in EXCLUDE_FILES:
        return True
    for part in file_path.split(os.sep):
        if part in EXCLUDE_FOLDERS:
            return True
    return False

def collect_files_text(root_path):
    all_texts = []
    file_stats = []  # Store file name and number of characters
    for dirpath, dirnames, filenames in os.walk(root_path):
        dirnames[:] = [d for d in dirnames if d not in EXCLUDE_FOLDERS]
        for file in filenames:
            file_path = os.path.join(dirpath, file)
            if should_skip(file_path):
                continue
            if is_text_file(file_path):
                try:
                    with open(file_path, "r", encoding="utf-8") as f:
                        content = f.read()
                    rel_path = os.path.relpath(file_path, PROJECT_ROOT)
                    all_texts.append(f"--- {rel_path} ---\n{content}\n")
                    file_stats.append((rel_path, len(content)))
                except Exception as e:
                    print(f"Warning: Could not read {file_path}: {e}")
    return all_texts, file_stats

def main():
    print("Collecting text files...")
    texts, file_stats = collect_files_text(PROJECT_ROOT)
    print(f"Collected {len(texts)} files.")

    # Write all code to output file
    print(f"Writing output to {OUTPUT_FILE} ...")
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write("\n".join(texts))
    print("Done!")

    # Print file sizes in characters
    print("\nFile Character Counts:")
    for file, char_count in file_stats:
        print(f"{file}: {char_count} characters")

if __name__ == "__main__":
    main()
