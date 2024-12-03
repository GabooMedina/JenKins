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

        stage('Ejecutar Contenedor') {
            steps {
                // Ejecutar el contenedor en el puerto 8081
        bat 'docker run -d -p 8081:80 proyecto' // Comando para Windows
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
