import { Grid, Headphones, List, Brain } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <Grid className="h-8 w-8" />,
      title: "Interactive Mind Maps",
      description:
        "Create customizable mind maps that help visualize concepts and their connections, making it easier to understand complex topics.",
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Audio & Video Processing",
      description:
        "Upload lecture recordings in various formats and let our app process them to extract the most important information.",
    },
    {
      icon: <List className="h-8 w-8" />,
      title: "Concise Summaries",
      description:
        "Get automatically generated summaries of your content that highlight key points and concepts to focus your study sessions.",
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Smart Learning",
      description:
        "Our algorithm adapts to your learning style and helps you identify knowledge gaps for more effective studying.",
    },
  ];

  return (
    <section className="bg-secondary/50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Focus on what matters
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Our tools help you extract and organize the most important
            information from your lectures, saving you time and enhancing your
            understanding.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background shadow-subtle hover:shadow-hover rounded-xl p-6 transition-all duration-300"
            >
              <div className="bg-primary/10 text-primary mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
