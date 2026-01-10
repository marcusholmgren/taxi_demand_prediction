# Taxi demand prediction

[![Deploy Next.js site to Pages](https://github.com/marcusholmgren/taxi_demand_prediction/actions/workflows/nextjs.yml/badge.svg)](https://github.com/marcusholmgren/taxi_demand_prediction/actions/workflows/nextjs.yml)

Machine Learning project that predicts taxi rides in New York City 🚕

Marcus is working on a project to predict demand for taxis using time-series analysis and machine learning. His goal is to help taxi companies make more informed decisions about how many taxis to have on the road at any given time, and where to deploy them.

He is using data about past taxi rides, as well as other relevant factors such as weather, events, and traffic conditions, to train a machine learning model. The model will then be used to make predictions about future demand for taxis.

Marcus hopes that his work will help taxi companies to operate more efficiently, and ultimately to provide a better service to their customers.

## Setup

This project uses [uv](https://github.com/astral-sh/uv) to manage the environment and dependencies.

### Installation

If you don't have `uv` installed, you can install it using:

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

### Environment Setup

Install the dependencies and create a virtual environment:

```bash
uv sync
```

### Running Jupyter Notebooks

To start Jupyter Lab and work with the notebooks:

```bash
uv run jupyter lab
```

Alternatively, to run a specific notebook using the project's environment:

```bash
uv run jupyter notebook
```

### Development

To run the main script:

```bash
uv run main.py
```
