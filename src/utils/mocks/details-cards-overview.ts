type CardOverviewProps = {
  id: number;
  title: string;
  type_social: 'instagram' | 'youtube' | 'facebook' | 'twitter';
  total_gained: string;
  qnt_percentage: string;
  is_gained: boolean;
}

export const details_cards_overview = [
  {
    id: 1,
    is_gained: true,
    title: 'Page views',
    qnt_percentage: '3',
    total_gained: '87',
    type_social: 'facebook',
  },
  {
    id: 2,
    is_gained: false,
    title: 'Likes',
    qnt_percentage: '12',
    total_gained: '52',
    type_social: 'facebook',
  },
  {
    id: 3,
    is_gained: true,
    title: 'Likes',
    qnt_percentage: '2257',
    total_gained: '5462',
    type_social: 'instagram',
  },

  {
    id: 4,
    is_gained: true,
    title: 'Profile Views',
    qnt_percentage: '1375',
    total_gained: '52k',
    type_social: 'instagram',
  },
  {
    id: 5,
    is_gained: true,
    title: 'Retweets',
    qnt_percentage: '303',
    total_gained: '117',
    type_social: 'twitter',
  },
  {
    id: 6,
    is_gained: true,
    title: 'Likes',
    qnt_percentage: '553',
    total_gained: '507',
    type_social: 'twitter',
  },
  {
    id: 7,
    is_gained: false,
    title: 'Likes',
    qnt_percentage: '19',
    total_gained: '107',
    type_social: 'youtube',
  },

  {
    id: 8,
    is_gained: false,
    title: 'Total Views',
    qnt_percentage: '12',
    total_gained: '1407',
    type_social: 'youtube',
  },
] as CardOverviewProps[];
