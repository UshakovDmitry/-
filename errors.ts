git submodule deinit -f backend/tms-api

git rm --cached backend/tms-api

rm -rf .git/modules/backend/tms-api

Remove-Item -Recurse -Force .git\modules\backend\tms-api


git add backend/tms-api
git commit -m "Added tms-api content directly into the repository"



[core]
	repositoryformatversion = 0
	filemode = false
	bare = false
	logallrefupdates = true
	symlinks = false
	ignorecase = true
[remote "origin"]
	url = http://bitbucket.next.local/scm/vue/alser.dispatcherworkplaceui.git
	fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
	remote = origin
	merge = refs/heads/master
