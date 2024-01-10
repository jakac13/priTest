pipeline {
    agent any
    tools {
        nodejs "node-12"
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Docker Build') {
            steps {
                sh 'docker build -t priTest .'
            }
        }
        // Additional stages for pushing the Docker image to a registry or deploying to a server can be added here.
    }
}
