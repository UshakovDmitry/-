PS C:\Users\ushakov.dmitriy\Desktop\alser.dispatcherworkplaceui\backend> git add .
error: 'backend/tms-api' does not have a commit checked out
fatal: updating files failed
PS C:\Users\ushakov.dmitriy\Desktop\alser.dispatcherworkplaceui\backend> git status
On branch develop-3
Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
  (commit or discard the untracked or modified content in submodules)
        deleted:    .gitignore
        deleted:    Dockerfile
        deleted:    package-lock.json
        deleted:    package.json
        modified:   tms-api (untracked content)

no changes added to commit (use "git add" and/or "git commit -a")
PS C:\Users\ushakov.dmitriy\Desktop\alser.dispatcherworkplaceui\backend> cd ..
PS C:\Users\ushakov.dmitriy\Desktop\alser.dispatcherworkplaceui> git add .
error: 'backend/tms-api' does not have a commit checked out
fatal: updating files failed
PS C:\Users\ushakov.dmitriy\Desktop\alser.dispatcherworkplaceui> git commit -m "nest added"
On branch develop-3
Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
  (commit or discard the untracked or modified content in submodules)
        deleted:    backend/.gitignore
        deleted:    backend/Dockerfile
        deleted:    backend/package-lock.json
        deleted:    backend/package.json
        modified:   backend/tms-api (untracked content)

no changes added to commit (use "git add" and/or "git commit -a")
PS C:\Users\ushakov.dmitriy\Desktop\alser.dispatcherworkplaceui>
