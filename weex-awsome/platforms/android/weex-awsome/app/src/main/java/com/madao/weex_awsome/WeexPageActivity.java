package com.madao.weex_awsome;

import android.os.Bundle;
import android.view.KeyEvent;
import android.view.View;
import com.taobao.weex.IWXRenderListener;
import com.taobao.weex.WXEnvironment;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.common.WXRenderStrategy;

import java.io.IOException;

public class WeexPageActivity extends MainActivity implements IWXRenderListener {

    WXSDKInstance instance;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        recreateInstace();

        String weexURL = getIntent().getDataString();
        if (weexURL != null) {
            renderByURL(weexURL);
        } else {

            renderByURL(getString(R.string.weex_main_url_debug));
        }

    }

    @Override
    public void onViewCreated(WXSDKInstance instance, View view) {

        setContentView(view);
    }

    @Override
    public void onRenderSuccess(WXSDKInstance instance, int width, int height) {

    }

    @Override
    public void onRefreshSuccess(WXSDKInstance instance, int width, int height) {

    }

    @Override
    public void onException(WXSDKInstance instance, String errCode, String msg) {

    }

    @Override
    protected void onStart() {
        super.onStart();
        instance.onActivityStart();
//        try {
//            JandanWebService.getInstance(this).onActivityStart();
//        } catch (IOException e) {
//            LogUtil.e("启动Web服务失败", e);
//        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        instance.onActivityResume();
    }

    @Override
    protected void onStop() {
        super.onStop();
        instance.onActivityStop();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        instance.onActivityDestroy();
    }

    @Override
    protected void onPause() {
        super.onPause();
        instance.onActivityPause();
//        JandanWebService.getInstance(this).onActivityPause();
    }

    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_VOLUME_DOWN) {
            String bundleUrl = instance.getBundleUrl();
            recreateInstace();
            renderByURL(bundleUrl);
            return true;
        }
        return super.onKeyDown(keyCode, event);
    }

    public void recreateInstace(){
        if (instance != null) {
            instance.registerRenderListener(null);
            instance.destroy();
            instance = null;
        }
        instance = new WXSDKInstance(this);
        instance.registerRenderListener(this);
    }

    public void renderByURL(String weexURL){
        instance.renderByUrl(getString(R.string.app_name), weexURL ,null, null, WXRenderStrategy.APPEND_ASYNC);
    }
}
