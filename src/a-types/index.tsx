export interface IStoreState {
    todos: todo[];
    visibilityFilter: VisibilityFilters;
    test: {
        title: string,
        acFlag: boolean
    }
}

export enum VisibilityFilters {
    SHOW_ALL= 'SHOW_ALL',
    SHOW_COMPLETED = 'SHOW_COMPLETED',
    SHOW_ACTIVE = 'SHOW_ACTIVE'
}

export interface todo {
    completed: boolean
    id: number
    text: string
}

export interface metas {
    title: string, 
    icon: string,
    hidden?: boolean, 
    for?: string,
    iconActive?: string
}

export interface menuLists {
    menu_name: string,
	path: string,
	meta: metas,
	children: menuLists[],
    keys?: string[]
}

