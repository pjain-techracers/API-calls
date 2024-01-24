
# Database Architecture

Here Tree is an hierarchical structure which represent different nodes with label and children, this is possible with different databases, choosing a database depends on various factors like
- complexity of your tree structure
- scalability
- number of read and write operation to be performed
- handle real-time data updates 
- and the overall architecture of your application

We can use MongoDB or Firebase like (for real-time updates) or SQL depending on the requirement.

## Mongo DB schema
NoSQL databases, especially document-based like MongoDB, can be suitable for storing tree. We can make nested document and each document can represent a node in the tree to represent parent-child relationships.

Additionlly, this is unstructure data so NoSQL will be good choice since it has the flexibity to handle any structure.
```bash
const tree = new Schema({
  id: String,
  label: String,
  children: [
    {
      ref: 'tree' // Recursive reference to the same schema
    }
  ] 
})
```

## SQL
Here tree structure is simple, therefore we can choose SQL also where tree table have - id, label, and parent_id columns. The parent_id column establishes parent-child relationship. SQL schema -

```
CREATE TABLE Tree (
  id INTEGER PRIMARY KEY,
  label TEXT,
  parent_id INTEGER,
  FOREIGN KEY (parent_id) REFERENCES Tree (id)
);
```

Each type of database has its strengths, and the best choice depends on the requirements of the application and system architecture.


## Sample CURL for the this application routes
1. GET THE TREE - 
`curl --location 'http://localhost:3001/api/tree'`

2. ADD A NEW CHILD TO PARENT - 
```
curl --location 'http://localhost:3001/api/tree' \
--header 'Content-Type: application/json' \
--data '{
    "parent": "3",
    "label": "fox"
}'
```
