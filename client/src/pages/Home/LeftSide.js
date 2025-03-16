import React from "react";

function LeftSide() {
  const socialLinks = [
    { href: "https://www.facebook.com/", icon: "ri-facebook-circle-line" },
    { href: "mailto:your-email@example.com", icon: "ri-mail-line" },
    { href: "https://www.instagram.com/", icon: "ri-instagram-line" },
    { href: "https://www.linkedin.com/in/your-profile", icon: "ri-linkedin-box-line" },
    { href: "https://github.com/your-github", icon: "ri-github-line" },
  ];

  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-3xl hover:text-yellow-300 transition duration-300"
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
        <div className="w-[1px] h-32 bg-[#125f63] sm:hidden mt-3"></div>
      </div>
    </div>
  );
}

export default LeftSide;
