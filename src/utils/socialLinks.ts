import { 
  FaGithub, 
  FaLinkedinIn, 
  FaTwitter, 
  FaInstagram, 
  FaEnvelope, 
  FaMediumM, 
  FaYoutube,
  FaStackOverflow,
  FaCodepen,
  FaDev
} from 'react-icons/fa';

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: FaGithub,
    color: 'hover:text-[#333]'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: FaLinkedinIn,
    color: 'hover:text-[#0A66C2]'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: FaTwitter,
    color: 'hover:text-[#1DA1F2]'
  },
  {
    name: 'Email',
    url: 'mailto:your.email@example.com',
    icon: FaEnvelope,
    color: 'hover:text-[#EA4335]'
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@yourusername',
    icon: FaMediumM,
    color: 'hover:text-[#000000]'
  },
  {
    name: 'Stack Overflow',
    url: 'https://stackoverflow.com/users/youruserid',
    icon: FaStackOverflow,
    color: 'hover:text-[#F58025]'
  }
];