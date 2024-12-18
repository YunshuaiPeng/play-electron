import React from 'react';

function Home() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-4">Home</h1>
            <div className="space-y-4">
                <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer">
                    <div className="flex-1">
                        <h3 className="font-medium">Display</h3>
                        <p className="text-sm text-gray-500">Brightness, night mode, screen mode, resolution and scale</p>
                    </div>
                    <div className="text-gray-400">›</div>
                </div>

                <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer">
                    <div className="flex-1">
                        <h3 className="font-medium">Sound</h3>
                        <p className="text-sm text-gray-500">Volume, output, input, sound effects</p>
                    </div>
                    <div className="text-gray-400">›</div>
                </div>

                <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer">
                    <div className="flex-1">
                        <h3 className="font-medium">Notifications</h3>
                        <p className="text-sm text-gray-500">App notifications settings, action center</p>
                    </div>
                    <div className="text-gray-400">›</div>
                </div>

                <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer">
                    <div className="flex-1">
                        <h3 className="font-medium">Focus</h3>
                        <p className="text-sm text-gray-500">Focus sessions</p>
                    </div>
                    <div className="text-gray-400">›</div>
                </div>

                <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer">
                    <div className="flex-1">
                        <h3 className="font-medium">Power</h3>
                        <p className="text-sm text-gray-500">Sleep schedule, battery, performance and power saving</p>
                    </div>
                    <div className="text-gray-400">›</div>
                </div>

                <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer">
                    <div className="flex-1">
                        <h3 className="font-medium">Storage</h3>
                        <p className="text-sm text-gray-500">Storage space, backup and sync</p>
                    </div>
                    <div className="text-gray-400">›</div>
                </div>
            </div>
        </div>
    );
}

export default Home; 