---
layout: default
title: Scoop 包管理指南
---


安装 Scoop 

环境变量
```
PATH=E:\scoop
```

设置执行策略（如果尚未设置）
```PowerShell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
```

下载并运行安装脚本，安装路径为 E:\scoop
```PowerShell
irm get.scoop.sh | iex -ArgumentList 'E:\scoop'
```

