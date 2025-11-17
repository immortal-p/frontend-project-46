# Frontend Project 46 — Difference Calculator (Diff Utility)

### Hexlet Tests and Linter Status

[![Actions Status](https://github.com/immortal-p/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/immortal-p/frontend-project-46/actions)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=immortal-p_frontend-project-46&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=immortal-p_frontend-project-46)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=immortal-p_frontend-project-46&metric=coverage)](https://sonarcloud.io/summary/new_code?id=immortal-p_frontend-project-46)

---

## Overview

**Difference Calculator** is a command-line tool that compares two configuration files and shows the difference. It supports multiple input formats and several output styles, making it useful for DevOps, development, and configuration management.

---

## Features

* Compare two files and output their differences
* Support for formats:

  * **JSON**
  * **YAML / YML**
* Multiple output formats:

  * **stylish** (default)
  * **plain**
  * **json**
* Recursive comparison of nested structures
* Clear and human-readable diff output

---

## Requirements

Before installation, make sure you have:

* Node.js (v16+ recommended)
* npm or yarn

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/immortal-p/frontend-project-46.git
cd frontend-project-46
```

2. Install dependencies:

```bash
npm install
```

3. Link the package globally:

```bash
npm link
```

This will install the `gendiff` command globally on your machine.

---

## Usage

### Basic command

```bash
gendiff file1.json file2.json
```

### Compare YAML files

```bash
gendiff config1.yml config2.yml
```

### Choose an output format

Stylish (default):

```bash
gendiff file1.json file2.json
```

Plain format:

```bash
gendiff --format plain file1.json file2.json
```

JSON format:

```bash
gendiff --format json file1.json file2.json
```

---

## Output Examples

### Stylish format

```
{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  + timeout: 20
  + verbose: true
}
```

### Plain format

```
Property 'timeout' was updated. From 50 to 20
Property 'verbose' was added with value: true
Property 'proxy' was removed
```

### JSON format

```json
{
  "key": "value",
  "changes": []
}
```

---

## Testing & Linting

Run tests:

```bash
npm test
```

Run linter:

```bash
npm run lint
```

---

## Tech Stack

* Node.js
* Commander.js (CLI)
* Lodash
* Jest
* YAML parser

---

## Project Structure

```
frontend-project-46/
├── bin/
│   └── index.js
├── src/
│   ├── parsers.js
│   ├── formatters/
│   ├── genDiff-core.js
│   ├── genDiff.js
│   ├── program.js
│   └── index.js
├── __tests__/
├── package.json
└── README.md
```

---

## 🎥 Asciinema Demonstrations

### Basic Usage

[![asciicast](https://asciinema.org/a/rPJAKzGuHHYNXY2ogbQiGiPGd.svg)](https://asciinema.org/a/rPJAKzGuHHYNXY2ogbQiGiPGd)

### Two flat yaml-files comparsion

[![asciicast](https://asciinema.org/a/WULQOYkHxTC5ZGxaJCIJhunrP.svg)](https://asciinema.org/a/WULQOYkHxTC5ZGxaJCIJhunrP)

### Stylish Format

[![asciicast](https://asciinema.org/a/sBqCSYmM5S5qqYZW45g7Mmn1t.svg)](https://asciinema.org/a/sBqCSYmM5S5qqYZW45g7Mmn1t)

### Plain Format

[![asciicast](https://asciinema.org/a/4FPwLNne2zkj05dfWrja80MYL.svg)](https://asciinema.org/a/4FPwLNne2zkj05dfWrja80MYL)

### JSON Format

[![asciicast](https://asciinema.org/a/ZBQMH40CGR3cAikOWSkkCb2Xk.svg)](https://asciinema.org/a/ZBQMH40CGR3cAikOWSkkCb2Xk)