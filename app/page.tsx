import type { NextPage } from "next";
import Head from "next/head";
import {
  IdCard,
  CodeXml,
  Users,
  Building,
  Leaf,
  Building2,
  Bot,
  Hotel,
  Code as GithubIcon,
  Briefcase as LinkedinIcon,
  Mail,
} from "lucide-react";

type Project = {
  title: string;
  tags: { name: string; color: string }[];
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const biodata = [
  { icon: IdCard, label: "NIM: 2341720108" },
  { icon: CodeXml, label: "Prodi: Teknik Informatika" },
  { icon: Users, label: "Kelas: TI-3F" },
  { icon: Building, label: "Universitas: Politeknik Negeri Malang" },
];

const projects: Project[] = [
  {
    title: "GreenTrack",
    tags: [
      { name: "UI/UX", color: "bg-purple-100 text-purple-700" },
      { name: "Figma", color: "bg-green-100 text-green-700" },
    ],
    description:
      "Interface for monitoring personal carbon footprint with data visualization.",
    icon: Leaf,
  },
  {
    title: "TerasWarga",
    tags: [
      { name: "Flutter", color: "bg-blue-100 text-blue-700" },
      { name: "ML", color: "bg-green-100 text-green-700" },
    ],
    description: "Local community mobile app with ML.",
    icon: Building2,
  },
  {
    title: "Smart Toll Gate",
    tags: [
      { name: "IOT", color: "bg-blue-100 text-blue-700" },
      { name: "Next.js", color: "bg-purple-100 text-purple-700" },
    ],
    description: "IoT & Next.js dashboard for ESP32.",
    icon: Bot,
  },
  {
    title: "Room Booking App",
    tags: [
      { name: "UI/UX", color: "bg-blue-100 text-blue-700" },
      { name: "Figma", color: "bg-purple-100 text-purple-700" },
    ],
    description: "Admin/student app design.",
    icon: Hotel,
  },
];
const BiodataCard: React.FC<{
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
}> = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md border border-gray-100">
    <Icon className="text-gray-400 size-6" />
    <span className="text-gray-700 text-sm font-medium">{label}</span>
  </div>
);

const BigProjectCard: React.FC<Project> = ({
  title,
  tags,
  description,
  icon: Icon,
}) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col gap-4 h-full">
    <div className="flex justify-between items-start sm:items-center flex-col sm:flex-row gap-3">
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <span
            key={tag.name}
            className={`px-3 py-1 rounded-full text-xs font-semibold ${tag.color}`}
          >
            {tag.name}
          </span>
        ))}
      </div>
    </div>
    <p className="text-gray-600 text-sm flex-grow">{description}</p>
    <Icon className="text-gray-400 size-10 self-start mt-2" />
  </div>
);

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Saka Nabil | Student Profile</title>
      </Head>

      <div className="min-h-screen bg-slate-50 text-gray-900 font-sans">
        {/* Header diubah sedikit agar rapi untuk layout satu kolom */}
        <header className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center p-8 md:px-12 md:py-16 gap-6">
          <div>
            <h1 className="text-5xl font-extrabold tracking-tighter text-gray-950">
              Saka Nabil
            </h1>
            <p className="text-lg text-gray-600 mt-2">
              Mahasiswa Teknik Informatika Semester 6
            </p>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-6 items-center">
            <a
              href="https://github.com/sakanabil"
              className="flex gap-2 items-center text-gray-700 hover:text-black font-medium transition-colors"
            >
              <GithubIcon size={20} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/saka-nabil-a2b56538a"
              className="flex gap-2 items-center text-gray-700 hover:text-black font-medium transition-colors"
            >
              <LinkedinIcon size={20} /> LinkedIn
            </a>
            <a
              href="mailto:sakanabil1221@gmail.com"
              className="flex gap-2 items-center text-white bg-gray-950 px-5 py-2.5 rounded-full font-semibold text-sm shadow hover:bg-gray-800 transition-colors"
            >
              <Mail size={16} /> Email
            </a>
          </div>
        </header>

        {/* Main layout diubah menjadi max-w-5xl tanpa grid kolom ganda */}
        <main className="max-w-5xl mx-auto px-8 pb-16 md:px-12 md:pb-24 space-y-16">
          {/* Biodata Section */}
          <section>
            <h2 className="text-3xl font-bold tracking-tight text-gray-950 mb-8">
              Biodata
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {biodata.map((item, index) => (
                <BiodataCard key={index} {...item} />
              ))}
            </div>
          </section>

          {/* Featured Projects Section */}
          <section>
            <h2 className="text-3xl font-bold tracking-tight text-gray-950 mb-8">
              Featured Projects
            </h2>
            {/* Project ditampilkan dalam grid 2 kolom agar proporsional */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <BigProjectCard key={index} {...project} />
              ))}
            </div>
          </section>
        </main>

        <footer className="py-8 px-12 border-t border-gray-100 bg-white">
          <p className="text-center text-gray-500 text-sm">
            © 2024 Saka Nabil. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default IndexPage;
