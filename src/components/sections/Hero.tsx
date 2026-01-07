'use client'
import { ArrowDown } from "lucide-react";
import { ImageWithFallback } from "../ui/ImageWithFallBack";
import Image from "next/image";
import ProfilePicture from "@/assests/profile-picture.png"

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          <div className="shrink-0">
            <ImageWithFallback
              src={ProfilePicture.src}
              alt="Profile picture"
              className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-2 border-primary"
            />
          </div>

          <div className="flex-1">
            <h1 className="mb-4 text-primary">Hi, I'm Alan Villagrand 👋</h1>
            <p className="text-muted-foreground mb-8">
              Full Stack Developer passionate about creating elegant
              solutions to complex problems. I specialize in
              building modern web applications with a focus on clean
              code and exceptional user experiences.
            </p>
            <p className="text-muted-foreground mb-8">
              Currently crafting digital experiences and turning
              ideas into reality through code. When I'm not coding,
              you'll find me exploring new technologies or
              contributing to open source projects.
            </p>
            <a href="#experience" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              View my work
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
