import sideBar6 from '../assets/utils/images/sidebar/interior1.jpg';
import homeBackground from '../assets/utils/images/originals/background.png';
import buyersBackground from '../assets/utils/images/originals/buyersBackground2.png';
import suppliersBackground from '../assets/utils/images/originals/suppliersBackground9.jpg';

export const SET_ENABLE_BACKGROUND_IMAGE =
    'THEME_OPTIONS/SET_ENABLE_BACKGROUND_IMAGE';

export const SET_ENABLE_MOBILE_MENU = 'THEME_OPTIONS/SET_ENABLE_MOBILE_MENU';
export const SET_ENABLE_MOBILE_MENU_SMALL =
    'THEME_OPTIONS/SET_ENABLE_MOBILE_MENU_SMALL';

export const SET_ENABLE_FIXED_HEADER = 'THEME_OPTIONS/SET_ENABLE_FIXED_HEADER';
export const SET_ENABLE_HEADER_SHADOW =
    'THEME_OPTIONS/SET_ENABLE_HEADER_SHADOW';
export const SET_ENABLE_SIDEBAR_SHADOW =
    'THEME_OPTIONS/SET_ENABLE_SIDEBAR_SHADOW';
export const SET_ENABLE_FIXED_SIDEBAR =
    'THEME_OPTIONS/SET_ENABLE_FIXED_SIDEBAR';
export const SET_ENABLE_CLOSED_SIDEBAR =
    'THEME_OPTIONS/SET_ENABLE_CLOSED_SIDEBAR';
export const SET_ENABLE_FIXED_FOOTER = 'THEME_OPTIONS/SET_ENABLE_FIXED_FOOTER';

export const SET_ENABLE_PAGETITLE_ICON =
    'THEME_OPTIONS/SET_ENABLE_PAGETITLE_ICON';
export const SET_ENABLE_PAGETITLE_SUBHEADING =
    'THEME_OPTIONS/SET_ENABLE_PAGETITLE_SUBHEADING';
export const SET_ENABLE_PAGE_TABS_ALT =
    'THEME_OPTIONS/SET_ENABLE_PAGE_TABS_ALT';

// NEW
export const SET_ENABLE_HOME_BACKGROUND =
    'THEME_OPTIONS/SET_ENABLE_HOME_BACKGROUND';
export const SET_ENABLE_BUYER_BACKGROUND =
    'THEME_OPTIONS/SET_ENABLE_BUYER_BACKGROUND';
export const SET_ENABLE_SUPPLIER_BACKGROUND =
    'THEME_OPTIONS/SET_ENABLE_SUPPLIER_BACKGROUND';

export const SET_HOME_BACKGROUND = 'THEME_OPTION/SET_HOME_BACKGROUND';
export const SET_BUYER_BACKGROUND = 'THEME_OPTION/SET_BUYER_BACKGROUND';
export const SET_SUPPLIER_BACKGROUND = 'THEME_OPTION/SET_SUPPLIER_BACKGROUND';

// END NEW

export const SET_BACKGROUND_IMAGE = 'THEME_OPTIONS/SET_BACKGROUND_IMAGE';
export const SET_BACKGROUND_COLOR = 'THEME_OPTIONS/SET_BACKGROUND_COLOR';
export const SET_COLOR_SCHEME = 'THEME_OPTIONS/SET_COLOR_SCHEME';
export const SET_BACKGROUND_IMAGE_OPACITY =
    'THEME_OPTIONS/SET_BACKGROUND_IMAGE_OPACITY';

export const SET_HEADER_BACKGROUND_COLOR =
    'THEME_OPTIONS/SET_HEADER_BACKGROUND_COLOR';

export const setEnableBackgroundImage = enableBackgroundImage => ({
    type: SET_ENABLE_BACKGROUND_IMAGE,
    enableBackgroundImage
});
// NEW
export const setEnableHomeBackground = enableHomeBackground => ({
    type: SET_ENABLE_HOME_BACKGROUND,
    enableHomeBackground
});

