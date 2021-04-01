# Git

### 常用命令

```js
1.设置git账户
git config --global user.name "Your Name"
git config --global user.email "[email@example.com]"

2.删除远程分支
git branch -ｒ // 查看远程分支
git branch -r -d origin/branch-name // 删除本地分支
git push origin :branch-name // 通知版本库删除远程分支
git push -d origin branch-name // 直接删除远程分支

3.暂存更改
git stash list // 显示保存进度的列表
git stash pop [–index] [stash_id]
git stash pop 恢复最新的进度到工作区。git默认会把工作区和暂存区的改动都恢复到工作区。
git stash pop --index 恢复最新的进度到工作区和暂存区。（尝试将原来暂存区的改动还恢复到暂存区）
git stash pop stash@{1}恢复指定的进度到工作区。stash_id是通过git stash list命令得到的
通过git stash pop命令恢复进度后，会删除当前进度。
git stash apply [–index] [stash_id] 除了不删除恢复的进度之外，其余和git stash pop 命令一样。
git stash drop [stash_id] 删除一个存储的进度。如果不指定stash_id，则默认删除最新的存储进度。
git stash clear 删除所有存储的进度。

3.仓库状态
git status

4.git历史记录
git log

5.常用命令
git remote show origin 显示远程库origin里的资源
git branch -D master develop 删除本地库develop
git config --list 看所有用户
git ls-files 看已经被提交的
git rm [file name] 删除一个文件
git diff 查看尚未暂存的更新
git rm a.a 移除文件(从暂存区和工作区中删除)
git rm --cached a.a 移除文件(只从暂存区中删除)
git commit -m "remove" 移除文件(从Git中删除)
git rm -f a.a 强行移除修改后文件(从暂存区和工作区中删除)
git diff --cached 或 $ git diff --staged 查看尚未提交的更新
git reset --soft HEAD{^|~1|~n} 撤回上次commit或者撤回几次
```

