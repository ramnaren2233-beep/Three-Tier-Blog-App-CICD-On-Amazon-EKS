# Task 10: CI/CD-Pipeline

## Pipeline Stages and Status

| S.No | What I Did | Status |
|---:|---|---|
| 1 | Pulled the source code from the GitHub repository (commit `5dc85f4`) | ✅ Completed |
| 2 | Installed dependencies and built the frontend with `npm ci` | ✅ Completed |
| 3 | Added Jest test cases and executed them (2 tests passed) | ✅ Completed |
| 4 | Configured SonarQube with Jenkins and analysed the source code | ✅ Completed |
| 5 | Configured the webhook and verified the Quality Gate result (Passed) | ✅ Completed |
| 6 | Built the Docker image of the application | ✅ Completed |
| 7 | Scanned the Docker image for HIGH and CRITICAL vulnerabilities | ✅ Completed |
| 8 | Tagged the image with the Git commit version | ✅ Completed |
| 9 | Pushed the versioned images to Amazon ECR | ✅ Completed |
| 10 | Created the EKS cluster and deployed the application using Kubernetes manifests | ✅ Completed |
| 11 | Verified pods, service and application response | ✅ Completed |

## Screenshots

| S.No | Screenshot File Name |
|---:|---|
| 1 | `task10_checkout_success.png` |
| 2 | `task10_build_success.png` |
| 3 | `task10_test_results.png` |
| 4 | `task10_sonarqube_analysis.png` |
| 5 | `task10_quality_gate.png` |
| 6 | `task10_docker_build.png` |
| 7 | `task10_trivy_scan_evidence.png` |
| 8 | `task10_image_versioning.png` |
| 9 | `task10_ecr_push_success.png` |
| 10 | `task10_ecr_frontend_images.png` |
| 11 | `task10_ecr_backend_images.png` |
| 12 | `task10_eks_deployment.png` |
| 13 | `task10_deployment_validation.png` |

**Task 10: Completed**
