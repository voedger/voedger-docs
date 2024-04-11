# Applications

- **Voedger Application**: A runtime instance of the software defined by the **Application Image**. Application is partitioned into one or many **Application Partitions**.
- **Application Image**: A ZIP archive containing several *.vsql files that describe the application's data schema (using VSQL language), along with WASM modules.
- **Application Sources**: The original files and resources used to build the Application Image.
- **vpm**: The Voedger Package Manager, a command-line interface (CLI) tool designed to build Application Images from Application Sources.

## Voedger Application lifecycle
```mermaid
    graph

    %% Entities ====================

    Sources:::G
    subgraph Sources["Application Sources"]
    VSQLfiles["*.vsql files"]:::H
    Gofiles["*.go files"]:::H
    end

    Image:::G
    subgraph Image["Application Image (a zip archive)"]
        VSQLfiles2["*.vsql files"]:::H
        WASMFIle["*.wasm files"]:::H
    end

    Cluster:::G
    subgraph Cluster["Voedger Cluster"]
        voedger:::S
        Application:::S    
        AppPartition["Application Partition"]:::S
    end

    vpm["$ vpm build"]:::S
    vpmdeploy["$ vpm deploy"]:::S

    %% Relations ====================

    Sources -.-> vpm
    vpm -.-> Image
    Image -.-> vpmdeploy
    vpmdeploy -.-> voedger

    voedger --x |runs zero or many| Application
    Application --x |has one or many| AppPartition

    classDef B fill:#FFFFB5,color:#333
    classDef S fill:#B5FFFF,color:#333
    classDef H fill:#C9E7B7,color:#333
    classDef G fill:#ffffff15, stroke:#999, stroke-width:2px, stroke-dasharray: 5 5
```