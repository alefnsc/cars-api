## 1. Introduction

Welcome to the documentation for the Car Brands & Models API project. This project aims to provide a RESTful API for retrieve models data. It involves manipulating JSON files containing cars, models, and enforcing business rules to ensure smooth order processing.

## 2. Installation

To install and set up the project locally, follow these steps:

1. Clone the project repository from GitHub:

```bash
git clone https://github.com/alefnsc/cars-api.git
```

2. Navigate to the project directory:

```bash
cd cars-api
```

3. Install project dependencies using npm:

```bash
npm install
```

## 3. Routes

Endpoints Documentation

### GET `/maisModelos`

**Description**: Fetches brands with the most models from the dataset.

**Response**:
- **200 OK**: Returns an array of brands with the most models.
- **400 Bad Request**: Error message if there's an issue reading the file or parsing the data.

### GET `/menosModelos`

**Description**: Fetches brands with the fewest models from the dataset.

**Response**:
- **200 OK**: Returns an array of brands with the fewest models.
- **400 Bad Request**: Error message if there's an issue reading the file or parsing the data.

### GET `/listaMaisModelos/:x`

**Description**: Fetches a list of brands sorted by the number of models in descending order, limited to the top 'x' entries.

**Parameters**:
- `x` (path parameter): Specifies the number of top entries to return.

**Response**:
- **200 OK**: Returns an array of strings, each representing a brand followed by its model count, e.g., `["BrandA - 30", "BrandB - 25"]`.
- **400 Bad Request**: Error message if there's an issue with the file reading, parsing, or if 'x' is not a valid number.

### GET `/listaMenosModelos/:x`

**Description**: Fetches a list of brands sorted by the number of models in ascending order, limited to the top 'x' entries.

**Parameters**:
- `x` (path parameter): Specifies the number of top entries to return.

**Response**:
- **200 OK**: Returns an array of strings, each representing a brand followed by its model count, e.g., `["BrandA - 5", "BrandB - 8"]`.
- **400 Bad Request**: Error message if there's an issue with the file reading, parsing, or if 'x' is not a valid number.

### POST `/listaModelos/`

**Description**: Searches for models by a given brand name provided in the request body.

**Request Body**:
- `nomeMarca` (string): The brand name to search for.

**Response**:
- **200 OK**: Returns an array of models for the specified brand.
- **400 Bad Request**: Error message if the `nomeMarca` field is missing in the request body or if there's an issue with the file reading or parsing.

## 4. Contact

- **Maintainer:** Alexandre Fonseca
- **Email:** alexandrefonsecach@gmail.com
