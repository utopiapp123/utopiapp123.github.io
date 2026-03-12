---
title: "开发环境配置指南"
description: "记录我的量子计算开发环境配置，包括 Qiskit、开发工具和常用脚本"
pubDate: 2026-03-11
category: "小设置"
tags: ["开发环境", "Qiskit", "Python", "配置"]
heroImage: null
---

## 🛠️ 开发环境概览

这是我的量子计算开发环境配置记录，方便日后快速重建环境。

## Python 环境

### 虚拟环境管理

```bash
# 使用 conda 管理环境
conda create -n quantum python=3.10
conda activate quantum

# 安装核心依赖
pip install qiskit qiskit-ibm-runtime qiskit-aer
pip install matplotlib numpy scipy
pip install jupyterlab
```

### requirements.txt

```txt
qiskit>=0.45.0
qiskit-ibm-runtime>=0.18.0
matplotlib>=3.7.0
numpy>=1.24.0
scipy>=1.10.0
jupyterlab>=4.0.0
```

## IDE 配置

### VS Code 扩展推荐

- **Python** (ms-python.python)
- **Jupyter** (ms-toolsai.jupyter)
- **Pylance** (ms-python.vscode-pylance)
- **GitLens** (eamodio.gitlens)

### settings.json

```json
{
  "python.defaultInterpreterPath": "/home/user/miniconda3/envs/quantum/bin/python",
  "python.linting.enabled": true,
  "python.formatting.provider": "black",
  "editor.formatOnSave": true,
  "editor.tabSize": 4
}
```

## 常用脚本

### 1. IBM Quantum 登录检查

```python
#!/usr/bin/env python3
# check_ibm_quantum.py

from qiskit_ibm_runtime import QiskitRuntimeService

try:
    service = QiskitRuntimeService()
    print("✅ IBM Quantum 登录成功！")
    print(f"可用后端：{service.backends()}")
except Exception as e:
    print(f"❌ 登录失败：{e}")
    print("请运行：qiskit_ibm_quantum_save_account")
```

### 2. 电路可视化工具

```python
from qiskit import QuantumCircuit
from qiskit.visualization import circuit_drawer

def visualize_circuit(circuit: QuantumCircuit):
    """可视化量子电路"""
    circuit_drawer(circuit, output='mpl', 
                   style={'name': 'iqp-dark'})
    plt.show()
```

## 快捷键备忘

### Jupyter Lab

| 快捷键 | 功能 |
|--------|------|
| `Shift + Enter` | 运行当前单元格 |
| `A` | 在上方插入单元格 |
| `B` | 在下方插入单元格 |
| `D, D` | 删除单元格 |
| `M` | 转为 Markdown |
| `Y` | 转为代码 |

### VS Code

| 快捷键 | 功能 |
|--------|------|
| `Ctrl + `` ` | 打开终端 |
| `Ctrl + Shift + P` | 命令面板 |
| `F5` | 调试 |
| `Ctrl + /` | 注释代码 |

## 常见问题

### Q: Qiskit 版本冲突怎么办？

A: 使用独立的 conda 环境，避免全局包冲突。

### Q: 如何在真实量子设备上运行？

A: 
1. 注册 IBM Quantum 账号
2. 保存 API Token
3. 选择可用的后端设备

```python
from qiskit_ibm_runtime import QiskitRuntimeService

service = QiskitRuntimeService()
backend = service.least_busy(operational=True, simulator=False)
```

## 相关链接

- [Qiskit 官方文档](https://qiskit.org/documentation/)
- [IBM Quantum Experience](https://quantum-computing.ibm.com/)
- [我的 GitHub](https://github.com/utopiapp123)

---

💡 **提示**: 定期更新这个文档，保持配置记录的准确性。
