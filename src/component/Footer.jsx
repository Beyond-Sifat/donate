// Footer.jsx
const Footer = () => {
    return (
        <footer className="bg-gray-100 text-center py-6 mt-10">
            <p className="text-gray-600">
                © {new Date().getFullYear()} Donate. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 mt-1">
                Built with ❤️ for helping people
            </p>
        </footer>
    );
};

export default Footer;