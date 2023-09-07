git submodule deinit -f backend/tms-api

git rm --cached backend/tms-api

rm -rf .git/modules/backend/tms-api

Remove-Item -Recurse -Force .git\modules\backend\tms-api


git add backend/tms-api
git commit -m "Added tms-api content directly into the repository"




notepad .gitmodules
