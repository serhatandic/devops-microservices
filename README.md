DevOps Microservices Project Summary:

- Set Up a CI/CD Pipeline:
  
  Implemented a CI/CD pipeline using Jenkins to automate the development workflow.
  The pipeline includes stages for cloning the repository, running static code analysis, executing unit tests, building Docker images, and deploying to a Kubernetes cluster.

- Static Code Analysis:

  Integrated ESLint for static code analysis to maintain code quality.
  Configured ESLint to work with the project.
  
- Unit Testing:

  Added unit tests for both the user-service and product-service to ensure code reliability.
  Configured Mocha for testing and integrated it into the CI/CD pipeline.
  
- Docker and Kubernetes:

  Built Docker images for the microservices and deployed them to a Kubernetes cluster.
  Configured Kubernetes deployment and service YAML files for the microservices.

- Jenkins Pipeline Script:

  Created and refined a Jenkins pipeline script that handles the entire CI/CD process, including static code analysis, testing, building, and deploying the services.
