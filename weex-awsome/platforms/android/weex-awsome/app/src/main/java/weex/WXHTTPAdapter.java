package weex;

import com.taobao.weex.adapter.DefaultWXHttpAdapter;
import com.taobao.weex.common.WXRequest;

public class WXHTTPAdapter extends DefaultWXHttpAdapter {
    @Override
    public void sendRequest(WXRequest request, OnHttpListener listener) {
        super.sendRequest(request, listener);
    }
}