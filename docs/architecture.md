# AFA Architecture


## Overview

AFA uses a layered backend architecture.

API Request

↓

Routes

↓

Controllers

↓

Services

↓

Models

↓

Database



---

## Layer Responsibility


## Routes

Responsibility:

- Define API endpoints
- Handle HTTP routing


Example:


POST /api/expense/parse-text
GET /api/expense



---

## Controllers

Responsibility:

- Receive request
- Validate input
- Return response


Controllers should not contain:

- SQL logic
- AI logic


---

## Services

Responsibility:

- Business logic
- Coordinate multiple modules


Examples:

- Expense service
- AI service


---

## Models

Responsibility:

- Database operations


Examples:

- Insert expense
- Query expense


---

## Database

Current:

SQLite


Database file:


data/afa.db