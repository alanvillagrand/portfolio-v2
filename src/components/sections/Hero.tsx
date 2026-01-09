'use client'
import { ArrowDown } from "lucide-react";
import { ImageWithFallback } from "../ui/ImageWithFallBack";
import Image from "next/image";
import ProfilePicture from "@/assets/profile-picture.png"

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
            <h1 className="mb-4 text-primary">Hello, World! 👋</h1>
            <p className="text-muted-foreground mb-8">
              I'm Alan Villagrand, a computer science student at Baylor University and software engineering intern at BIP.
              Skilled in <span className="text-primary">C++</span>, <span className="text-primary">Rust</span>,
              <span className="text-primary"> Java</span>, and <span className="text-primary">Python</span>,
              with a strong foundation in networking, operating systems, and scalable software design.
              While my expertise lies in backend development, I also have experience in developing frontend applications, including this website!
            </p>
            <p className="text-muted-foreground mb-8">
              Outside of academics and work, I enjoy taking on side projects that challenge me to learn something new. Whether that's experimenting
              with a new language, exploring a programming concept, or building tools that solve real problems, I'm always looking for opportunities
              to grow as an engineer and take on challenging, yet impactful work.
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
