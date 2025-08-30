---
title: Windows 命令 
---

### :material-text-box-edit: Windows 图形界面命令 

!!! Example ":octicons-heart-fill-24:{ .heart } Windows 图形界面命令"
	=== " 配置/设备"
		```cmd hl_lines="1 8"
		系统信息与配置
		sysdm.cpl           # 系统属性 (计算机名、设备管理器、高级设置等)
		msinfo32            # 系统信息 (硬件、组件、软件环境的详细概述)
		winver              # 关于 Windows (显示当前Windows版本和构建号)
		control system      # 控制面板 - 所有控制面板项：系统
		msconfig            # 系统配置 (管理启动项、服务、引导选项)
		ver                 # 显示当前 Windows 版本号 (命令行)
		硬件与设备管理
		devmgmt.msc         # 设备管理器 (管理硬件设备和驱动程序)
		dxdiag              # DirectX 诊断工具 (显示显卡、声卡及DirectX版本信息)
		hdwwiz.cpl          # 添加硬件向导
		desk.cpl            # 屏幕分辨率设置
		main.cpl            # 鼠标属性
		```

	=== "账户/磁盘/网络"
		```cmd hl_lines="1 6 10"
		用户账户与管理工具
		netplwiz               # 用户账户管理 (高级用户账户控制)
		lusrmgr.msc            # 本地用户和组管理器 (高级用户和组管理)
		control userpasswords2 # 用户账户 (旧版Netplwiz)
		control userpasswords  # 用户账户设置
		磁盘与存储管理
		diskmgmt.msc           # 磁盘管理 (分区、格式化、更改驱动器号)
		cleanmgr               # 磁盘清理工具
		dfrgui                 # 优化驱动器 (磁盘碎片整理)
		网络连接与配置
		ncpa.cpl               # 网络连接 (管理所有网络适配器和连接)
		control netconnections # 网络连接 (替代命令)
		inetcpl.cpl            # Internet 属性 (IE/Edge浏览器设置)
		firewall.cpl           # Windows Defender 防火墙
		```

	=== "程序功能/控制"
		```cmd hl_lines="1 4"
		程序与功能管理
		appwiz.cpl         # 程序和功能 (卸载或更改程序)
		optionalfeatures   # Windows 功能 (打开或关闭 Windows 功能)
		管理控制台 (MMC)
		compmgmt.msc       # 计算机管理 (包含多个管理工具的集成控制台)
		services.msc       # 服务 (管理系统后台服务)
		eventvwr.msc       # 事件查看器 (查看系统、应用程序、安全日志)
		taskschd.msc       # 任务计划程序 (创建和管理自动任务)
		gpedit.msc         # 本地组策略编辑器 (专业版/企业版可用)
		secpol.msc         # 本地安全策略 (安全策略配置)
		```

	=== "控制面板/实用"
		```cmd hl_lines="1 11"
		控制面板快捷方式
		control            # 打开控制面板 (主页)
		control folders    # 文件资源管理器选项
		control keyboard   # 键盘属性
		control mouse      # 鼠标属性
		control printers   # 设备和打印机
		control color      # 颜色管理
		control fonts      # 字体设置
		control sound      # 声音设置
		control international # 区域和语言设置
		系统工具与实用程序
		taskmgr            # 任务管理器 (进程、性能、启动项管理)
		resmon             # 资源监视器 (详细的CPU、内存、磁盘、网络监控)
		perfmon            # 性能监视器 (创建数据收集器集和性能报告)
		mrt                # Microsoft Windows 恶意软件删除工具
		charmap            # 字符映射表 (特殊字符选择器)
		```

	=== "远程/诊断"
		```cmd hl_lines="1 5"
		远程访问与连接
		mstsc              # 远程桌面连接
		powershell         # Windows PowerShell
		cmd                # 命令提示符
		高级与诊断工具
		regedit            # 注册表编辑器
		odbcad32           # ODBC 数据源管理器
		verifier           # 驱动程序验证程序管理器
		```
		
	=== "应用/辅助"
		```cmd hl_lines="1 8"
		内置应用程序
		calc               # 计算器
		notepad            # 记事本
		write              # 写字板
		mspaint            # 画图
		snippingtool       # 截图工具
		stikynot           # 便笺
		辅助功能
		magnify            # 放大镜
		narrator           # 讲述人
		osk                # 屏幕键盘
		utilman            # 轻松使用设置中心
		```








