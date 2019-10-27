let aboutUs = {
    icon: 'pe-7s-info',
    label: 'About Us',
    to: '#/dashboard/about'
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
