let dashboard = {
    icon: 'pe-7s-rocket',
    label: 'Dashboard',
    content: [
        {
            label: 'الغياب',
            to: '#/dashboard/attendance'
        },
        {
            label: 'الإستمارات',
            to: '#/dashboard/students'
        },
        {
            label: 'المرفوضين',
            to: '#/dashboard/declined'
        },
        {
            label: 'اعمال السنة',
            content: [
                {
                    label: 'تسجيل حصة',
                    to: '#/dashboard/classwork'
                },
                {
                    label: 'عرض الحصص',
                    to: '#dashboard/yearwork'
                }
            ]
        },
        {
            label: 'التقارير',
            content: [
                {
                    label: 'المجموعات',
                    to: '#/dashboard/reportgroup'
                },
                {
                    label: 'السناتر',
                    to: '#/dashboard/reportcenter'
                },
                {
                    label: 'الحصص',
                    to: '#/dashboard/reportclasses'
                }
            ]
        },
        {
            label: 'تعديل بيانات الطلاب',
            to: '#/dashboard/student-data'
        }
    ]
};

let aboutUs = {
    icon: 'pe-7s-info',
    label: 'About Us',
    to: '#/dashboard/aboutus'
};

let adminPanel = {
    icon: 'lnr-license',
    label: 'Admin Panel',
    content: [
        {
            label: 'Admin Manager',
            to: '#/dashboard/adminmanager'
        },
        {
            label: 'المحتوي',
            to: '#/dashboard/content'
        },
        {
            label: 'الادارة',
            content: [
                {
                    label: 'المجموعات',
                    to: '#/dashboard/groups'
                },
                {
                    label: 'السناتر',
                    to: '#/dashboard/centers'
                }
            ]
        }
    ]
};

let account = {
    icon: 'pe-7s-id',
    label: 'Account',
    content: [
        {
            label: 'Login',
            to: '#/dashboard/login'
        },
        {
            label: 'Sign Up',
            to: '#/dashboard/signup'
        }
    ]
};

export const ConfirmNav = [
    {
        icon: 'pe-7s-home',
        label: 'Confirm',
        content: [
            {
                label: 'Email Confirmation',
                to: '#/dashboard/confirm'
            }
        ]
    },
    aboutUs
];

export const CompleteNav = [
    {
        icon: 'pe-7s-home',
        label: 'Complete',
        content: [
            {
                label: 'Complete Sign Up',
                to: '#/dashboard/completesignup'
            }
        ]
    },
    aboutUs
];
export const AboutUs = [aboutUs];
export const AuthNav = [account, aboutUs];

export const AdminNav = [dashboard, aboutUs];

export const ModeratorNav = [adminPanel, dashboard, aboutUs];

export const StudentNav = [
    {
        icon: 'pe-7s-home',
        label: 'Home',
        content: [
            {
                label: 'Application',
                to: '#/dashboard/application'
            },
            {
                label: 'Year Work',
                to: '#/dashboard/centers'
            },
            {
                label: 'Posts',
                to: '#/dashboard/posts'
            }
        ]
    },
    {
        icon: 'pe-7s-diamond',
        label: 'Attendance',
        content: [
            {
                label: 'Centers',
                to: '#/dashboard/centers'
            },
            {
                label: 'Classes',
                to: '#/dashboard/classes'
            },
            {
                label: 'Materials',
                to: '#/dashboard/materials'
            }
        ]
    },
    aboutUs
];

export const UserNav = [
    {
        icon: 'pe-7s-home',
        label: 'Home',
        content: [
            {
                label: 'Application',
                to: '#/dashboard/application'
            }
        ]
    },
    aboutUs
];

export const ComponentsNav = [
    {
        icon: 'pe-7s-diamond',
        label: 'Elements',
        content: [
            {
                label: 'Standard Buttons',
                to: '#/elements/buttons-standard'
            },
            {
                label: 'Dropdowns',
                to: '#/elements/dropdowns'
            },
            {
                label: 'Icons',
                to: '#/elements/icons'
            },
            {
                label: 'Badges',
                to: '#/elements/badges-labels'
            },
            {
                label: 'Cards',
                to: '#/elements/cards'
            },
            {
                label: 'List Groups',
                to: '#/elements/list-group'
            },
            {
                label: 'Navigation Menus',
                to: '#/elements/navigation'
            },
            {
                label: 'Utilities',
                to: '#/elements/utilities'
            }
        ]
    },
    {
        icon: 'pe-7s-car',
        label: 'Components',
        content: [
            {
                label: 'Tabs',
                to: '#/components/tabs'
            },
            {
                label: 'Notifications',
                to: '#/components/notifications'
            },
            {
                label: 'Modals',
                to: '#/components/modals'
            },
            {
                label: 'Progress Bar',
                to: '#/components/progress-bar'
            },
            {
                label: 'Tooltips & Popovers',
                to: '#/components/tooltips-popovers'
            },
            {
                label: 'Carousel',
                to: '#/components/carousel'
            },
            {
                label: 'Maps',
                to: '#/components/maps'
            },
            {
                label: 'Standard Buttons',
                to: '#/elements/buttons-standard'
            },
            {
                label: 'Dropdowns',
                to: '#/elements/dropdowns'
            },
            {
                label: 'Icons',
                to: '#/elements/icons'
            },
            {
                label: 'Badges',
                to: '#/elements/badges-labels'
            },
            {
                label: 'Cards',
                to: '#/elements/cards'
            },
            {
                label: 'List Groups',
                to: '#/elements/list-group'
            },
            {
                label: 'Navigation Menus',
                to: '#/elements/navigation'
            },
            {
                label: 'Utilities',
                to: '#/elements/utilities'
            }
        ]
    },
    {
        icon: 'pe-7s-display2',
        label: 'Regular Tables',
        to: '#/tables/regular-tables'
    }
];
export const FormsNav = [
    {
        icon: 'pe-7s-light',
        label: 'Controls',
        to: '#/forms/controls'
    },
    {
        icon: 'pe-7s-eyedropper',
        label: 'Layouts',
        to: '#/forms/layouts'
    },
    {
        icon: 'pe-7s-pendrive',
        label: 'Validation',
        to: '#/forms/validation'
    }
];
export const WidgetsNav = [
    {
        icon: 'pe-7s-graph2',
        label: 'Dashboard Boxes',
        to: '#/widgets/dashboard-boxes'
    }
];
export const ChartsNav = [
    {
        icon: 'pe-7s-graph2',
        label: 'ChartJS',
        to: '#/charts/chartjs'
    }
];
