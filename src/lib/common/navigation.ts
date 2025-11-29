export const NavigationLinks = {
	Impressum: 'impressum',
	Datenschutz: 'datenschutz'
};

export const HomeNavigationTags = {
	Introduction: 'introduction',
	About: 'about',
	CQM: 'CQM',
	Session: 'session',
	References: 'references',
	Contact: 'contact',
	Faq: 'faq'
};

export function generateHomeNavTag(tag: string) {
	return `/#${tag}`;
}
