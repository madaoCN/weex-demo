package com.madao.weex_awsome;

import android.app.Application;
import com.nostra13.universalimageloader.core.ImageLoader;
import com.nostra13.universalimageloader.core.ImageLoaderConfiguration;
import com.taobao.weex.InitConfig;
import com.taobao.weex.WXEnvironment;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.common.WXException;
import com.taobao.weex.utils.LogLevel;
import weex.WXHTTPAdapter;
import weex.WXImageAdapter;

public class App extends Application {
    @Override
    public void onCreate() {
        super.onCreate();

        WXEnvironment.sDebugServerConnectable = true;
        WXEnvironment.sRemoteDebugMode = false;
        WXEnvironment.sRemoteDebugProxyUrl = "ws://10.5.6.7:8088/debugProxy/native";

        InitConfig weexConfig = new InitConfig.Builder().setImgAdapter(new WXImageAdapter(getApplicationContext())).build();

        WXSDKEngine.initialize(this, weexConfig);
        if (!WXEnvironment.isApkDebugable()) {
            WXEnvironment.sLogLevel = LogLevel.WARN;
        }

        ImageLoaderConfiguration imageLoaderConfiguration = ImageLoaderConfiguration.createDefault(this);
        ImageLoader.getInstance().init(imageLoaderConfiguration);
    }
}
