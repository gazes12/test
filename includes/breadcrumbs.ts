interface IBreadcrumbsItem{
    id: number,
    name: string,
    link: string,
    slug: string,
}

export const breadcrumbsList  = <IBreadcrumbsItem[]> [
    {
        id: 0,
        name: 'Главная',
        link: '/',
        slug: '/',
    },
    {
        id: 1,
        name: 'Контакты',
        link: '/contacts',
        slug: 'contacts',
    },

    {
        id: 2,
        name: 'О нас',
        link: '/about-us',
        slug: 'about-us',
    },

    {
        id: 3,
        name: 'Заказать',
        link: '/order',
        slug: 'order',
    }
]