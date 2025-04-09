import { defineStore } from 'pinia'

interface Post {
  id: Number
  title: String
  description: String
  image: String
  author: String
  avatar: String
  date: String
  isSaved: Boolean
}

interface PostsState {
  posts: Post[];
  myPosts: Post[];
  loading: boolean;
  error: string | null;
}

export const usePostsStore = defineStore('posts', {
  state: (): PostsState => ({
    posts: [
      {
        id: 1,
        title: 'First Popular Post',
        description:
          ' Of course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District(UW)  Montlake Bridge ',
        image: '/src/assets/images/remove/carousel1.jpg',
        author: 'Developerriddin DEv',
        avatar: '/src/assets/images/remove/avatar1.jpg',
        date: 'Avgust 21, 2024',
        isSaved: true,
      },
      {
        id: 2,
        title:
          'How to choose the right laptop for programming ja sjd asjd ajkd asj dajs dajsd jk ejew jk wejr werje ',
        description:
          ' Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs ',
        image: '/src/assets/images/remove/macbook.jpg',
        author: 'Developerriddin DEv',
        avatar: '/src/assets/images/remove/avatar1.jpg',
        date: 'Avgust 21, 2024',
        isSaved: false,
      },
      {
        id: 3,
        title: 'How we built the first real self-driving car',
        description:
          'Electric self-driving cars will save millions of lives and significantly accelerate the world’s transition to sustainable energy, but only when',
        image: '/src/assets/images/remove/porsh.jpg',
        author: 'Developerriddin DEv',
        avatar: '/src/assets/images/remove/avatar1.jpg',
        date: 'Avgust 21, 2024',
        isSaved: true,
      },
      {
        id: 4,
        title: 'How we built the first real self-driving car',
        description:
          'Parents often don’t want to buy fast food. They may be worried that it’s too expensive, unhealthy, or not worth the effort and time.',
        image: '/src/assets/images/remove/hotdog.jpg',
        author: 'Developerriddin DEv',
        avatar: '/src/assets/images/remove/avatar1.jpg',
        date: 'Avgust 21, 2024',
        isSaved: true,
      },
      {
        id: 5,
        title: 'How we built the first real self-driving car',
        description:
          'Electric self-driving cars will save millions of lives and significantly accelerate the world’s transition to sustainable energy, but only when',
        image: '/src/assets/images/remove/porsh.jpg',
        author: 'Developerriddin DEv',
        avatar: '/src/assets/images/remove/avatar1.jpg',
        date: 'Avgust 21, 2024',
        isSaved: true,
      },
      {
        id: 6,
        title: 'How we built the first real self-driving car',
        description:
          'Parents often don’t want to buy fast food. They may be worried that it’s too expensive, unhealthy, or not worth the effort and time.',
        image: '/src/assets/images/remove/hotdog.jpg',
        author: 'Developerriddin DEv',
        avatar: '/src/assets/images/remove/avatar1.jpg',
        date: 'Avgust 21, 2024',
        isSaved: true,
      },
      {
        id: 7,
        title: 'How we built the first real self-driving car',
        description:
          'Electric self-driving cars will save millions of lives and significantly accelerate the world’s transition to sustainable energy, but only when',
        image: '/src/assets/images/remove/porsh.jpg',
        author: 'Developerriddin DEv',
        avatar: '/src/assets/images/remove/avatar1.jpg',
        date: 'Avgust 21, 2024',
        isSaved: true,
      },
      {
        id: 8,
        title: 'How we built the first real self-driving car',
        description:
          'Parents often don’t want to buy fast food. They may be worried that it’s too expensive, unhealthy, or not worth the effort and time.',
        image: '/src/assets/images/remove/hotdog.jpg',
        author: 'Developerriddin DEv',
        avatar: '/src/assets/images/remove/avatar1.jpg',
        date: 'Avgust 21, 2024',
        isSaved: true,
      },
    ],

    myPosts: [
      {
        id: 1,
        title: 'First Popular Post',
        description:
          ' Of course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District(UW)  Montlake Bridge ',
        image: '/src/assets/images/remove/carousel1.jpg',
        author: 'Developerriddin DEv',
        avatar: '/src/assets/images/remove/avatar1.jpg',
        date: 'Avgust 21, 2024',
        isSaved: true,
      },
      {
        id: 2,
        title:
          'How to choose the right laptop for programming ja sjd asjd ajkd asj dajs dajsd jk ejew jk wejr werje ',
        description:
          ' Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs ',
        image: '/src/assets/images/remove/macbook.jpg',
        author: 'Developerriddin DEv',
        avatar: '/src/assets/images/remove/avatar1.jpg',
        date: 'Avgust 21, 2024',
        isSaved: false,
      },
      {
        id: 3,
        title: 'How we built the first real self-driving car',
        description:
          'Electric self-driving cars will save millions of lives and significantly accelerate the world’s transition to sustainable energy, but only when',
        image: '/src/assets/images/remove/porsh.jpg',
        author: 'Developerriddin DEv',
        avatar: '/src/assets/images/remove/avatar1.jpg',
        date: 'Avgust 21, 2024',
        isSaved: true,
      },
      {
        id: 4,
        title: 'How we built the first real self-driving car',
        description:
          'Parents often don’t want to buy fast food. They may be worried that it’s too expensive, unhealthy, or not worth the effort and time.',
        image: '/src/assets/images/remove/hotdog.jpg',
        author: 'Developerriddin DEv',
        avatar: '/src/assets/images/remove/avatar1.jpg',
        date: 'Avgust 21, 2024',
        isSaved: true,
      },
    ],
    loading: false,
    error: null,
  }),

  getters: {
    getPosts: (state) => state.posts,
    getLoading: (state) => state.loading,
    getError: (state) => state.error,
  },

  actions: {},
})
