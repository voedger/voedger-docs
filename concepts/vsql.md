# VSQL DDL

VSQL is an extended version of a PosgressSQL dialect, the key differences, in connection to the DDL part of the SQL:

- **No ALTER statement**. VSQL does not have an ALTER statement. Just change your existing TABLE description, new schemas will be used automatically with zero downtime.
- **No CREATE word**. Since there is no ALTER statement, CREATE word is not needed, just use `TABLE ...` instead of `CREATE TABLE ...`.
- **No NULL values**. If the value for a field has not been supplied, default value (normally "zero value") will always be returned. Forget about `IS NULL`, `COALESCE()` and others NULL-related things.
- **IS NULL**. Still DDL syntax has `IS NOT NULL` as a part of the fields description, to force users to provide values for such fields.