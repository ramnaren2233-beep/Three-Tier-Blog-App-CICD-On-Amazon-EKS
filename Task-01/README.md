# Task 1: Application

### Work Completed

| S.No | What I Did | Status |
|---|---|---|
| 1 | Created EC2 instance (Amazon Linux 2023) | Completed |
| 2 | Opened Security Group ports 22, 80, 3000, 5000 | Completed |
| 3 | Installed Git, Docker, Node.js, Nginx | Completed |
| 4 | Cloned source code from GitHub | Completed |
| 5 | Created `.env` files from `.env.example` | Completed |
| 6 | Started MySQL container and loaded `init.sql` | Completed |
| 7 | Started Backend API on port 5000 (pm2) | Completed |
| 8 | Built Frontend (`npm run build`) | Completed |
| 9 | Configured Nginx (Frontend on port 80, `/api` proxy to Backend) | Completed |
| 10 | Verified Frontend -> Backend -> Database communication | Completed |

## Application URL

```
http://13.203.76.133
```

## Screenshots

**Folder:** `Task1_Screenshots/`

| S.No | Screenshot Name | What It Shows |
|---|---|---|
| 1 | `Task1_1_Application_URL.png` | App in browser with URL and "posts live: 4" |
| 2 | `Task1_2_Frontend_Backend.png` | Frontend showing 4 blog posts from Backend |
| 3 | `Task1_3_Database.png` | `docker ps` and `SELECT` output with 4 rows |

---

## Task 1 Completed
