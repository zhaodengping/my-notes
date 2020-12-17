## 初始化
### 初始化
```
git init
```
### 将文件添加到仓库，暂存区
```
git add .
```
### 将暂存区的所有文件提交到仓库，当前分支
```
git commit -m ''
```
### 查看文件状态，（哪些提交了，哪些没提交）
```
git status
```
### 对比文件修改了什么
```
git diff
```

### 查看提交记录
```
git log
或者
git log --pretty=oneline
```

### 版本回退(上一个版本)
```
git reset --hard HEAD^
```
### 查看命令历史
```
git reflog
```
>github给出的地址有2个，一个是https://XXX;另一个是：git@XXX,区别是，https是使用https协议，git是SSH协议

## 分支
### 创建分支并切换
```
git checkout -b dev
```
git checkout 加上-b表示创建分支并切换，等于一下命令行
```
git branch dev
git checkout dev
```
git branch列出所有分支,前面有*为当前分支。
### 合并指定分支,合并到当前分支
```
git merge dev
```

### 删除指定分支 
```
git branch -d dev
```

### 隐藏
当代码写到一半，发现有bug需要紧急修复，本地代码不想提交

可以先隐藏当前的代码,恢复到之前的代码
```
git stash
```
bug修复完，也提交了，现在继续写代码
```
git stash list //查看隐藏的列表
```
现在修复
```
git stash apply //修复
git stash drop //删除
或者
git stash pop //修复并删除
```

## 多人协作
### 查看远程库
```
git remote 查看当前分支关联了什么远程仓库

git remote -v //详细

git remote add origin(远程仓库在本地的缩写) https://github.com/zhaodengping/react-router-demo.git(远程仓库路径)  将本地的文件与远程仓库做关联

git push -u origin master //-u是将这个仓库作为git push的默认仓库，否则得自己手动去git push哪个指定的仓库

```
## 学习文档来自廖雪峰课程
### 初始化时将本地仓库提交到远程仓库
1. 初始化本地仓库 git init 将本地内容添加至git索引中 git add .
2. 将索引添加至本地仓库中 git commit -m "first commit"
3. 添加远程仓库路径 git remote add origin https://github.com/smileLuckBoy/maven.git
4. 将本地内容push至远程仓库中 git push -u origin master
5. 之后每次文件修改，推送最新修改 git push origin master

当远程仓库代码跟本地仓库代码合并出现分歧的时候，可能会提示`fatal: refusing to merge unrelated histories`,一般是`readme`文件的冲突

可以使用`git pull origin master --allow-unrelated-histories`去合并2个独立仓库的历史
### 流程
1. 首先，可以试图用git push origin <branch-name>推送自己的修改；
2. 如果推送失败，则因为远程分支比你的本地更新，需要先用git pull试图合并；
3. 如果合并有冲突，则解决冲突，并在本地提交；
4. 没有冲突或者解决掉冲突后，再用git push origin <branch-name>推送就能成功！
5. 如果git pull提示no tracking information，则说明本地分支和远程分支的链接关系没有创建，用命令
   git branch --set-upstream-to <branch-name> origin/<branch-name>。