export interface SideNavItem {
    label: string;
    idToGo: string;
    subMenu?: SideNavItem[];
}
