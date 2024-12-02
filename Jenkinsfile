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
                sh 'docker build -t proyecto .' // Añadido el punto al final
            }
        }

        stage('Ejecutar Contenedor') {
            steps {
                // Ejecutar el contenedor en el puerto 3000
                sh 'docker run -d -p 3000:3000 proyecto'
            }
        }
    }

    post {
        always {
            // Limpieza general después de cada ejecución
            sh 'docker system prune -f'
        }
    }
}