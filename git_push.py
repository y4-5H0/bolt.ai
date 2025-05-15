import os
import time
import subprocess
import datetime

def generate_commit_message():
    # Get the git diff summary
    diff_summary = subprocess.getoutput("git diff --stat")
    
    if not diff_summary.strip():
        return "No changes to commit"
    
    # Generate a commit message based on the diff summary
    return f"Updated files:\n{diff_summary}"

while True:
    # Generate a dynamic commit message
    commit_message = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S") + "\n" + generate_commit_message()
    
    if commit_message == "No changes to commit":
        print("No changes detected. Skipping commit.")
    else:
        # Run git commands
        os.system('git add .')
        os.system(f'git commit -m "{commit_message}"')
        os.system('git push')
        # Wait for 120 seconds
        time.sleep(30)