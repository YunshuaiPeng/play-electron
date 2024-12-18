import React from 'react';
import {
    Button,
    Text,
    SearchBox,
} from '@fluentui/react-components';
import {
    HomeRegular,
    SystemRegular,
    BluetoothRegular,
    WifiSettingsRegular,
    DrawImageRegular,
    AppsRegular,
    PersonRegular,
    ClockRegular,
    GamesRegular,
    AccessibilityRegular,
    ShieldLockRegular,
    ArrowDownloadRegular,
} from '@fluentui/react-icons';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
    const location = useLocation();
    const [searchText, setSearchText] = React.useState('');

    // Add console.log for debugging
    console.log('Current pathname:', location.pathname);

    const menuItems = [
        { path: '/', icon: <HomeRegular />, label: 'Home' },
        { path: '/system', icon: <SystemRegular />, label: 'System' },
        { path: '/bluetooth', icon: <BluetoothRegular />, label: 'Bluetooth & devices' },
        { path: '/network', icon: <WifiSettingsRegular />, label: 'Network & Internet' },
        { path: '/personalization', icon: <DrawImageRegular />, label: 'Personalization' },
        { path: '/apps', icon: <AppsRegular />, label: 'Apps' },
        { path: '/account', icon: <PersonRegular />, label: 'Accounts' },
        { path: '/time', icon: <ClockRegular />, label: 'Time & language' },
        { path: '/gaming', icon: <GamesRegular />, label: 'Gaming' },
        { path: '/accessibility', icon: <AccessibilityRegular />, label: 'Accessibility' },
        { path: '/privacy', icon: <ShieldLockRegular />, label: 'Privacy & security' },
        { path: '/update', icon: <ArrowDownloadRegular />, label: 'Windows Update' },
    ];

    const filteredItems = menuItems.filter(item =>
        item.label.toLowerCase().includes(searchText.trim().toLowerCase())
    );

    return (
        <div className="w-80 bg-white border-r border-gray-100 p-2">
            <div className="px-3 py-4">
                <SearchBox
                    placeholder="Find a setting"
                    className="w-full mb-4"
                    value={searchText}
                    onChange={(e, data) => setSearchText(data.value)}
                />
            </div>
            <nav className="flex flex-col">
                {filteredItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className="text-decoration-none"
                    >
                        <Button
                            icon={item.icon}
                            appearance={location.pathname === item.path ? "primary" : "transparent"}
                            style={{ justifyContent: 'flex-start' }}
                            className={`w-full`}
                        >
                            <span className="ml-2 text-sm">{item.label}</span>
                        </Button>
                    </Link>
                ))}
            </nav>
        </div>
    );
}

export default Sidebar;