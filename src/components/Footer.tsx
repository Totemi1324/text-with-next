import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full p-4 fixed inset-x-0 bottom-0 flex flex-col sm:flex-row justify-between items-center border-t border-gray-700">
            {/* Company Logo */}
            <div className="flex flex-col sm:flex-row items-center mt-4 sm:mt-0">
                <span className="mr-2">Made with ❤️ by</span>
                <Image
                    src="/cssia_logo.svg"
                    alt="Company Logo"
                    width={100} // Adjust the size as needed
                    height={50} // Adjust the size as needed
                />
            </div>

            {/* Theme Selector and Placeholder */}
            <div className="flex flex-col sm:flex-row items-center mt-4 sm:mt-0">
                <span className="mr-2">Theme:</span>
                <div className="p-2 bg-white w-24 h-10"> {/* Placeholder dimensions */}
                    {/* Placeholder content until the theme selector is implemented */}
                </div>
            </div>
        </footer>
    );
}
