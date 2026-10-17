# Task 3: Database (Option A: MySQL on Kubernetes-StatefulSet)

| S.No | What I Did | Status |
|---|---|---|
| 1 | StatefulSet, mysql-0 Running, Service | Completed |
| 2 | Secret and ConfigMap (secure credentials) | Completed |
| 3 | PVC and PV Bound (persistent storage) | Completed |
| 4 | SHOW DATABASES, SHOW TABLES (init.sql) | Completed |
| 5 | Data before pod deletion | Completed |
| 6 | Pod deleted and recreated, Running | Completed |
| 7 | Same data after pod recreation | Completed |
| 8 | NetworkPolicy (Backend-only access) | Completed |
| 9 | StatefulSet YAML (volumeClaimTemplates, Secret reference) | Completed |
| 10 | Backend connected to database, working application | Completed |

| S.No | Screenshot Name |
|---|---|
| 1 | 01-db-statefulset-pods-svc |
| 2 | 02-db-secret |
| 3 | 03-persistent-storage-pvc-pv |
| 4 | 04-db-initialization-tables |
| 5 | 05-data-before-pod-delete |
| 6 | 06-pod-delete-recreate |
| 7 | 07-data-after-pod-recreate |
| 8 | 10-networkpolicy |
| 9 | 09-statefulset-yaml |
| 10 | 08-working-app-evidence |

## Implementation Highlights

| S.No | Implementation Detail | Status |
|---|---|---|
| 1 | Database deployed on Amazon EKS using MySQL 8.0 StatefulSet | Completed |
| 2 | Headless Service (clusterIP: None) for stable DB network identity | Completed |
| 3 | Persistent storage using volumeClaimTemplates (5Gi, gp2, ReadWriteOnce) | Completed |
| 4 | EBS CSI driver running for dynamic volume provisioning | Completed |
| 5 | Credentials injected from Kubernetes Secret (db-secret), not hardcoded in YAML | Completed |
| 6 | Database and tables initialized from init.sql using ConfigMap (db-init) | Completed |
| 7 | subPath mount used to avoid lost+found issue on EBS volume | Completed |
| 8 | Readiness and liveness probes configured using mysqladmin ping | Completed |
| 9 | CPU and memory requests and limits configured | Completed |
| 10 | NetworkPolicy allows only Backend pods (app: backend) on port 3306 | Completed |
| 11 | Data retained after database pod deletion and recreation | Completed |
| 12 | Backend connects using DB_HOST=mysql, DB_PORT=3306, DB_NAME=blogdb | Completed |

## Task 3: Completed
