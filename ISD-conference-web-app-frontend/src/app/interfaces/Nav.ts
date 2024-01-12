export interface NavDefaultItem {
    route: string;
    label: string;
    isActive: boolean;
}

export interface NavDropdownItem {
    items: NavDefaultItem[];
    isActive: boolean;
    label: string;
}

export interface NavItem {
    item: NavDefaultItem | NavDropdownItem;
}