export const setHomeBackground = homeBackground => ({
    type: SET_HOME_BACKGROUND,
    homeBackground
});

export const setEnableBuyerBackground = enableBuyerBackground => ({
    type: SET_ENABLE_BUYER_BACKGROUND,
    enableBuyerBackground
});
export const setBuyerBackground = buyerBackground => ({
    type: SET_BUYER_BACKGROUND,
    buyerBackground
});

export const setEnableSupplierBackground = enableSupplierBackground => ({
    type: SET_ENABLE_SUPPLIER_BACKGROUND,
    enableSupplierBackground
});

export const setSupplierBackground = supplierBackground => ({
    type: SET_SUPPLIER_BACKGROUND,
    supplierBackground
});

//NEW

export const setEnableFixedHeader = enableFixedHeader => ({
    type: SET_ENABLE_FIXED_HEADER,
    enableFixedHeader
});

export const setEnableHeaderShadow = enableHeaderShadow => ({
    type: SET_ENABLE_HEADER_SHADOW,
    enableHeaderShadow
});

export const setEnableSidebarShadow = enableSidebarShadow => ({
    type: SET_ENABLE_SIDEBAR_SHADOW,
    enableSidebarShadow
});

export const setEnablePageTitleIcon = enablePageTitleIcon => ({
    type: SET_ENABLE_PAGETITLE_ICON,
    enablePageTitleIcon
});

export const setEnablePageTitleSubheading = enablePageTitleSubheading => ({
    type: SET_ENABLE_PAGETITLE_SUBHEADING,
    enablePageTitleSubheading
});

export const setEnablePageTabsAlt = enablePageTabsAlt => ({
    type: SET_ENABLE_PAGE_TABS_ALT,
    enablePageTabsAlt
});

export const setEnableFixedSidebar = enableFixedSidebar => ({
    type: SET_ENABLE_FIXED_SIDEBAR,
    enableFixedSidebar
});

export const setEnableClosedSidebar = enableClosedSidebar => ({
    type: SET_ENABLE_CLOSED_SIDEBAR,
    enableClosedSidebar
});

export const setEnableMobileMenu = enableMobileMenu => ({
    type: SET_ENABLE_MOBILE_MENU,
    enableMobileMenu
});

export const setEnableMobileMenuSmall = enableMobileMenuSmall => ({
    type: SET_ENABLE_MOBILE_MENU_SMALL,
    enableMobileMenuSmall
});

export const setEnableFixedFooter = enableFixedFooter => ({
    type: SET_ENABLE_FIXED_FOOTER,
    enableFixedFooter
});

export const setBackgroundColor = backgroundColor => ({
    type: SET_BACKGROUND_COLOR,
    backgroundColor
});

export const setHeaderBackgroundColor = headerBackgroundColor => ({
    type: SET_HEADER_BACKGROUND_COLOR,
    headerBackgroundColor
});

export const setColorScheme = colorScheme => ({
    type: SET_COLOR_SCHEME,
    colorScheme
});

export const setBackgroundImageOpacity = backgroundImageOpacity => ({
    type: SET_BACKGROUND_IMAGE_OPACITY,
    backgroundImageOpacity
});

export const setBackgroundImage = backgroundImage => ({
    type: SET_BACKGROUND_IMAGE,
    backgroundImage
});

