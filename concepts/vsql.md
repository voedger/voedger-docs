# VSQL

Voedger SQL (VSQL) is based on the SQL (Structured Query Language) and used to interact with Voedger database.  Main differences between VSQL and SQL:

- Alterability
- Nullability
- Simplified referencing
- Table inheritance
- **Workspace** concept
- **Nested Table** concept
- **Singletone** concept
- **Projector** concept
- **Abstract Table** concept
- **Extension Engine** concept
- New data types: `Any`, `raw`

## Alterability

There is no ALTER statement in VSQL and, therefore, there is no need to use `CREATE` word. Just change your existing TABLE description, new schemas will be used automatically with zero downtime.

MyTable, version 1:
```sql
TABLE MyTable (
    Field1 int,
    Field2 int,
    Field3 int
);
```

MyTable, version 1:
```sql
TABLE MyTable (
    Field1 int,
    Field2 int,
    Field3 int,
    Field4 int -- Field4 field added    
);
```

Only compatible changes are allowed. For example, you can't change the type of the existing field, remove a field, or change the order of the fields. Compatibility can be checked by the using `compat` command of the `vpm` tool.


## Nullability

Fields of the Voedger tables might not have NULL values. Forget about `IS NULL`, `COALESCE()` and others NULL-related things. Think about tables as about Go structures where fields have basic types:

```sql
type MyTable struct {
	Field1 int
	Field2 int
	Field3 int
}
```

Stil fields can have `NOT NULL` attribute which means that the value for this field must be provided.