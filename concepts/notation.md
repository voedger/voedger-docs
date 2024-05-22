# Notation

Notation is based on:
- [ArchiMate](https://en.wikipedia.org/wiki/ArchiMate) (/ˈɑːrkɪmeɪt/ AR-ki-mayt; originally from Architecture-Animate), open and independent enterprise architecture modeling language
  - Brief description: [ArchiMate Metamodel For Enterprise Development](https://www.hosiaisluoma.fi/blog/archimate-metamodel/)
- [Entity–relationship model](https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model), describes interrelated things of interest in a specific domain of knowledge
- [C4 model](https://c4model.com/) for visualising software architecture

## C1: Context
Describes the context of the system: cluster, products, services, roles

```mermaid
graph TD

  %% Entities =================================

  Cluster[[Cluster]]:::H
  SoftwareService([Software service]):::S  

  ProductLine[[Product line]]:::S
    ProductLine --- Product1[Product 1]:::S
    ProductLine --- Product2[Product 2]:::S
    ProductLine --- Guide[Guide 1]:::S
   
  User["@ Human actor (e.g. User)"]:::B
  Company[["Non-human actor (e.g. Company)"]]:::B
  BusinessProcess("> Business process"):::B

  %% Relations =================================
  Cluster --- |hosts| ProductLine
  BusinessProcess -.- |assigned to| User
  Product1 -.-> |provides|SoftwareService
  Product2 -.- |used by| Company
  Company --- |has| BusinessProcess
  classDef B fill:#FFFFB5,color:#333
  classDef S fill:#B5FFFF,color:#333
  classDef H fill:#C9E7B7,color:#333
  classDef G fill:#ffffff15, stroke:#999, stroke-width:2px, stroke-dasharray: 5 5
```


## C2: Containers
### Infrastructure: nodes, databases, devices, software services and components
```mermaid
graph TD
  %% Entities =================================
  User["@ Human actor (e.g. User)"]:::B
  Cluster[[Cluster]]:::H
  Device[/Device\]:::H  
  Infrastructure1{{Node Type 1}}:::H
  Infrastructure2{{Node Type 2}}:::H
  Database[(Database)]:::H  
  Product1[Product 1]:::S
  SoftwareComponent1["# Software component 1"]:::S
  SoftwareComponent2["# Software component 2"]:::S
  
  %% Relations =================================

  Product1 --> |hosted by| Cluster
  Cluster --x |contains few| Infrastructure1
  Cluster --x |contains one| Infrastructure2
  
  Infrastructure1 --x Database
  Infrastructure1 --> |runs| SoftwareComponent1
  Infrastructure2 --> |runs| SoftwareComponent2
  SoftwareComponent1 ---|provides| SoftwareService1([Software Service 1]):::S
  SoftwareComponent2 ---|provides| SoftwareService2([Software Service 2]):::S
  SoftwareComponent2 -.->|uses| SoftwareService1

  SoftwareService2 -.-|used from|Device
  Device -.- |used by| User
  
    
  classDef B fill:#FFFFB5,color:#333
  classDef S fill:#B5FFFF,color:#333
  classDef H fill:#C9E7B7,color:#333
  classDef G fill:#ffffff15, stroke:#999, stroke-width:2px, stroke-dasharray: 5 5
```

### Application: Workspaces, actors
```mermaid
graph TD

  %% Entities =================================

  Event1>Event1]:::B
  Event2>Event2]:::B
  
  Workspace1[(Workspace 1)]:::H
  Workspace2[(Workspace 2)]:::H

  Product1[Product 1]:::S
  ExternalProduct1[External Product 1]:::S

  DevOps["@ DevOps"]:::B
  Admin["@ Admin"]:::B
  User["@ User"]:::B

  %% Relations =================================

  DevOps -.- |maintains| Workspace1
  Product1 --> |has| Workspace1
  Workspace1 --x |has children, one per location| Workspace2
  Workspace2 -.-> |communicates with| ExternalProduct1

  Event1 -.- |received by| Admin
  Admin -.-> |creates new locations in| Workspace1

  User -.-> |works in| Workspace2

  ExternalProduct1 -.-> |triggers| Event2
  Event2 -.-> |handled by webhook in| Workspace2


  classDef B fill:#FFFFB5,color:#333
  classDef S fill:#B5FFFF,color:#333
  classDef H fill:#C9E7B7,color:#333
  classDef G fill:#ffffff15, stroke:#999, stroke-width:2px, stroke-dasharray: 5 5
```



## C3: Components
- Workspace components: views, projectors, tables, etc


```mermaid
graph TD

%% Entities =================================
 
Role1["@ Role1"]:::B
Role2["@ Role2"]:::B

SoftwareComponents:::G
Workspace2[(Workspace 2)]:::H 
subgraph SoftwareComponents[Workspace1]
  Command1("> Command1"):::S
  Command2("> Command2"):::S
  Query1("< Query1"):::S
  Projector1[/Projector1/]:::S
  Projector2[/Projector2/]:::S
  View1[["View1"]]:::H
  Table1["cdoc.Table1"]:::H
  Table2["extpkg.cdoc.Table1"]:::H
  ViewField1([Field1]):::H
  ViewField2([Field2]):::H
  sys.CreateChildWorkspace("> sys.CreateChildWorkspace"):::S
end  

%% Relations =================================

Role1 -.-> |calls| Command1
Role1 -.-> |calls| Query1
Command1 -.-> |ON INSERT| Projector1
Command1 -.-> |creates| Table1
Projector1 -.-> |maintains|View1
Query1 -.-> |reads from|View1
View1 -.-> |contains| ViewField1
View1 -.-> |contains| ViewField2

Role2 -.-> |calls| Command2
Command2 -.-> |ON INSERT| Projector2
Projector2 -.-> |executes|sys.CreateChildWorkspace
Command2 -.-> |creates| Table2

sys.CreateChildWorkspace -..-> |creates| Workspace2

classDef B fill:#FFFFB5,color:#333
classDef S fill:#B5FFFF,color:#333
classDef H fill:#C9E7B7,color:#333
classDef G fill:#ffffff15, stroke:#999, stroke-width:2px, stroke-dasharray: 5 5
```

## See also

- [notation-experiments.md](notation-experiments.md)