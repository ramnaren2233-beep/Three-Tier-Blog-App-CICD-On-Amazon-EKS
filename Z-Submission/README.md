# Project-04: Production-Level Three-Tier Blog Application CI/CD on Amazon EKS

## 1. Project Overview

A production-oriented Three-Tier Blog Application deployed on Amazon EKS using Jenkins CI/CD, Docker, SonarQube, Trivy, Nexus/ECR, Kubernetes, Prometheus and Grafana.

| **Field**                | **Details**                                                                                                 |
|--------------------------|-------------------------------------------------------------------------------------------------------------|
| Project Name             | Three-Tier Blog Application CI/CD on Amazon EKS                                                             |
| Tools Used               | AWS, Amazon EKS, Docker, Kubernetes, Jenkins, SonarQube, Trivy, Nexus/ECR, Prometheus, Grafana              |
| Application Architecture | Frontend → Backend API → MySQL Database                                                                     |
| CI/CD Pipeline           | GitHub → Jenkins → Build & Test → SonarQube → Docker → Trivy → Nexus/ECR → EKS                              |
| GitHub Repository        | [Open Project Repository](https://github.com/ramnaren2233-beep/Three-Tier-Blog-App-CICD-On-Amazon-EKS)      |
| Application URL          | [Open Blog Application](http://a61a39df109894f3798c66e3ec4fda31-817282873.us-east-1.elb.amazonaws.com/)     |
| Final Submission         | Task Documentation, Screenshots and Execution Evidence                                                      |

> **Note:** The application URL may become unavailable after AWS resources are deleted.

---

## 2. Project Tree Flow (Task 01–14)

```text
📦 Three-Tier-Blog-App-CICD-On-Amazon-EKS
│
├── 📄 README.md
│
├── 🏗️ PHASE 1: Application & Containerization
│   ├── 📂 Task-01 - Application
│   ├── 📂 Task-02 - Docker
│   ├── 📂 Task-03 - Database
│   └── 📂 Task-04 - Nexus / ECR Repository
│
├── 🔍 PHASE 2: Code Quality & Security
│   ├── 📂 Task-05 - SonarQube
│   └── 📂 Task-06 - Trivy Security Scanning
│
├── ☸️ PHASE 3: Kubernetes & Deployment
│   ├── 📂 Task-07 - Amazon EKS
│   ├── 📂 Task-08 - Kubernetes Deployment
│   ├── 📂 Task-09 - Configuration & Secrets
│   └── 📂 Task-10 - Jenkins CI/CD Pipeline
│
├── 🚀 PHASE 4: Operations & Reliability
│   ├── 📂 Task-11 - Rolling Deployment
│   ├── 📂 Task-12 - Prometheus & Grafana
│   └── 📂 Task-13 - Logging
│
└── 🔐 PHASE 5: Security & Final Submission
    └── 📂 Task-14 - Security
```

---

## 3. Task Documentation, Screenshots & Evidence

| S.No | Task Topic             | README Link                           | Documentation Link                   | Screenshot Link                               |
|-----:|------------------------|---------------------------------------|--------------------------------------|-----------------------------------------------|
|   01 | Application            | [Task 01 README](./Task-01/README.md) | [Task 01 Docs](./Task-01/Documents/) | [Task 01 Screenshots](./Task-01/Screenshots/) |
|   02 | Docker                 | [Task 02 README](./Task-02/README.md) | [Task 02 Docs](./Task-02/Documents/) | [Task 02 Screenshots](./Task-02/Screenshots/) |
|   03 | Database               | [Task 03 README](./Task-03/README.md) | [Task 03 Docs](./Task-03/Documents/) | [Task 03 Screenshots](./Task-03/Screenshots/) |
|   04 | Nexus / ECR Repository | [Task 04 README](./Task-04/README.md) | [Task 04 Docs](./Task-04/Documents/) | [Task 04 Screenshots](./Task-04/Screenshots/) |
|   05 | SonarQube              | [Task 05 README](./Task-05/README.md) | [Task 05 Docs](./Task-05/Documents/) | [Task 05 Screenshots](./Task-05/Screenshots/) |
|   06 | Trivy Security Scan    | [Task 06 README](./Task-06/README.md) | [Task 06 Docs](./Task-06/Documents/) | [Task 06 Screenshots](./Task-06/Screenshots/) |
|   07 | Amazon EKS             | [Task 07 README](./Task-07/README.md) | [Task 07 Docs](./Task-07/Documents/) | [Task 07 Screenshots](./Task-07/Screenshots/) |
|   08 | Kubernetes Deployment  | [Task 08 README](./Task-08/README.md) | [Task 08 Docs](./Task-08/Documents/) | [Task 08 Screenshots](./Task-08/Screenshots/) |
|   09 | Configuration & Secrets| [Task 09 README](./Task-09/README.md) | [Task 09 Docs](./Task-09/Documents/) | [Task 09 Screenshots](./Task-09/Screenshots/) |
|   10 | Jenkins CI/CD Pipeline | [Task 10 README](./Task-10/README.md) | [Task 10 Docs](./Task-10/Documents/) | [Task 10 Screenshots](./Task-10/Screenshots/) |
|   11 | Rolling Deployment     | [Task 11 README](./Task-11/README.md) | [Task 11 Docs](./Task-11/Documents/) | [Task 11 Screenshots](./Task-11/Screenshots/) |
|   12 | Prometheus & Grafana   | [Task 12 README](./Task-12/README.md) | [Task 12 Docs](./Task-12/Documents/) | [Task 12 Screenshots](./Task-12/Screenshots/) |
|   13 | Logging                | [Task 13 README](./Task-13/README.md) | [Task 13 Docs](./Task-13/Documents/) | [Task 13 Screenshots](./Task-13/Screenshots/) |
|   14 | Security               | [Task 14 README](./Task-14/README.md) | [Task 14 Docs](./Task-14/Documents/) | [Task 14 Screenshots](./Task-14/Screenshots/) |

---

## 4. CI/CD Pipeline Flow

```text
Developer Pushes Code to GitHub
             │
             ▼
       Jenkins Pipeline
             │
             ▼
        Build & Test
             │
             ▼
       SonarQube Analysis
             │
             ▼
          Quality Gate
             │
             ▼
         Docker Build
             │
             ▼
          Trivy Scan
             │
             ▼
      Nexus Repository / ECR
             │
             ▼
       Amazon EKS Deployment
             │
             ▼
     Deployment Validation
             │
             ▼
     Prometheus & Grafana
```

---

## 5. Application URL

| **Item**           | **Link / Details**                                                                                      |
|--------------------|---------------------------------------------------------------------------------------------------------|
| Live Application   | [Open Blog Application](http://a61a39df109894f3798c66e3ec4fda31-817282873.us-east-1.elb.amazonaws.com/) |
| Project Repository | [Open GitHub Repository](https://github.com/ramnaren2233-beep/Three-Tier-Blog-App-CICD-On-Amazon-EKS)  |

> The live endpoint depends on the AWS infrastructure remaining active. Keep screenshots of the application from the time it was running.

---

## 6. Final Submission Checklist

| S.No | Requirement             | Evidence                                           |
|-----:|-------------------------|----------------------------------------------------|
|   01 | Application Frontend    | Application screenshot                             |
|   02 | Docker Images           | Build and container evidence                       |
|   03 | Database                | Connectivity and persistence evidence              |
|   04 | Nexus / ECR             | Versioned image evidence                           |
|   05 | SonarQube               | Analysis and Quality Gate evidence                 |
|   06 | Trivy                   | Vulnerability scan results                         |
|   07 | Amazon EKS              | Kubernetes deployment evidence                     |
|   08 | Kubernetes Deployment   | Replicas and health probes                         |
|   09 | Configuration & Secrets | ConfigMap and Secret evidence                      |
|   10 | Jenkins CI/CD           | Pipeline execution evidence                        |
|   11 | Rolling Deployment      | Deployment rollout evidence                        |
|   12 | Monitoring              | Prometheus and Grafana evidence                    |
|   13 | Logging                 | Application and workload logs                      |
|   14 | Security                | IAM, RBAC, network and container security evidence |

**Project:** Three-Tier Blog Application CI/CD Deployment on Amazon EKS
