---
title: Scoop 包管理指南
---

=== "设置环境" 
	```powershell
	PATH=E:\scoop
	```
=== "设置策略" 
	```powershell
	Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
	```
=== "安装脚本" 
	```powershell 
	irm get.scoop.sh | iex -ArgumentList 'E:\scoop'
	```
=== "日常命令"
	```powershell
	scoop update         # 更新 Scoop 本身及内置的软件源列表
	scoop update *       # 更新所有已安装包
	scoop update <pack>  # 更新单个安装包
	scoop status         # 查看所有包有可用更新
	scoop status <pack>  # 查看包是否有更新
	scoop info <pack>    # 查看包是否有更新
	```
=== "命令帮助"
	```powershell hl_lines="1 13" 
	scoop help <command>   特定帮助
	alias      管理 Scoop 别名
	bucket     管理 Scoop 仓库（buckets）
	cache      显示或清除下载缓存
	cat        显示指定清单（manifest）的内容。如果安装了 `bat`，将使用它来美化显示 JSON。
	checkup    检查潜在问题
	cleanup    清理应用，移除旧版本
	config     获取或设置配置值
	create     创建自定义应用清单
	depends    列出应用的依赖项，顺序为安装时的顺序
	download   下载应用到缓存文件夹并验证哈希值
	export     以 JSON 格式导出已安装的应用、仓库（以及可选的配置）
	help       显示命令帮助信息
	hold       锁定某个应用以禁用更新
	home       打开应用的主页
	import     从 JSON 格式的 Scoopfile 导入应用、仓库和配置
	info       显示应用的相关信息
	install    安装应用
	list       列出已安装的应用
	prefix     返回指定应用的安装路径
	reset      重置应用以解决冲突
	search     搜索可用的应用
	shim       管理 Scoop shim（可执行文件的代理）
	status     显示状态并检查应用的新版本
	unhold     解锁应用以启用更新
	uninstall  卸载应用
	update     更新应用或 Scoop 自身
	virustotal 在 virustotal.com 上查找应用的哈希值或 URL
	which      查找 shim/可执行文件的位置（类似于 Linux 的 'which' 命令）
	```
---


### 搜索软件


[Scoop.sh ](https://scoop.sh/){ .md-button } [Scoop 软件搜索](https://scoop.eallion.com/){ .md-button } [Scoop 目录](https://rasa.github.io/scoop-directory/search){ .md-button }


### Scoop 信息
[Scoop 维基](https://github.com/ScoopInstaller/Scoop/wiki){ .md-button }








