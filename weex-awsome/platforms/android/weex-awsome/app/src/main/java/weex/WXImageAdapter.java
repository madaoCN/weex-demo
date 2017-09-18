package weex;

import android.content.Context;
import android.content.pm.ApplicationInfo;
import android.widget.ImageView;
import com.nostra13.universalimageloader.core.DisplayImageOptions;
import com.nostra13.universalimageloader.core.ImageLoader;
import com.nostra13.universalimageloader.core.display.RoundedBitmapDisplayer;
import com.taobao.weex.adapter.IWXImgLoaderAdapter;
import com.taobao.weex.common.WXImageStrategy;
import com.taobao.weex.dom.WXImageQuality;

public class WXImageAdapter implements IWXImgLoaderAdapter {
    static DisplayImageOptions options = new DisplayImageOptions.Builder()
            .cacheInMemory(true)                               //启用内存缓存
            .cacheOnDisk(true)                                 //启用外存缓存
            .considerExifParams(true)                          //启用EXIF和JPEG图像格式
            .displayer(new RoundedBitmapDisplayer(20))         //设置显示风格这里是圆角矩形
            .build();

    private Context mContext;

    public WXImageAdapter(Context context){
        mContext = context;
    }

    @Override
    public void setImage(String url, final ImageView imageView, WXImageQuality quality, WXImageStrategy strategy) {
        if (url == null) {
            return;
        }
        else if (url.startsWith("//")) {
            url = "http://" + url;
        }
        else if (url.startsWith("file://")) {
            url = url.replace("file://", "http://");
        }
        else if (url.startsWith("xcassets:"))//获取本地图片
        {
            String imageName = url.substring(9);
            int resId = mContext.getResources().getIdentifier(imageName, "drawable" , mContext.getPackageName());
            imageView.setImageResource(resId);
            return;
        }
        ImageLoader.getInstance().displayImage(url, imageView, options);
    }
}