export default function reducer(
    state = {
        backgroundColor: 'bg-royal sidebar-text-light',
        headerBackgroundColor: 'bg-strong-bliss header-text-light',
        enableMobileMenuSmall: 'app-header',
        enableBackgroundImage: true,
        enableClosedSidebar: true,
        enableFixedHeader: true,
        enableHeaderShadow: true,
        enableSidebarShadow: true,
        enableFixedFooter: true,
        enableFixedSidebar: true,
        colorScheme: 'white',
        backgroundImage: sideBar6,
        backgroundImageOpacity: 'opacity-06',
        enablePageTitleIcon: true,
        enablePageTitleSubheading: true,
        enablePageTabsAlt: false,
        homeBackground: homeBackground,
        buyersBackground: buyersBackground,
        suppliersBackground: suppliersBackground,
        enableHomeBackground: true,
        enableSupplierBackground: false,
        enableBuyerBackground: true
    },
    action
) {
    console.log(state.inSuppliersPage);
    switch (action.type) {
        case SET_ENABLE_SUPPLIER_BACKGROUND:
            return {
                ...state,
                enableSupplierBackground: action.enableSupplierBackground
            };

        case SET_SUPPLIER_BACKGROUND:
            return {
                ...state,
                supplierBackground: action.supplierBackground
            };

        case SET_ENABLE_BUYER_BACKGROUND:
            return {
                ...state,
                enableBuyerBackground: action.enableBuyerBackground
            };

        case SET_BUYER_BACKGROUND:
            return {
                ...state,
                buyerBackground: action.buyerBackground
            };

        case SET_ENABLE_HOME_BACKGROUND:
            return {
                ...state,
                enableHomeBackground: action.enableHomeBackground
            };
        case SET_HOME_BACKGROUND:
            return {
                ...state,
                homeBackground: action.homeBackground
            };
        case SET_ENABLE_BACKGROUND_IMAGE:
            return {
                ...state,
                enableBackgroundImage: action.enableBackgroundImage
            };

        case SET_ENABLE_FIXED_HEADER:
            return {
                ...state,
                enableFixedHeader: action.enableFixedHeader
            };

        case SET_ENABLE_HEADER_SHADOW:
            return {
                ...state,
                enableHeaderShadow: action.enableHeaderShadow
            };

        case SET_ENABLE_SIDEBAR_SHADOW:
            return {
                ...state,
                enableSidebarShadow: action.enableSidebarShadow
            };

        case SET_ENABLE_PAGETITLE_ICON:
            return {
                ...state,
                enablePageTitleIcon: action.enablePageTitleIcon
            };

        case SET_ENABLE_PAGETITLE_SUBHEADING:
            return {
                ...state,
                enablePageTitleSubheading: action.enablePageTitleSubheading
            };

        case SET_ENABLE_PAGE_TABS_ALT:
            return {
                ...state,
                enablePageTabsAlt: action.enablePageTabsAlt
            };

        case SET_ENABLE_FIXED_SIDEBAR:
            return {
                ...state,
                enableFixedSidebar: action.enableFixedSidebar
            };

        case SET_ENABLE_MOBILE_MENU:
            return {
                ...state,
                enableMobileMenu: action.enableMobileMenu
            };

        case SET_ENABLE_MOBILE_MENU_SMALL:
            return {
                ...state,
                enableMobileMenuSmall: action.enableMobileMenuSmall
            };

        case SET_ENABLE_CLOSED_SIDEBAR:
            return {
                ...state,
                enableClosedSidebar: action.enableClosedSidebar
            };

        case SET_ENABLE_FIXED_FOOTER:
            return {
                ...state,
                enableFixedFooter: action.enableFixedFooter
            };

        case SET_BACKGROUND_COLOR:
            return {
                ...state,
                backgroundColor: action.backgroundColor
            };

        case SET_HEADER_BACKGROUND_COLOR:
            return {
                ...state,
                headerBackgroundColor: action.headerBackgroundColor
            };

        case SET_COLOR_SCHEME:
            return {
                ...state,
                colorScheme: action.colorScheme
            };

        case SET_BACKGROUND_IMAGE:
            return {
                ...state,
                backgroundImage: action.backgroundImage
            };

        case SET_BACKGROUND_IMAGE_OPACITY:
            return {
                ...state,
                backgroundImageOpacity: action.backgroundImageOpacity
            };
    }
    return state;
}
