# Motivation

Voedger was initially designed by unTill Software Development Group B.V. ([unTill](https://untill.com/)) in the early 2020s. At that time, unTill was providing a mature "desktop" POS solution (unTill Prime) for the European market and was seeking to develop a cloud version and expand into other markets.

Technical characteristics of unTill Prime:

- Over 1 million lines of code (including the "frontend")
- RDBMS: Firebird
- Database schema: more than 400 tables

unTill company management came up with the following initial requirements.

| Requirement name | Description |
| ---------------- | ----------- |
| Distributed Data | It shall be possible to create **clusters** to keep POS data and configuration all over the world. |
| Federation       | Users shall have the ability to store their data across multiple clusters, for example, to manage several restaurants located in different parts of Europe.|
| Fault Tolerance  | If a node or a cluster fails, data shall NOT be lost. |
| High Availability | If a node or a datacenter fails, clients shall experience downtime of less than 5 minutes. Downtime per month: 22 minutes, 99.95% ("three nines five").|
| Event Sourcing   | System shall be built around the "journal". All changes to the application state shall be stored as a sequence of events. |
| Consistency      | Strict Consistency for commands, Eventual Consistency for queries|
| Scalability      | It shall be possible to scale the system by adding nodes to existing clusters and creating new clusters|
| Edge Computing   | The system **will** be installable at the "edge" (e.g., in a restaurant) and able to synchronize with the cloud. |
| Performance      | Each cluster shall support 10,000 restaurants (230 operations per second, see below). |
| Zero Downtime Deployment | It shall be possible to update the application without downtime. |

Analyzing the requirements, we identified the Modern Tech Stack:

![Modern Tech Stack](stack.png)

We could have built our system using components from this stack. It would take man-years to develop - we agreed to invest these resources, as did our colleagues from other POS providers. However, during the analysis and research process, we got the idea that we could create a "generic engine" that meets the requirements above. This engine would not only enable us to build our POS system but also allow us to bring a new product to the market. This product would enable the development of systems with similar requirements in a significantly shorter time, potentially up to 10 times faster than using just the Modern Tech Stack.

We shared this idea with colleagues from other companies, and they agreed to invest in the development of this engine.

This is how Voedger was born.

As we wanted to go public with Voedger, we needed to add some extra requirements.

| Requirement name  | Description |
| ----------------- | ----------- |
| Simple Coding     | It shall be extremely easy to develop Voedger applications. |
| Simple Testing    | It shall be extremely easy to test Voedger applications. |
| Cloud Agnostic    | It shall be possible to run Voedger everywhere, including on your own infrastructure. |
| Simple Configuration | It shall be easy to build and operate clusters.|
