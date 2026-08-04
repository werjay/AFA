# AFA API Documentation


## Expense


## Create Expense


### POST


/api/expense/parse-text



Request:

```json
{
  "text": "午餐245"
}

Response:

{
  "success": true,
  "data": {
    "id": 1,
    "expense": {
      "name": "午餐",
      "amount":245,
      "currency":"TWD",
      "category":"餐飲"
    }
  }
}
Query Expenses
GET
/api/expense

Response:

{
  "success": true,
  "data": []
}