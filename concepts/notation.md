# Notation

Notation is based on:
- [ArchiMate](https://en.wikipedia.org/wiki/ArchiMate) (/ˈɑːrkɪmeɪt/ AR-ki-mayt; originally from Architecture-Animate), open and independent enterprise architecture modeling language
  - Brief description: [ArchiMate Metamodel For Enterprise Development](https://www.hosiaisluoma.fi/blog/archimate-metamodel/)
- [Entity–relationship model](https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model), describes interrelated things of interest in a specific domain of knowledge


```mermaid
graph TD

  %% Entities =================================

  Event>Event]:::B
  Cluster[[Cluster]]:::H
  Device[/Device\]:::H  
  Infrastructure{{Node}}:::H
  Database[(Database)]:::H
  Table["[] Table"]:::H
  Field([Field]):::H
  Data[Data Object]:::H
  DataField1([Field1]):::H
  DataField2([Field2]):::H
  AbstractEntity[Abstract entity]:::G

  Guide[? Guide]:::S

  ProductLine[["= Product line"]]:::S
    ProductLine --- Product1[= Product 1]:::S
    ProductLine --- Product2[= Product 2]:::S

  SoftwareComponents:::G
  subgraph SoftwareComponents[Group of elements]
    SoftwareComponent["# Software component 1"]:::S
    SoftwareFunction("> Software function"):::S
    SoftwareComponent2["# Software component 2"]:::S
  end
  
  SoftwareService([Software service]):::S  
  
  User["@ Human actor (e.g. User)"]:::B
  Company["$ Non-human actor (e.g. Company)"]:::B
  BusinessProcess("> Business process"):::B


  %% Relations =================================

  Infrastructure ---|runs| SoftwareComponents

  SoftwareComponent --- |has| SoftwareFunction
  SoftwareFunction --- |provides| SoftwareService

  Infrastructure --x Database
  Database ---x|has few| Table
  Table ---x|has few| Field

  SoftwareService -.->|generates| Data

  SoftwareService --- |used by| BusinessProcess
  BusinessProcess --- |assigned to| User

  User --- |uses| Guide

  Data -.->|used by| SoftwareComponent2

  Data --- DataField1
  Data --- DataField2
  
  Product2 --- |used by| Company
  Company --- |has| BusinessProcess

  classDef B fill:#FFFFB5,color:#333
  classDef S fill:#B5FFFF,color:#333
  classDef H fill:#C9E7B7,color:#333
  classDef G fill:#ffffff15, stroke:#999, stroke-width:2px, stroke-dasharray: 5 5
```

## See also

- [notation-experiments.md](notation-experiments.md)