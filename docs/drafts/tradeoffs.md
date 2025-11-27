# Key architectural and design decisions

Here you will find a description and discussion of the key architectural and design decisions that have been made in the development of the project, their pros and cons, and the rationale behind them. This is a living document that will be updated as the project evolves.

## Decisions

In short: Voeger sacrifices availability in favor of consistency and performance, few minutes downtime can occur under some circumstances.

| Decision | Description | Advantages | Tradeoffs | Can be improved? |
| ----------- | ----------- | ----------- | ----------- | ---- |
| "Sticky Sessions" + Naive Application Partitions Orchestration| Requests from the same client are processed by the same node | Simplicity, Performance, Isolation| If the node fails some Application Partitions has to be restarted on other nodes, causing a few minutes downtime|Yes, we believe that downtime can be reduced up to a few seconds, design is similar to [ksqldb, High availability](https://docs.ksqldb.io/en/latest/operate-and-deploy/high-availability-pull-queries/)|
| Naive Voedger engine update | Voedger engine update leads to a few minutes downtime, similar to node restart | Simplicity | Few minutes downtime | Yes, up to a few seconds downtime |
| Naive BLOB storage | Voedger keeps BLOB data in a database | Simplicity | Can be expensive | Yes, will be possible to use S3 storage or similar.|
| High granularity WASM-Host protocol | WASM module has to call Host for every field of a record it is interested in | Simplicity | Reduced performance due to multiple host calls | Yes, a low-granularity protocol can be developed|


## Naive Application Partition orchestration

**Architectural/design decisions:**
- The application is divided into partitions.
- Each application partition is executed on a separate node.
- If a node goes down, all partitions have to be restarted on other nodes.

**Problem:**
- If a node goes down, it causes a few minutes downtime visible to some clients.

**Can be improved:**
- Yes, downtime can be reduced to a few seconds.

## High granularity WASM-Host protocol

**Architectural/design decisions:**
- Extensions are executed as WASM modules.
- If an extension needs to read 5 fields of some record, it has to make 6 calls to the host system: one to read the record and 5 to read the fields.
- Extension execution time is controlled by the host system (anti-freeze), which increases the host-WASM-host latency.

**Problem:**
- Each call takes 300 ns, so 3000 calls will take around 1 ms.
- ??? Proofs

**Can be improved:**
- Yes, there are few approaches
  - By not using the anti-freeze option, in which case each call takes ~10 ns.
  - By developing a low-granularity protocol
- ??? Proofs
