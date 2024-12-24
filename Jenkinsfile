pipeline {
    agent any

    stages {
        stage('Clonar Repositorio') {
            steps {
                // Clonar el repositorio desde GitHub
                git 'https://github.com/GabooMedina/JenKins.git' // Cambia la URL si es necesario.
            }
        }

        stage('Construir Imagen Docker') {
            steps {
                // Construir la imagen Docker con los archivos del repositorio clonado
                bat 'docker build -t proyecto .' // Comando para Windows
            }
        }

        stage('Detener y Eliminar Contenedor Anterior') {
            steps {
                // Detener y eliminar el contenedor anterior si existe
                bat '''
                docker ps -q -f "name=proyecto" | findstr . && docker stop proyecto && docker rm proyecto || echo "No hay contenedor en ejecución"
                '''
            }
        }

        stage('Ejecutar Contenedor') {
            steps {
                // Ejecutar el contenedor en el puerto 8081
                bat 'docker run -d -p 8081:80 --name proyecto proyecto' // Comando para Windows
            }
        }

        stage('Ejecutar Pruebas') {
            steps {
                script {
                    // Ejecutar las pruebas de Node.js
                    bat '''
                    node js/test.js || exit /b 1
                    '''
                }
            }
        }
    }

    post {
        always {
            // Limpieza general después de cada ejecución
            bat 'docker system prune -f' // Comando para Windows
        }
    }
}
