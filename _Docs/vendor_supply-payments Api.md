### Vendor Supplies API

#### 1. Get One Supply

**Title:** Get One Supply
**Endpoint:** `GET /supplies/:id`
**Request Body:** None
**Response:**

- 200 OK:

  ```js
  {
      "status": true,
      "msg": "Successfully Retrieved",
      "data": {
          // vendor supply details
      }
  }
  ```

- 500 Internal Server Error:

  ```json
  {
      "status": false,
      "msg": "Internal error occurs!"
  }
  ```

#### 2. Add Supply

**Title:** Add Supply
**Endpoint:** `POST /supplies`
**Request Body:**

```json
{
    "vendor_id": 1,
    "project_ref": "PR123",
    "item_name": "Item Name",
    "details": "Item Details",
    "quantity": 10,
    "rate": 100.0,
    "sgst": 5.0,
    "cgst": 5.0,
    "uom": "Unit",
    "total_amount": 1100.0,
    "date": "2023-01-01"
}
```

**Response:**

- 200 OK:

  ```
  {
      "status": true,
      "msg": "Successfully Created",
      "data": 1 // ID of the newly created supply
  }
  ```

- 500 Internal Server Error:

  ```
  {
      "status": false,
      "msg": "Internal error occurs!"
  }
  ```

#### 3. Update Supply

**Title:** Update Supply
**Endpoint:** `PUT /supplies/:id`
**Request Body:**

```
{
    "item_name": "Updated Item Name",
    "details": "Updated Item Details",
    "quantity": 15,
    "rate": 120.0,
    "sgst": 6.0,
    "cgst": 6.0,
    "uom": "Updated Unit",
    "total_amount": 1380.0,
    "date": "2023-02-01"
}
```

**Response:**

- 200 OK:

  ```
  {
      "status": true,
      "msg": "Successfully Updated",
      "data": {} // details of the updated supply
  }
  ```

- 500 Internal Server Error:

  ```
  {
      "status": false,
      "msg": "Internal error occurs!"
  }
  ```

#### 4. Delete Supply

**Title:** Delete Supply
**Endpoint:** `DELETE /supplies/:id`
**Request Body:** None
**Response:**

- 200 OK:

  ```
  {
      "status": true,
      "msg": "Successfully Deleted",
      "data": {} // details of the deleted supply
  }
  ```

- 500 Internal Server Error:

  ```
  {
      "status": false,
      "msg": "Internal error occurs!"
  }
  ```

### Vendor Payments API

#### 1. Get One Payment

**Title:** Get One Payment
**Endpoint:** `GET /payments/:id`
**Request Body:** None
**Response:**

- 200 OK:

  ```
  {
      "status": true,
      "msg": "Successfully Retrieved",
      "data": {
          // vendor payment details
      }
  }
  ```

- 500 Internal Server Error:

  ```
  {
      "status": false,
      "msg": "Internal error occurs!"
  }
  ```

#### 2. Get All Payments by Supply ID

**Title:** Get All Payments by Supply ID
**Endpoint:** `GET /payments/supply/:id`
**Request Body:** None
**Response:**

- 200 OK:

  ```
  {
      "status": true,
      "msg": "Successfully data Retrieved",
      "data": [
          // list of payments
      ]
  }
  ```

- 500 Internal Server Error:

  ```
  {
      "status": false,
      "msg": "Internal error occurs!"
  }
  ```

#### 3. Add Payment

**Title:** Add Payment
**Endpoint:** `POST /payments`
**Request Body:**

```
{
    "vendor_supply_id": 1,
    "title": "Payment Title",
    "amount": 500.0,
    "dateofpay": "2023-01-01",
    "modeofpay": "Cash"
}
```

**Response:**

- 200 OK:

  ```
  {
      "status": true,
      "msg": "Successfully Created",
      "data": 1 // ID of the newly created payment
  }
  ```

- 500 Internal Server Error:

  ```
  {
      "status": false,
      "msg": "Internal error occurs!"
  }
  ```

#### 4. Update Payment

**Title:** Update Payment
**Endpoint:** `PUT /payments/:id`
**Request Body:**

```
{
    "title": "Updated Payment Title",
    "amount": 600.0,
    "dateofpay": "2023-02-01",
    "modeofpay": "Credit Card"
}
```

**Response:**

- 200 OK:

  ```
  {
      "status": true,
      "msg": "Successfully Updated",
      "data": {} // details of the updated payment
  }
  ```

- 500 Internal Server Error:

  ```
  {
      "status": false,
      "msg": "Internal error occurs!"
  }
  ```

#### 5. Delete Payment

**Title:** Delete Payment
**Endpoint:** `DELETE /payments/:id`
**Request Body:** None
**Response:**

- 200 OK:

  ```
  {
      "status": true,
      "msg": "Successfully Deleted",
      "data": {} // details of the deleted payment
  }
  ```

- 500 Internal Server Error:

  ```
  {
      "status": false,
      "msg": "Internal error occurs!"
  }
  ```
