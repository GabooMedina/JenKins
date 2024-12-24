pipeline {
    agent any

    stages {
        stage('Clonar Repositorio') {
            steps {
                git 'https://github.com/GabooMedina/JenKins.git'
            }
        }

        stage('Construir Imagen Docker') {
            steps {
                bat 'docker build -t proyecto .' // Construir la imagen
            }
        }

        stage('Detener y Eliminar Contenedor Anterior') {
            steps {
                script {
                    // Detener y eliminar el contenedor si está en ejecución
                    def containerId = bat(script: 'docker ps -q -f "name=proyecto"', returnStdout: true).trim()
                    if (containerId) {
                        bat "docker stop ${containerId}"
                        bat "docker rm ${containerId}"
                    } else {
                        echo 'No hay contenedor en ejecución.'
                    }
                }
            }
        }

        stage('Ejecutar Contenedor') {
            steps {
                bat 'docker run -d -p 8081:80 --name proyecto proyecto' // Ejecutar el contenedor
            }
        }

        stage('Ejecutar Pruebas') {
            steps {
                script {
                    // Ejecutar las pruebas de Node.js
                    bat 'node js/test.js || exit /b 1'
                }
            }
        }
    }

    post {
        always {
            // Limpieza general después de cada ejecución
            bat 'docker system prune -f'
        }
    }
}
