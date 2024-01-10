pipeline {
    agent any
    tools { 
        nodejs 'NodeJS21' // Use the name you configured in Global Tool Configuration
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
