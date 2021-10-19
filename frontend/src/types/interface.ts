export interface IMage {
	id: string;
	_id: string;
	createdAt: Date;
	updatedAt: Date;
	name: string;
	alternativeText: string;
	caption: string;
	width: number;
	height: number;
	formats: JSON;
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl: string;
	provider: string;
}

export interface IUser {
	id: string;
	name: string;
	image: string;
}
export interface ICategory {
	id: string;
	name: string;
	slug: string;
}

export interface IComment {
	id: string;
	content: string;
	user: IUser;
	television: ITelevision;
	createdAt: Date;
}

export interface ITelevision {
	id: string;
	title: string;
	videoUrl: string;
	createdAt: Date;
	comments: IComment[];
}

export interface IArticle {
	id: string;
	createdAt: Date;
	updatedAt: Date;
	content: string;
	title: string;
	description: string;
	banner: boolean;
	image: IMage;
	author: IUser;
	slug: string;
	category: ICategory;
	published_at: Date;
}

export interface IMagazine {
	id: string;
	edition: string;
	cover: {
		url: string;
	};
	title: string;
	issue: string;
	pdf: {
		url: string;
	};
	date: Date;
}

export interface ICategory {
	slug: string;
	name: string;
}
