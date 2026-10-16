# Task 2: Docker

### Work Completed

| S.No | What I Did | Status |
|---|---|---|
| 1 | Created multi-stage Dockerfile for Backend (Node.js 20 Alpine) | Completed |
| 2 | Created multi-stage Dockerfile for Frontend (Node build + nginx-unprivileged) | Completed |
| 3 | Added `.dockerignore` for Backend and Frontend | Completed |
| 4 | Configured non-root users (`node` for Backend, `nginx` for Frontend) | Completed |
| 5 | Added `HEALTHCHECK` to both images | Completed |
| 6 | Built `blog-backend:v1` and `blog-frontend:v1` images | Completed |
| 7 | Ran both containers and verified `healthy` status | Completed |
| 8 | Verified Frontend -> Backend -> Database through the containers | Completed |
| 9 | Kept credentials out of images (`.env` excluded, values passed at runtime) | Completed |

## Requirements Covered

| Requirement | How It Was Met |
|---|---|
| Multi-stage Docker builds | Build stage and runtime stage in both Dockerfiles |
| Minimal production images | Alpine-based images |
| Non-root containers | `USER node` (Backend), `nginx-unprivileged` (Frontend) |
| `.dockerignore` | Added in `backend/` and `frontend/` |
| Health checks | `HEALTHCHECK` in both Dockerfiles |
| No hardcoded credentials | `.env` not copied into images, passed with `--env-file` and `-e` at runtime |

## Images

| Image | Tag |
|---|---|
| Backend | `blog-backend:v1` |
| Frontend | `blog-frontend:v1` |

## Screenshots

**Folder:** `Task2_Screenshots/`

| S.No | Screenshot Name | What It Shows |
|---|---|---|
| 1 | `Task2_1_Backend_Dockerfile.png` | Backend Dockerfile and `.dockerignore` |
| 2 | `Task2_2_Backend_Build.png` | Backend image build output |
| 3 | `Task2_3_Frontend_Dockerfile.png` | Frontend Dockerfile and `.dockerignore` |
| 4 | `Task2_4_Frontend_Build.png` | Frontend image build output |
| 5 | `Task2_5_Docker_Images.png` | `docker images` showing both images |
| 6 | `Task2_6_Containers_Healthy.png` | `docker ps` showing both containers healthy |
| 7 | `Task2_7_NonRoot_And_Working.png` | `whoami` output (non-root) and API response with 4 posts |

---

## Task 2 Completed
