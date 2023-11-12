from datetime import datetime
from typing import Tuple

import pandas as pd


def train_test_split(
        df: pd.DataFrame,
        cutoff_date: datetime,
        target_column_name: str,
) -> Tuple[pd.DataFrame, pd.Series, pd.DataFrame, pd.Series]:
    """Split a dataframe into train and test sets.

    Args:
        df: The dataframe to split.
        cutoff_date: The date to split on.
        target_column_name: The name of the target column.

    Returns:
        A tuple of (X_train, y_train, X_test, y_test).
    """
    train_data = df[df.pickup_hour < cutoff_date].reset_index(drop=True)
    test_data = df[df.pickup_hour >= cutoff_date].reset_index(drop=True)

    X_train = train_data.drop(columns=[target_column_name])
    y_train = train_data[target_column_name]
    X_test = test_data.drop(columns=[target_column_name])
    y_test = test_data[target_column_name]

    return X_train, y_train, X_test, y_test
