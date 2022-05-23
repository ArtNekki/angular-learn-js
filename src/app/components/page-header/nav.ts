export default [
	{ id: 'id-1', link: '/', name: 'Главная' },
	{
		id: 'id-2',
		link: 'catalog',
		name: 'Каталог',
		dropdown: [
			{ id: 'id-3', imgId: 'img-1', link: '/page-1', name: 'Накладные электронные замки' },
			{ id: 'id-4', imgId: 'img-2', link: '/page-2', name: 'Замки для квартиры' },
			{ id: 'id-5', imgId: 'img-3', link: '/page-3', name: 'Замки для дома' },
			{ id: 'id-6', imgId: 'img-4', link: '/page-4', name: 'Замки для отелей' },
			{ id: 'id-7', imgId: 'img-5', link: '/page-5', name: 'Замки для офиса' },
			{ id: 'id-8', imgId: 'img-6', link: '/page-6', name: 'Замки для шкафчиков' },
			{ id: 'id-9', imgId: 'img-7', link: '/page-7', name: 'Замки для раздевалок' },
		],
	},
	{ id: 'id-10', link: '', name: 'Оптовая продажа' },
	{ id: 'id-11', link: '', name: 'О нас' },
];
