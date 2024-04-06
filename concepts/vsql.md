# VSQL

Voedger SQL (VSQL) is based on the traditional SQL (Structured Query Language) and used to interact with the Voedger database.  Main differences between VSQL and SQL:

- **Alterability**: VSQL eliminates the need for the ALTER statement, streamlining schema modifications with automatic, zero downtime updates. 
- **Nullability**: VSQL tables do not support NULL values, simplifying data handling by avoiding NULL-related operations. 
- **Simplified referencing**
- **Table inheritance**
- **Workspace** concept
- **Nested Table** concept
- **Singletone** concept
- **Projector** concept
- **Abstract Table** concept
- **Extension Engine** concept
- New data types: `Any`, `raw`

## Alterability

VSQL does not use the `ALTER` statement and the `CREATE` word. Instead, schema updates are made directly to the `TABLE` description. During deployment new schemas applied automatically and seamlessly, with zero downtime. Consider an example of schema evolution.

MyTable, version 1:
```sql
TABLE MyTable (
    Field1 int,
    Field2 int,
    Field3 int
);
```

Updated to version 2 by adding Field4:
```sql
TABLE MyTable (
    Field1 int,
    Field2 int,
    Field3 int,
    Field4 int -- Added Field4
);
```

Only changes that maintain backward compatibility are permitted. For example, you can't change the type of the existing field, remove a field, or change the order of the fields. Compatibility can be checked with the `$ vpm compat` command.

## Nullability

In VSQL, table fields cannot be NULL, eliminating the need for `IS NULL`, `COALESCE()`, and other NULL-related functions. Think of tables as C-structures whose fields have basic types.

However, fields can have the `NOT NULL` attribute, which means that you need to specify a value for this field when **inserting** a new record. 

Please note:

- Voedger does NOT enforce the `NOT NULL` attribute when **updating** records (and, of course, you can not supply the NULL values).
- Adding a new field with the `NOT NULL` attribute to an existing table means querying this field in existing records will return a default value: `0` for integer fields, `""` (empty string) for string fields, `false` for boolean fields, etc.