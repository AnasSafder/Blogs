const realNames = [
  "Olivia Parker", "Liam Bennett", "Sophia Hughes", "Noah Edwards", "Isabella Ward",
  "Mason Brooks", "Ava Coleman", "Elijah Sanders", "Mia James", "Lucas Richardson"
];

const avatarUrls = [
  "https://randomuser.me/api/portraits/women/65.jpg",
  "https://randomuser.me/api/portraits/men/23.jpg",
  "https://randomuser.me/api/portraits/women/12.jpg",
  "https://randomuser.me/api/portraits/men/45.jpg",
  "https://randomuser.me/api/portraits/women/33.jpg",
  "https://randomuser.me/api/portraits/men/56.jpg",
  "https://randomuser.me/api/portraits/women/77.jpg",
  "https://randomuser.me/api/portraits/men/11.jpg",
  "https://randomuser.me/api/portraits/women/90.jpg",
  "https://randomuser.me/api/portraits/men/39.jpg"
];

const users = Array.from({ length: 10 }, (_, i) => {
  const id = i + 1;
  return {
    id,
   name: realNames[i],
    picture: avatarUrls[i],
    posts: [
      {
        id: id * 10 + 1,
        title: `Are you ready to buy a new modern home...`,
        content: `The thing is that I'm quite fond of love...`,
        image: `/blogs/1.png`,
        date: '2025-05-20'
      },
      {
        id: id * 10 + 2,
        title: `The world is at your doorstep...`,
        content: `Blind would equal while oh mr do style...`,
        image: `/blogs/2.png`,
        date: '2025-01-01'
      },
      {
        id: id * 10 + 3,
        title: `Starting a business in Qatar...`,
        content: `Advantage old had otherwise sincerity dependent additions...`,
        image: `/blogs/3.png`,
        date: '2023-02-14'
      },
      {
        id: id * 10 + 4,
        title: `Digitising your access to industrial banking...`,
        content: `Advantage old had otherwise sincerity dependent additions...`,
        image: `/blogs/4.png`,
        date: '2025-03-01'
      },
      {
        id: id * 10 + 5,
        title: `The world is at your doorstep...`,
        content: `Blind would equal while oh mr do style...`,
        image: `/blogs/3.png`,
        date: '2024-08-27'
      },
      {
        id: id * 10 + 6,
        title: `Starting a business in Qatar...`,
        content: `Advantage old had otherwise sincerity dependent additions...`,
        image: `/blogs/2.png`,
        date: '2025-02-07'
      },
      {
        id: id * 10 + 7,
        title: `Are you ready to buy a new modern home...`,
        content: `The thing is that I'm quite fond of love...`,
        image: `/blogs/1.png`,
        date: '2025-01-15'
      }
    ]
  };
});

module.exports = users;
