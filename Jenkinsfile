pipeline {

    agent any

    parameters {
        choice(
            name: 'BROWSER',
            choices: ['chromium', 'firefox', 'webkit'],
            description: 'Select the browser to run the tests'
        )
        choice(
            name: 'TEST_SUITE',
            choices: ['all', 'smoke', 'regression', 'sanity'],
            description: 'Select the test suite to run'
        )
    }

    environment {
        BASE_URL = 'https://www.saucedemo.com'
        BROWSER = "${params.BROWSER}"
        CI = 'true'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install %BROWSER%'
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
        stage('Generate Allure Report') {
            steps {
                bat 'npx allure generate allure-results -o allure-report'
            }
        }
        stage('Archive Test Report') {
            steps {
                archiveArtifacts artifacts: 'reports/cucumber-report.html', fingerprint: true
            }
        }
        stage('Publish Test Report') {
            steps {
                publishHTML(target: [
                    reportDir: 'reports',
                    reportFiles: 'cucumber-report.html',
                    reportName: 'Cucumber Test Report',
                    keepAll: true,
                    alwaysLinkToLastBuild: true
                ])
            }
        }
        stage('Publish Allure Report') {
            steps {
                allure([
                    includeProperties: false,
                    results: [[path: 'allure-results']]
                ])
            }
        }
    }
}
