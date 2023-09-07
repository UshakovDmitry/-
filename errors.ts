git submodule deinit -f backend/tms-api

git rm --cached backend/tms-api

rm -rf .git/modules/backend/tms-api

git add backend/tms-api
git commit -m "Added tms-api content directly into the repository"







PS C:\Users\ushakov.dmitriy\Desktop\alser.dispatcherworkplaceui\backend\tms-api> cd ..
PS C:\Users\ushakov.dmitriy\Desktop\alser.dispatcherworkplaceui\backend> cd ..
PS C:\Users\ushakov.dmitriy\Desktop\alser.dispatcherworkplaceui> git submodule deinit -f backend/tms-api
PS C:\Users\ushakov.dmitriy\Desktop\alser.dispatcherworkplaceui> git rm --cached backend/tms-api
rm 'backend/tms-api'
PS C:\Users\ushakov.dmitriy\Desktop\alser.dispatcherworkplaceui> rm -rf .git/modules/backend/tms-api
Remove-Item : Не удается найти параметр, соответствующий имени параметра "rf".
строка:1 знак:4
+ rm -rf .git/modules/backend/tms-api
+    ~~~
    + CategoryInfo          : InvalidArgument: (:) [Remove-Item], ParameterBindingException
    + FullyQualifiedErrorId : NamedParameterNotFound,Microsoft.PowerShell.Commands.RemoveItemCommand
 
PS C:\Users\ushakov.dmitriy\Desktop\alser.dispatcherworkplaceui>
