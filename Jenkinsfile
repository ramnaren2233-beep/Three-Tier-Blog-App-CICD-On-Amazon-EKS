pipeline {
  agent any
  environment {
    REGION  = 'ap-south-1'
    ECR     = '906543084508.dkr.ecr.ap-south-1.amazonaws.com'
    NEXUS   = '172.31.8.25:8082'
    TAG     = "v${BUILD_NUMBER}"
  }
  stages {
    stage('Checkout') {
      steps { checkout scm }
    }
    stage('Docker Build') {
      steps {
        sh '''
          docker build -t $ECR/blog-backend:$TAG ./backend
          docker build -t $ECR/blog-frontend:$TAG ./frontend
        '''
      }
    }
    stage('Push to ECR') {
      steps {
        sh '''
          aws ecr get-login-password --region $REGION | docker login --username AWS --password-stdin $ECR
          docker push $ECR/blog-backend:$TAG
          docker push $ECR/blog-frontend:$TAG
        '''
      }
    }
    stage('Push to Nexus') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'nexus-creds', usernameVariable: 'NU', passwordVariable: 'NP')]) {
          sh '''
            echo $NP | docker login $NEXUS -u $NU --password-stdin
            docker tag $ECR/blog-backend:$TAG $NEXUS/blog-backend:$TAG
            docker tag $ECR/blog-frontend:$TAG $NEXUS/blog-frontend:$TAG
            docker push $NEXUS/blog-backend:$TAG
            docker push $NEXUS/blog-frontend:$TAG
          '''
        }
      }
    }
    stage('Deploy to EKS') {
      steps {
        sh '''
          aws eks update-kubeconfig --region $REGION --name blog-eks
          kubectl set image deployment/backend backend=$ECR/blog-backend:$TAG -n blog
          kubectl set image deployment/frontend frontend=$ECR/blog-frontend:$TAG -n blog
          kubectl rollout status deployment/backend -n blog
          kubectl rollout status deployment/frontend -n blog
        '''
      }
    }
  }
}
