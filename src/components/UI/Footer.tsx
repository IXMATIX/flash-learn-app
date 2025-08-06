import { Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f6f7fb] border-t py-6 mt-10 text-gray-600 text-sm">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p>© {new Date().getFullYear()} FlashLearn App.</p>
        <div className="flex items-center gap-4 text-gray-500">
          <a
            href="https://github.com/brunonxale"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
            title="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="mailto:bblanco@ixmatix.com"
            className="hover:text-black transition-colors"
            title="Contact us"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
