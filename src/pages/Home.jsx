import React from 'react';

function Home() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-4">Home</h1>
            <div className="space-y-4">
                <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer">
                    <div className="flex-1">
                        <h3 className="font-medium">显示</h3>
                        <p className="text-sm text-gray-500">亮度、夜间、屏幕模式、分辨率和缩放比例</p>
                    </div>
                    <div className="text-gray-400">›</div>
                </div>

                <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer">
                    <div className="flex-1">
                        <h3 className="font-medium">声音</h3>
                        <p className="text-sm text-gray-500">音量、输出、输入、声音效果</p>
                    </div>
                    <div className="text-gray-400">›</div>
                </div>

                <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer">
                    <div className="flex-1">
                        <h3 className="font-medium">通知</h3>
                        <p className="text-sm text-gray-500">应用程序的通知设置、操作中心</p>
                    </div>
                    <div className="text-gray-400">›</div>
                </div>

                <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer">
                    <div className="flex-1">
                        <h3 className="font-medium">专注</h3>
                        <p className="text-sm text-gray-500">专注时段</p>
                    </div>
                    <div className="text-gray-400">›</div>
                </div>

                <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer">
                    <div className="flex-1">
                        <h3 className="font-medium">电源</h3>
                        <p className="text-sm text-gray-500">休眠计划、"电池"、"性能和节能"</p>
                    </div>
                    <div className="text-gray-400">›</div>
                </div>

                <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer">
                    <div className="flex-1">
                        <h3 className="font-medium">存储</h3>
                        <p className="text-sm text-gray-500">存储空间、备份和同步</p>
                    </div>
                    <div className="text-gray-400">›</div>
                </div>
            </div>
        </div>
    );
}

export default Home; 