---
title: Scoop 包管理器
---

### 搜索软件
[Scoop.sh ](https://scoop.sh/){ .md-button }
[Scoop 目录](https://rasa.github.io/scoop-directory/search){ .md-button }
[Scoop 软件搜索](https://scoop.eallion.com/){ .md-button }
---

### :material-text-box-edit: [Scoop 包管理器](https://github.com/ScoopInstaller/Scoop "来自Scoop官网")

=== "安装" 
	```powershell hl_lines="1"
	$env:SCOOP='E:\scoop'				# 设置安装路径
	Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
	irm get.scoop.sh | iex
	```
	
=== "核心命令"
	```powershell 
	scoop install <app>       # 安装应用
	scoop install --arch 64bit <app>  # 安装64位版本
	scoop uninstall <app>     # 卸载应用
	scoop update              # 更新 Scoop 自身
	scoop update *            # 更新所有应用
	scoop update <app>        # 更新指定应用
	scoop list                # 查看已安装应用
	scoop search <keyword>    # 搜索应用
	scoop status              # 检查更新状态
	scoop info <app>          # 查看应用详情
	scoop home <app>          # 打开应用官网
	```

=== "Bucket"
	```powershell
	scoop bucket list         # 查看已添加仓库
	scoop bucket add <name>   # 添加仓库
	scoop bucket rm <name>    # 移除仓库
	scoop bucket known        # 查看官方仓库
	scoop bucket search <app> # 全仓库搜索
	scoop bucket update       # 更新仓库清单
	scoop reset <app>@<ver>   # 切换应用版本
	```

=== "Aria2/配置"
	```powershell hl_lines="1 7"
	Aria2
	scoop install aria2               # 安装下载器
	scoop config aria2-enabled true   # 启用加速
	scoop config aria2-enabled false  # 禁用加速
	scoop config aria2-split 16       # 设置线程数
	scoop config aria2-min-split-size 4M # 最小分片
	配置
	scoop config aria2-enabled true   # 启用多线程下载
	scoop config aria2-enabled false  # 禁用多线程下载
	scoop config proxy <地址>         # 设置代理
	scoop config rm proxy             # 移除代理
	scoop config no_junction true     # 禁用符号链接
	scoop config no_junction false    # 启用符号链接
	scoop config show                # 显示当前配置
	```

=== "版本/清理"
	```powershell hl_lines="1 5"
	版本控制
	scoop versions <app>      # 查看所有版本
	scoop pin <app>           # 固定版本
	scoop unpin <app>         # 取消固定
	清理
	scoop cache rm <app>     # 删除指定缓存
	scoop cache rm *         # 删除所有缓存
	scoop cleanup <app>      # 清理旧版本
	scoop cleanup *          # 清理所有旧版本
	scoop cleanup -k <app>   # 彻底删除应用
	scoop checkup            # 环境检查
	```

=== "功能/开发"
	```powershell hl_lines="1 8"
	高级功能
	scoop hold <app>          # 锁定版本
	scoop unhold <app>        # 解锁版本
	scoop export > apps.json  # 导出列表
	scoop import apps.json    # 批量安装
	scoop persist <app>       # 数据持久化
	scoop unpersist <app>     # 取消持久化
    开发辅助
	scoop create <url>        # 生成清单模板
	scoop cat <app>           # 查看清单内容
	scoop prefix <app>        # 获取安装路径
	scoop which <command>     # 定位命令
	scoop manifest <app>      # 查看JSON源码
	```

=== "网络/排查"
	```powershell hl_lines="1 4"
	网络
	scoop config proxy bypass <hosts>  # 代理绕过
	scoop checkup -n                   # 网络测试
	故障排查
	scoop reset *                   # 重置快捷方式
	scoop help --all                # 查看所有命令
	scoop uninstall --purge <app>   # 彻底删除
	```
	
---

### 维基
[Scoop 维基](https://github.com/ScoopInstaller/Scoop/wiki){ .md-button }




