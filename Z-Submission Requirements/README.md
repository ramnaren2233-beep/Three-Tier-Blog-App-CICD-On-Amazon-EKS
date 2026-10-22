# Project-04: Production-Level Three-Tier Blog Application CI/CD on Amazon EKS

## 🌳 Project Tree Flow Structure

```text
Project-04: Three-Tier Blog Application on Amazon EKS
│
├── 📄 README.md (Main Project Documentation)
│   │
│   ├── 📌 Project Overview
│   ├── 🏗️ Application Architecture
│   │   └── Frontend → Backend API → Database
│   │
│   ├── 🔄 CI/CD Pipeline Flow
│   │   └── GitHub → Jenkins → SonarQube → Build & Test
│   │       → Docker → Trivy → Nexus / ECR → Amazon EKS
│   │       → Deployment Validation → Monitoring
│   │
│   ├── 📚 Task Documentation (01–14)
│   │   │
│   │   ├── Task 01 - Application
│   │   │   ├── [README](./Task-01/README.md)
│   │   │   ├── [Documentation](./Task-01/Documents/)
│   │   │   └── [Screenshots](./Task-01/Screenshots/)
│   │   │
│   │   ├── Task 02 - Docker
│   │   │   ├── [README](./Task-02/README.md)
│   │   │   ├── [Documentation](./Task-02/Documents/)
│   │   │   └── [Screenshots](./Task-02/Screenshots/)
│   │   │
│   │   ├── Task 03 - Database
│   │   │   ├── [README](./Task-03/README.md)
│   │   │   ├── [Documentation](./Task-03/Documents/)
│   │   │   └── [Screenshots](./Task-03/Screenshots/)
│   │   │
│   │   ├── Task 04 - Nexus / ECR Repository
│   │   │   ├── [README](./Task-04/README.md)
│   │   │   ├── [Documentation](./Task-04/Documents/)
│   │   │   └── [Screenshots](./Task-04/Screenshots/)
│   │   │
│   │   ├── Task 05 - SonarQube
│   │   │   ├── [README](./Task-05/README.md)
│   │   │   ├── [Documentation](./Task-05/Documents/)
│   │   │   └── [Screenshots](./Task-05/Screenshots/)
│   │   │
│   │   ├── Task 06 - Trivy Security Scan
│   │   │   ├── [README](./Task-06/README.md)
│   │   │   ├── [Documentation](./Task-06/Documents/)
│   │   │   └── [Screenshots](./Task-06/Screenshots/)
│   │   │
│   │   ├── Task 07 - Amazon EKS
│   │   │   ├── [README](./Task-07/README.md)
│   │   │   ├── [Documentation](./Task-07/Documents/)
│   │   │   └── [Screenshots](./Task-07/Screenshots/)
│   │   │
│   │   ├── Task 08 - Kubernetes Deployment
│   │   │   ├── [README](./Task-08/README.md)
│   │   │   ├── [Documentation](./Task-08/Documents/)
│   │   │   └── [Screenshots](./Task-08/Screenshots/)
│   │   │
│   │   ├── Task 09 - Configuration & Secrets
│   │   │   ├── [README](./Task-09/README.md)
│   │   │   ├── [Documentation](./Task-09/Documents/)
│   │   │   └── [Screenshots](./Task-09/Screenshots/)
│   │   │
│   │   ├── Task 10 - Jenkins CI/CD Pipeline
│   │   │   ├── [README](./Task-10/README.md)
│   │   │   ├── [Documentation](./Task-10/Documents/)
│   │   │   └── [Screenshots](./Task-10/Screenshots/)
│   │   │
│   │   ├── Task 11 - Rolling Deployment
│   │   │   ├── [README](./Task-11/README.md)
│   │   │   ├── [Documentation](./Task-11/Documents/)
│   │   │   └── [Screenshots](./Task-11/Screenshots/)
│   │   │
│   │   ├── Task 12 - Prometheus & Grafana
│   │   │   ├── [README](./Task-12/README.md)
│   │   │   ├── [Documentation](./Task-12/Documents/)
│   │   │   └── [Screenshots](./Task-12/Screenshots/)
│   │   │
│   │   ├── Task 13 - Logging
│   │   │   ├── [README](./Task-13/README.md)
│   │   │   ├── [Documentation](./Task-13/Documents/)
│   │   │   └── [Screenshots](./Task-13/Screenshots/)
│   │   │
│   │   └── Task 14 - Security
│   │       ├── [README](./Task-14/README.md)
│   │       ├── [Documentation](./Task-14/Documents/)
│   │       └── [Screenshots](./Task-14/Screenshots/)
│   │
│   ├── 🌐 Application URL
│   │   └── [Open Deployed Application](http://a61a39df109894f3798c66e3ec4fda31-817282873.us-east-1.elb.amazonaws.com)
│   │
│   └── 📦 Submission Evidence
│       ├── Task-wise README files
│       ├── Execution Documentation
│       └── Screenshots for Tasks 01–14
│
└── 🔗 Source Application Repository
    └── https://github.com/Vennilavanguvi/BlogReact
```

## 📁 Expected Task Folder Layout

```text
Task-01/
├── README.md
├── Documents/
│   └── execution-documentation.md
└── Screenshots/
    ├── application-running.png
    └── application-validation.png

Task-02/
├── README.md
├── Documents/
└── Screenshots/

...

Task-14/
├── README.md
├── Documents/
└── Screenshots/
```

## 🌐 Application Link

[Open the Blog Application](http://a61a39df109894f3798c66e3ec4fda31-817282873.us-east-1.elb.amazonaws.com)

**Note:** Replace example document and screenshot paths with the actual filenames in your repository. GitHub links work only when the referenced files or folders exist. The application URL may become unavailable after AWS resources are deleted.
