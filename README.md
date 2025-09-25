# Wiki

## Development notes: IN PROGRESS

### Back-end

#### Controllers

- Naming conventions
  - Use HTTP verbs
    - Get, Post, Put, Patch, Delete
  - [action] single entry
    - `actionEntryById`
  - [action] all entries
    - `actionAllEntries`

#### Services

- Naming conventions
  - Use Domain based verbs
    - Find, Create, Update, Delete
  - [action] single entry
    - `actionEntryById`
  - [action] all entries
    - `actionAllEntries`

#### External Services

- Use `fetch` as a verb

#### TODO

- Make sure there is consistency in:
  - Logging
  - Error handling
  - Controller, Service, Routes, and Model naming conventions. Maybe implement some AST?
