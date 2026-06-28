import instIcon from '@/assets/images/icons/instagram-fill.svg';
import lnIcon from '@/assets/images/icons/linkedin-box-fill.svg';
import youtubeIcon from '@/assets/images/icons/youtube-fill.svg';

export const FooterLinks = [
  {
    title: 'Company',
    links: [
      { label: 'About', path: '#' },
      { label: 'Features', path: '#' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Customer Support', path: '#' },
      { label: 'Delivery Details', path: '#' },
    ],
  },
  {
    title: 'FAQ',
    links: [
      { label: 'Account', path: '#' },
      { label: 'Manage Deliveries', path: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Free eBooks', path: '#' },
      { label: 'Development Tutorial', path: '#' },
    ],
  },
];

export const FooterSocial = [
  { icon: lnIcon, path: '#' },
  { icon: instIcon, path: '#' },
  { icon: youtubeIcon, path: '#' },
];
