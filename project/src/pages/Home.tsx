"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

// Step 1: Add the Specialty Data
type Specialty = {
  name: string;
  description: string;
  icon: string;
};

const specialties: Specialty[] = [
  { name: "Psychologist", description: "For therapy and counseling", icon: "🧠" },
  { name: "Psychiatrist", description: "For medical diagnosis and treatment", icon: "💊" },
  { name: "Therapist", description: "General mental health support", icon: "👐" },
  { name: "Counselor", description: "Relationship, career, and personal counseling", icon: "💬" },
  { name: "Child Psychologist", description: "Mental health support for children", icon: "👶" },
  { name: "Trauma Specialist", description: "Support for PTSD and trauma recovery", icon: "⚡" },
  { name: "Addiction Specialist", description: "Help with substance abuse and addiction", icon: "🚭" },
  { name: "CBT Therapist", description: "Specialized in cognitive therapy", icon: "🧩" },
  { name: "Mindfulness Coach", description: "Meditation and stress relief", icon: "🧘" },
  { name: "Life Coach", description: "Guidance on personal growth and motivation", icon: "🎯" },
];

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?query=${searchQuery}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Find the Right Support</h1>
          <p className="mt-4 text-lg md:text-xl">Search for the best mental health professionals</p>
          <div className="mt-6 flex items-center justify-center">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for specialists..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-72 md:w-96 pr-12"
              />
              <Button
                onClick={handleSearch}
                className="absolute right-0 top-0 bottom-0 px-4 bg-blue-700 hover:bg-blue-800"
              >
                <Search className="w-5 h-5 text-white" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2: Find by Specialty Section */}
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Find by Specialty
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Choose the right specialist for your mental health needs.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {specialties.map((specialty) => (
              <div
                key={specialty.name}
                className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center hover:shadow-lg transition"
              >
                <span className="text-4xl">{specialty.icon}</span>
                <h3 className="text-lg font-semibold text-gray-800 mt-2">
                  {specialty.name}
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  {specialty.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Sections (if any) */}
    </div>
  );
};

export default Home;
