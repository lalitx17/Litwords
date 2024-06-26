import Link from "next/link";

interface FooterProps {
  classNameColor?: string;
}

const Footer: React.FC<FooterProps> = ({ classNameColor }) => {
  return (
    <footer className={`py-10 rounded-b-lg ${classNameColor}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-4/5 mx-auto">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold">LitWords</h2>
            <p className="mt-2 font-semibold">We have to go Deeper.</p>
            <div className="flex items-center mt-4 space-x-3">
              <InstagramIcon className="text-blue-500 h-6 w-6" />
              <XIcon className="h-4 w-4" />
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold">Links</h3>
            <nav className="mt-4">
              <ul className="space-y-2 text-center md:text-left">
                <li>
                  <Link href="https://lalityadav.com.np/" passHref>
                    <p className="hover:underline hover:translate-x-[-2px] transition-transform duration-300 ease-in-out">About Me</p>
                  </Link>
                </li>
                <li>
                  <Link href="https://lalityadav.com.np/" passHref>
                    <p className="hover:underline hover:translate-x-[-2px] transition-transform duration-300 ease-in-out">Contact</p>
                  </Link>
                </li>
                <li>
                  <Link href="/" passHref>
                    <p className="hover:underline hover:translate-x-[-2px] transition-transform duration-300 ease-in-out">Blog</p>
                  </Link>
                </li>
                <li>
                  <Link href="https://lalityadav.com.np/" passHref>
                    <p className="hover:underline hover:translate-x-[-2px] transition-transform duration-300 ease-in-out">Services</p>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold">Categories</h3>
            <nav className="mt-4">
              <ul className="space-y-2 text-center md:text-left">
                <li>
                  <Link href="/categories/Tech" passHref>
                    <p className="hover:underline hover:translate-x-[-2px] transition-transform duration-300 ease-in-out">Tech</p>
                  </Link>
                </li>
                <li>
                  <Link href="/categories/Philosophy" passHref>
                    <p className="hover:underline hover:translate-x-[-2px] transition-transform duration-300 ease-in-out">Philosophy</p>
                  </Link>
                </li>
                <li>
                  <Link href="/categories/Science" passHref>
                    <p className="hover:underline hover:translate-x-[-2px] transition-transform duration-300 ease-in-out">Science</p>
                  </Link>
                </li>
                <li>
                  <Link href="/categories/Society" passHref>
                    <p className="hover:underline hover:translate-x-[-2px] transition-transform duration-300 ease-in-out">Society</p>
                  </Link>
                </li>
                <li>
                  <Link href="/categories/Future" passHref>
                    <p className="hover:underline hover:translate-x-[-2px] transition-transform duration-300 ease-in-out">Future</p>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="mt-2 italic">Coming Soon.</p>
          </div>
        </div>

        <div className="border-t mt-8 pt-4">
          <p className="text-center text-sm">Copyright © 2023 LitWords. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export default Footer;
