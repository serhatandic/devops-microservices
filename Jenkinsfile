pipeline {
    agent any

    tools {
        nodejs "node" // Use the NodeJS installation configured in Jenkins
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/serhatandic/devops-microservices.git'
            }
        }
        stage('Run ESLint') {
            steps {
                dir('user-service') {
                    sh 'npm install'
                    sh 'npm run lint'
                }
                dir('product-service') {
                    sh 'npm install'
                    sh 'npm run lint'
                }
            }
        }
        stage('Run Unit Tests') {
            steps {
                dir('user-service') {
                    sh 'npm install'
                    sh 'npm test'
                }
                dir('product-service') {
                    sh 'npm install'
                    sh 'npm test'
                }
            }
        }
        stage('Build User Service') {
            steps {
                script {
                    docker.build('user-service:latest', './user-service')
                }
            }
        }
        stage('Build Product Service') {
            steps {
                script {
                    docker.build('product-service:latest', './product-service')
                }
            }
        }
        stage('Deploy to Kubernetes') {
            environment {
                KUBECONFIG = credentials('kubeconfig')
            }
            steps {
                script {
                    sh 'kubectl apply -f kubernetes/user-service-deployment.yaml'
                    sh 'kubectl apply -f kubernetes/user-service-service.yaml'
                    sh 'kubectl apply -f kubernetes/product-service-deployment.yaml'
                    sh 'kubectl apply -f kubernetes/product-service-service.yaml'
                }
            }
        }
    }
}
