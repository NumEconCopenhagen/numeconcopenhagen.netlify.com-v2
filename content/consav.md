---
title: "ConSav - Consumption-Saving Models"
---

&nbsp;

A code library for solving and simulating consumption-saving models in Python using Numba JIT compiled functions. The **consav** package provides:

* A **Model** class with predefined methods for e.g. saving and loading derived from the [EconModel package](https://github.com/NumEconCopenhagen/EconModel)
* A **multi-linear interpolation** module
* Optimizers such as **golden section search** and **newton-raphson**
* An **upper envelope** function for using the endogenous grid point method in non-convex models

All of the above is written to be **Numba compatible**.

The repository **[ConsumptionSavingNotebooks](https://github.com/NumEconCopenhagen/ConsumptionSavingNotebooks)** contains a number of examples on using the various tools and two models:

* The canonical buffer-stock consumption model
* A durable consumption models with non-convex adjustment costs

The library builds on the model class in **[EconModel](https://github.com/NumEconCopenhagen/EconModel)**. The repository **[EconModelNotebooks](https://github.com/NumEconCopenhagen/EconModelNotebooks)** contains a number of examples on using this underlying model class.