let aboutUs = {
    icon: 'pe-7s-info',
    label: 'About Us',
    to: '#/dashboard/home#aboutUs'
};

let account = {
    icon: 'pe-7s-user',
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

export const AboutUs = [aboutUs];

export const AuthNav = [
    {
        icon: 'pe-7s-home',
        label: 'Home',
        content: [
            {
                label: 'Professional Buyers',
                to: '#/dashboard/buyers'
            },
            {
                label: 'Suppliers',
                to: '#/dashboard/suppliers'
            }
        ]
    },
    account,
    aboutUs
];

export const UserNav = [
    {
        icon: 'pe-7s-home',
        label: 'esorus',
        content: [
            {
                label: 'Professional Buyers',
                to: '#/dashboard/buyers'
            },
            {
                label: 'Supplier',
                to: '#/dashboard/suppliers'
            }
        ]
    },
    aboutUs
];

let confirm = {
    icon: 'pe-7s-user',
    label: 'Confirmation Required',
    content: [
        {
            label: 'Confirmation Required',
            to: '#/dashboard/confirm'
        }
    ]
};

let InitialNavs = {
    icon: 'pe-7s-home',
    label: 'Home',
    content: [
        {
            label: 'Professional Buyers',
            to: '#/dashboard/buyers'
        },
        {
            label: 'Suppliers',
            to: '#/dashboard/suppliers'
        }
    ]
};

export const ConfirmNav = [InitialNavs, confirm, aboutUs];

export const Supplier = [InitialNavs, aboutUs];

export const Buyer = [InitialNavs, aboutUs];
