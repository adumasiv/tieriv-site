import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/siteData';

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Projects"
        title="Featured case studies and representative project work."
        description="Replace these placeholders with your real rooms, photos, equipment stacks, and measurable outcomes."
      />
      <div className="mt-12 grid gap-8 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
