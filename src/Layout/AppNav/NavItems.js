let aboutUs = {
    label: 'About Us',
    to: '#/dashboard/home#aboutUs'
};

let account = {
    label: 'Account',
    content: [
        {
            label: 'Log In',
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
        label: 'Home',
        content: [
            {
                label: 'Interioir Designers',
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
        label: 'esorus',
        content: [
            {
                label: 'Interioir Designers',
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
    label: 'Home',
    content: [
        {
            label: 'Interioir Designers',
            to: '#/dashboard/buyers'
        },
        {
            label: 'Suppliers',
            to: '#/dashboard/suppliers'
        }
    ]
};

let logout = {
    label: 'Log out',
    to: '#/dashboard/logout'
};

export const ConfirmNav = [InitialNavs, confirm, aboutUs];

export const Supplier = [InitialNavs, aboutUs, logout];

export const Buyer = [InitialNavs, aboutUs, logout];
