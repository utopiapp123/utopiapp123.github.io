---
title: "实验报告模板 - VQE 量子变分本征求解器"
description: "这是一个实验报告模板，展示如何使用 VQE 算法求解分子基态能量"
pubDate: 2026-03-12
category: "量子计算实验"
tags: ["VQE", "量子算法", "Qiskit", "量子化学"]
heroImage: null
experiment:
  date: "2026-03-10"
  equipment:
    - "IBM Quantum Experience"
    - "Qiskit 0.45.0"
    - "Python 3.10"
  parameters:
    qubits: "4"
    shots: "1024"
    optimizer: "COBYLA"
---

## 1. 实验目的

本实验旨在通过变分量子本征求解器（VQE）算法，计算简单分子的基态能量。VQE 是一种混合量子 - 经典算法，适用于当前含噪声的中等规模量子（NISQ）设备。

## 2. 实验原理

### 2.1 VQE 算法基础

VQE 算法基于变分原理：

$$
E_0 \leq \frac{\langle\psi(\theta)|H|\psi(\theta)\rangle}{\langle\psi(\theta)|\psi(\theta)\rangle}
$$

其中：
- $E_0$ 是基态能量
- $|\psi(\theta)\rangle$ 是参数化的试探波函数
- $H$ 是系统的哈密顿量

### 2.2 算法流程

```python
from qiskit import QuantumCircuit
from qiskit.algorithms import VQE
from qiskit.primitives import Estimator

# 1. 构建参数化量子电路
ansatz = QuantumCircuit(4)
ansatz.ry(theta[0], 0)
ansatz.ry(theta[1], 1)
ansatz.cx(0, 1)

# 2. 定义哈密顿量
hamiltonian = ...

# 3. 运行 VQE
vqe = VQE(estimator=Estimator(), ansatz=ansatz, optimizer=COBYLA())
result = vqe.compute_minimum_eigenvalue(hamiltonian)
```

## 3. 实验设备与参数

| 参数项 | 设置值 |
|--------|--------|
| 量子比特数 | {experiment.parameters.qubits} |
| 测量次数 | {experiment.parameters.shots} |
| 优化器 | {experiment.parameters.optimizer} |
| 实验日期 | {experiment.date} |

使用设备：
{experiment.equipment.map(item => `- ${item}`).join('\n')}

## 4. 实验结果

### 4.1 能量收敛曲线

![收敛曲线](/images/vqe-convergence.png)

### 4.2 结果分析

通过 VQE 算法，我们得到了分子的基态能量估计值：

- **计算值**: -1.85 Ha
- **精确值**: -1.86 Ha
- **误差**: 0.54%

## 5. 结论与讨论

本次实验成功实现了 VQE 算法，并获得了较为准确的基态能量。主要发现：

1. **Ansatz 选择很重要** - 更深的电路能提供更好的近似，但也会增加噪声
2. **优化器选择** - COBYLA 在无梯度优化中表现良好
3. **误差来源** - 主要来自量子噪声和有限测量次数

## 6. 后续改进

- [ ] 尝试更复杂的 Ansatz（如 UCCSD）
- [ ] 使用误差缓解技术
- [ ] 在真实量子设备上运行
- [ ] 扩展到更大的分子系统

## 参考资料

1. Peruzzo, A., et al. "A variational eigenvalue solver on a photonic quantum processor." Nature Communications 5.1 (2014): 4213.
2. Qiskit Documentation: https://qiskit.org/documentation/
