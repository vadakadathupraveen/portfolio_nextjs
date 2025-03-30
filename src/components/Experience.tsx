// components/sections/Experience.tsx
const Experience = () => (
  <section>
    <h2 className="text-xl font-bold mb-2">Employment History</h2>
    <div className="mb-4">
      <h3 className="font-semibold">Developer I - Software Engineering</h3>
      <p>UST | Client: Equifax</p>
      <p>May 2021 - May 2023 | Kerala, India</p>
      <ul className="list-disc ml-6">
        <li>Developed and maintained Java-based microservices using Spring Boot.</li>
        <li>Created backend applications for data consistency during cloud migration to GCP.</li>
        <li>Built CI/CD pipelines using Jenkins, GitHub Actions, GitLab CI/CD, integrating security tools like SonarQube and Fortify.</li>
        <li>Containerized applications using Docker and orchestrated with Kubernetes and Helm.</li>
      </ul>
    </div>
  </section>  
);

export default Experience;
