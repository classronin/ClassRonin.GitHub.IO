---
title: python 包管理器
---

### [UV](https://github.com/astral-sh/uv)

??? Example "UV指南"
    === "命令"
        ``` powershell hl_lines="4" 
        uv python install 3.12     # 安装 Astral-sh 版 python 
		uv python uninstall 3.12   # 删除UV官方python
		
		剖解并吃了PIP
		uv run python -m ensurepip -U
		uv run python -m pip install -U pip
		uv run python -m pip install -U setuptools
        ```
    === "UV文档"
        * [UV文档](https://docs.astral.sh/uv/)
    === "UV下载"
        ``` 
         @github-releases[astral-sh/uv]
        ```
    === "python下载"
        ``` 
         @github-releases[astral-sh/python-build-standalone]
        ```
        
---

### [PIXI](https://github.com/prefix-dev/pixi)

??? Example "PIXI指南"
    === "命令"
        ``` powershell
        pixi add python  # 安装 couda python 
		pixi init             # 初始化
        pixi add <pack>       # 添加依赖
        pixi remove <pack>    # 移除依赖
        ```
    === "配置"
        ``` powershell
        PIXI_HOME=E:\pixi\home       # 定义了 pixi 存放其全局数据的目录。
		%PIXI_HOME%\config.toml      # PIXI_HOME 中的全局配置。
        PIXI_CACHE_DIR=E:\pixi\cache # 缓存目录 - 存放 wheel/tar.gz/conda包 
		pixi info -vvv               # 查找 pixi 查找配置文件的位置
        ```
    === "config.toml"
        ``` toml
		default-channels = ["conda-forge", "nvidia", "pytorch"]

		[pypi-config]
		extra-index-urls = [
		  "https://pypi.tuna.tsinghua.edu.cn/simple",
		  "https://pypi.org/simple",
		]
		index-url = "https://mirrors.aliyun.com/pypi/simple"


		[mirrors]
		# 将所有镜像源合并到一个键名下
		"https://conda.anaconda.org/conda-forge" = [
			"https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge",
			"https://mirrors.ustc.edu.cn/anaconda/cloud/conda-forge",
			"https://mirrors.aliyun.com/anaconda/cloud/conda-forge",
			"https://mirrors.cloud.tencent.com/anaconda/cloud/conda-forge",
			"https://mirrors.huaweicloud.com/repository/pypi-cloud/conda-forge",
			"https://mirrors.sjtug.sjtu.edu.cn/anaconda/cloud/conda-forge",
			"https://pypi.bajins.com/conda-forge"
		]

		# 其他通道的镜像源
		"https://repo.anaconda.com/pkgs/main" = [
			"https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main",
			"https://mirrors.ustc.edu.cn/anaconda/pkgs/main"
		]

		"https://repo.anaconda.com/pkgs/r" = [
			"https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r"
		]

		# 如果需要添加 bioconda
		"https://conda.anaconda.org/bioconda" = [
			"https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/bioconda",
			"https://mirrors.ustc.edu.cn/anaconda/cloud/bioconda"
		]
        ```
    === "PIXI文档"
        * [PIXI文档](https://pixi.sh/latest/)
    === "PIXI下载"
        ``` 
         @github-releases[prefix-dev/pixi]
        ```
---
      