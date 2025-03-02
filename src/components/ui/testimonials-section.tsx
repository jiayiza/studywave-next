"use client";

import { useState, useEffect } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

export function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Computer Science Student",
      content:
        "StudyWave transformed how I prepare for exams. The mind maps helped me understand complex algorithms and data structures in a visual way I couldn't achieve with traditional notes.",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Medical Student",
      content:
        "Being able to upload my lecture recordings and get concise summaries saved me countless hours of note-taking. I can now focus on understanding the material rather than just transcribing it.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      id: 3,
      name: "Michael Torres",
      role: "Law Student",
      content:
        "The smart learning feature has been incredible for my bar exam prep. It identified weak areas in my understanding that I wasn't even aware of, allowing me to study more efficiently.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="overflow-hidden py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Loved by students
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Join thousands of students who are already enhancing their learning
            experience with StudyWave.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-all duration-500 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="glass-panel flex flex-col items-center gap-8 rounded-2xl p-8 md:flex-row md:p-10">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-full md:h-32 md:w-32">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="mb-6 text-lg italic md:text-xl">
                        {`"${testimonial.content}"`}
                      </p>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === activeIndex ? "bg-primary w-8" : "bg-primary/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
