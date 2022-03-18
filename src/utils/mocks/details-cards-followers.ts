type CardFollowersProps = {
  id: number;
  username: string;
  type_social: 'instagram' | 'youtube' | 'facebook' | 'twitter';
  total_followers: string;
  today_followers: string;
  is_gained_followers: boolean;
};

export const details_cards_followers = [
  {
    id: 1,
    is_gained_followers: true,
    username: '@nathanf',
    today_followers: '12',
    total_followers: '1987',
    type_social: 'facebook',
  },
  {
    id: 2,
    is_gained_followers: true,
    username: '@nathanf',
    today_followers: '99',
    total_followers: '1044',
    type_social: 'twitter',
  },
  {
    id: 3,
    is_gained_followers: true,
    username: '@realnathanf',
    today_followers: '12',
    total_followers: '11K',
    type_social: 'instagram',
  },

  {
    id: 4,
    is_gained_followers: false,
    username: 'Nathan F',
    today_followers: '144',
    total_followers: '8239',
    type_social: 'youtube',
  },
] as CardFollowersProps[];
