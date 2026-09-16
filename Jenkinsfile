pipeline {

    agent any

    environment {
        BASE_URL = 'https://www.saucedemo.com'
        BROWSER = 'chromium'
    }

    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Run Tests') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'sauce-test-user',
                        usernameVariable: 'TEST_USER_USERNAME',
                        passwordVariable: 'TEST_USER_PASSWORD'
                    ),
                    usernamePassword(
                        credentialsId: 'sauce-invalid-user',
                        usernameVariable: 'INVALID_USER_USERNAME',
                        passwordVariable: 'INVALID_USER_PASSWORD'
                    )
                ]) {
                    bat 'npm test'
                }
            }
        }

    }

}
